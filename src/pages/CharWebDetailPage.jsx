import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { VolumeIcon } from '../components/Icons'
import { CHAR_WEBS, getCharWeb } from '../data/charWebs'
import { buildCharWeb } from '../lib/charWeb'
import { speakChinese } from '../lib/tts'

// Bo cuc giong trang sach: 3 o tren, 2 trai, 2 phai, 3 duoi, chu chinh o giua
// (chiem cot giua cua hang 2-3). [hang, cot] tinh tu 1.
const SLOTS = [
  [1, 1], [1, 2], [1, 3],
  [2, 1], [2, 3],
  [3, 1], [3, 3],
  [4, 1], [4, 2], [4, 3]
]
const ROWS = 4
const CARD_H = 104
const GAP = 8
const GRID_H = ROWS * CARD_H + (ROWS - 1) * GAP

// Toa do tam o (viewBox 300 x GRID_H) de ve duong noi toi chu chinh. Duong ve
// duoi the nen chi can trung tam gan dung, phan dau mut bi the che di.
const slotX = (col) => (col - 0.5) * 100
const slotY = (row) => (row - 1) * (CARD_H + GAP) + CARD_H / 2

function Highlight({ text, char }) {
  return text.split(char).flatMap((part, i) =>
    i === 0 ? [part] : [<span key={i} className="font-semibold text-candy-600">{char}</span>, part]
  )
}

export default function CharWebDetailPage() {
  const { char } = useParams()
  const entry = getCharWeb(char)
  const web = useMemo(() => (entry ? buildCharWeb(entry) : null), [entry])
  if (!entry) return <Navigate to="/so-do-chu" replace />

  const index = CHAR_WEBS.indexOf(entry)
  const prev = CHAR_WEBS[index - 1]
  const next = CHAR_WEBS[index + 1]

  return (
    <div className="px-4 pt-6 pb-10">
      <div className="mb-3 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">
          {entry.char} /{web.pinyin}/: {entry.hanviet}
        </h1>
      </div>

      <div className="relative" style={{ height: GRID_H }}>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 300 ${GRID_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {web.words.map((w, i) => {
            const [row, col] = SLOTS[i]
            return (
              <line
                key={w.hanzi}
                x1={slotX(col)}
                y1={slotY(row)}
                x2={150}
                y2={GRID_H / 2}
                stroke="#c4b5fd"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </svg>

        <div
          className="relative grid h-full grid-cols-3"
          style={{ gridTemplateRows: `repeat(${ROWS}, ${CARD_H}px)`, gap: GAP }}
        >
          {web.words.map((w, i) => {
            const [row, col] = SLOTS[i]
            return (
              <button
                key={w.hanzi}
                onClick={() => speakChinese(w.hanzi)}
                style={{ gridRow: row, gridColumn: col }}
                className="flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white px-1 py-2 text-center shadow-sm ring-1 ring-brand-100 active:bg-brand-50"
              >
                <span className="text-lg leading-tight text-gray-900">
                  <Highlight text={w.hanzi} char={entry.char} />
                </span>
                <span className="text-xs leading-tight text-brand-700">{w.pinyin}</span>
                <span className="mt-0.5 line-clamp-2 text-xs leading-tight text-gray-600">{w.meaning}</span>
              </button>
            )
          })}

          <button
            onClick={() => speakChinese(entry.char)}
            style={{ gridRow: '2 / span 2', gridColumn: 2 }}
            className="flex items-center justify-center"
            aria-label={`Nghe chữ ${entry.char}`}
          >
            <span className="flex aspect-square w-full max-w-[8rem] flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-candy-500 text-white shadow-lg ring-4 ring-white">
              <span className="text-4xl leading-none">{entry.char}</span>
              <span className="mt-1 text-sm">{web.pinyin}</span>
              <span className="text-xs font-semibold">{entry.hanviet}</span>
            </span>
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-500">
        {entry.char} = {entry.meaning} · Bấm vào ô để nghe đọc
      </p>

      {web.examples.length > 0 && (
        <section className="mt-5 rounded-2xl bg-white p-4 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-gray-500">Ví dụ</p>
          <div className="space-y-3">
            {web.examples.map((ex, i) => (
              <div key={ex.word} className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-400">{String.fromCharCode(97 + i)}.</span>
                <div className="flex-1">
                  <p className="text-lg text-gray-900">
                    <Highlight text={ex.hanzi} char={entry.char} />
                  </p>
                  <p className="text-sm text-brand-700">{ex.pinyin}</p>
                  <p className="text-sm text-gray-600">{ex.meaning}</p>
                </div>
                <button onClick={() => speakChinese(ex.hanzi)} aria-label="Nghe câu" className="shrink-0">
                  <VolumeIcon width={32} height={32} alt="" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-5 flex gap-3">
        {prev ? (
          <Link
            to={`/so-do-chu/${encodeURIComponent(prev.char)}`}
            replace
            className="flex-1 rounded-2xl bg-white p-3 text-center text-sm font-semibold text-brand-700 shadow-sm"
          >
            ‹ {prev.char} {prev.hanviet}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/so-do-chu/${encodeURIComponent(next.char)}`}
            replace
            className="flex-1 rounded-2xl bg-brand-700 p-3 text-center text-sm font-semibold text-white shadow-sm"
          >
            {next.char} {next.hanviet} ›
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </div>
  )
}
