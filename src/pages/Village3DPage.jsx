import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { VILLAGE_ISLANDS } from '../data/village'
import { createVillage } from '../lib/village3d'
import { speakChinese } from '../lib/tts'

// Lang 3D ban thu (2 dao). Phan 3D o src/lib/village3d.js. Loi thoai dat trong
// khung co dinh o cuoi man hinh (kieu game) chu khong noi tren canh: hai bong
// bong to se che mat lang va de len nhau tren man hinh dien thoai. Tren canh chi
// co nhan dao va dau 💬 nho tren dau nguoi dang noi, cap nhat vi tri moi khung
// hinh bang cach sua style truc tiep de khong render lai React 60 lan/giay.
export default function Village3DPage() {
  const containerRef = useRef(null)
  const villageRef = useRef(null)
  const markerRef = useRef(null)
  const labelRefs = useRef([])
  const [active, setActive] = useState(0)
  const [lineIdx, setLineIdx] = useState(() => VILLAGE_ISLANDS.map(() => 0))
  const stateRef = useRef({ active, lineIdx })
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let village
    try {
      village = createVillage(containerRef.current)
    } catch {
      // May khong ho tro WebGL (hiem, thuong la may rat cu): bao loi thay vi trang trang.
      setFailed(true)
      return undefined
    }
    villageRef.current = village

    const place = (el, pos) => {
      if (!el) return
      el.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -100%)`
      el.style.visibility = pos.visible ? 'visible' : 'hidden'
    }
    village.onFrame(() => {
      const { active: a, lineIdx: idx } = stateRef.current
      const line = VILLAGE_ISLANDS[a].lines[idx[a]]
      const anchor = village.speakerAnchor(a, line.npc)
      if (anchor) place(markerRef.current, village.project(anchor))
      VILLAGE_ISLANDS.forEach((_, i) => place(labelRefs.current[i], village.project(village.labelAnchor(i))))
    })
    village.focusOn(0)
    return () => village.dispose()
  }, [])

  useEffect(() => {
    stateRef.current = { active, lineIdx }
    // Chi nhan vat dang noi o dao dang xem moi nhun nhay; dao kia dung yen.
    VILLAGE_ISLANDS.forEach((isl, i) =>
      villageRef.current?.setSpeaker(i, i === active ? isl.lines[lineIdx[i]].npc : null)
    )
  }, [active, lineIdx])

  function selectIsland(i) {
    setActive(i)
    villageRef.current?.focusOn(i)
  }

  function step(delta) {
    const isl = VILLAGE_ISLANDS[active]
    const n = (lineIdx[active] + delta + isl.lines.length) % isl.lines.length
    setLineIdx((cur) => cur.map((v, j) => (j === active ? n : v)))
    speakChinese(isl.lines[n].hanzi)
  }

  const island = VILLAGE_ISLANDS[active]
  const line = island.lines[lineIdx[active]]
  const npc = island.npcs.find((n) => n.id === line.npc)

  return (
    <div className="px-4 pt-6">
      <div className="mb-2 flex items-center gap-2">
        <BackButton />
        <h1 className="flex-1 text-xl text-brand-800">Làng 3D</h1>
        <Link to="/hanh-trinh" replace className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
          Bản đồ 2D
        </Link>
      </div>

      <div className="relative h-[calc(100dvh-210px)] min-h-[460px] overflow-hidden rounded-3xl bg-gradient-to-b from-sky-200 via-sky-100 to-candy-100">
        <div ref={containerRef} className="absolute inset-0 touch-none" />

        {failed ? (
          <p className="absolute inset-x-4 top-1/3 rounded-2xl bg-white p-4 text-center text-sm text-gray-600">
            Máy này chưa hiển thị được hình 3D. Bạn dùng Bản đồ 2D nhé.
          </p>
        ) : (
          <>
            {VILLAGE_ISLANDS.map((isl, i) => (
              <button
                key={isl.station}
                ref={(el) => (labelRefs.current[i] = el)}
                onClick={() => selectIsland(i)}
                className={`absolute left-0 top-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold shadow ${
                  i === active ? 'bg-brand-700 text-white' : 'bg-white/90 text-brand-700'
                }`}
                style={{ visibility: 'hidden' }}
              >
                {isl.label}
              </button>
            ))}
            <span
              ref={markerRef}
              className="pointer-events-none absolute left-0 top-0 rounded-full bg-white px-2 py-0.5 text-sm shadow"
              style={{ visibility: 'hidden' }}
            >
              💬
            </span>

            <div className="absolute inset-x-2 bottom-2 rounded-2xl bg-white/95 p-3 shadow-lg">
              <button onClick={() => speakChinese(line.hanzi)} className="block w-full text-left">
                <span className="text-xs font-semibold text-candy-600">{npc?.name} 🔊</span>
                <span className="block text-lg leading-snug text-gray-900">{line.hanzi}</span>
                <span className="block text-xs text-brand-700">{line.pinyin}</span>
                <span className="block text-xs text-gray-600">{line.meaning}</span>
              </button>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => step(-1)}
                  aria-label="Câu trước"
                  className="h-9 w-9 rounded-full bg-gray-100 text-gray-600"
                >
                  ‹
                </button>
                <span className="text-xs text-gray-400">
                  {lineIdx[active] + 1}/{island.lines.length}
                </span>
                <Link to={`/hanh-trinh?ga=${island.station}`} className="ml-auto text-xs font-semibold text-brand-700 underline">
                  Nhiệm vụ ga
                </Link>
                <button
                  onClick={() => step(1)}
                  className="rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white"
                >
                  Câu tiếp ›
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <p className="mt-2 text-center text-xs text-gray-500">
        Kéo để xoay · Chạm tên đảo để bay tới · Bản thử 2 đảo
      </p>
    </div>
  )
}
