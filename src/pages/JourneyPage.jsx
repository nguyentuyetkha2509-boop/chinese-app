import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { VolumeIcon } from '../components/Icons'
import { useProgress } from '../store/ProgressContext'
import { JOURNEY_STATIONS, JOURNEY_TITLE, taskPath } from '../data/journey'
import { loadJourney, markStickerClaimed, isTaskDone, stationStates } from '../lib/journey'
import { XP_REWARDS } from '../lib/gamification'
import { speakChinese } from '../lib/tts'
import { playCelebrate } from '../lib/sfx'

// Chieu cao moi hang tren ban do (px). Duong noi giua cac ga ve bang SVG theo
// cung thong so nay nen hai noi phai khop nhau.
const ROW_H = 132
// Vi tri ngang cua ga (phan tram), so le trai phai cho giong con duong uon luon.
const xOf = (i) => (i % 2 === 0 ? 28 : 72)

function pathD(count) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = xOf(i)
    const y = i * ROW_H + ROW_H / 2
    if (i === 0) {
      d = `M ${x} ${y}`
    } else {
      const px = xOf(i - 1)
      const py = (i - 1) * ROW_H + ROW_H / 2
      const my = (py + y) / 2
      d += ` C ${px} ${my}, ${x} ${my}, ${x} ${y}`
    }
  }
  return d
}

const NODE_STYLE = {
  done: 'bg-gradient-to-br from-emerald-400 to-teal-500 ring-4 ring-emerald-200',
  current: 'bg-gradient-to-br from-sun-400 to-candy-500 ring-4 ring-sun-200 animate-pulse',
  locked: 'bg-gray-200 ring-4 ring-gray-100 grayscale'
}

function StationSheet({ station, state, journey, progress, onClose, onClaim }) {
  const roleplayDone = journey.roleplayDone.includes(station.key)
  const claimed = journey.claimed.includes(station.key)
  const locked = state === 'locked'
  const done = state === 'done'

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={onClose}>
      <div
        className="max-h-[88dvh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-5 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-200" />
        <div className="flex items-start gap-3">
          <span className="text-4xl">{station.icon}</span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-candy-600">{station.time} · {station.hanziName}</p>
            <h2 className="text-lg font-semibold text-brand-800">{station.name}</h2>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="-mr-2 h-11 w-11 text-xl text-gray-400">
            ✕
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-700">{station.story}</p>

        {locked ? (
          <p className="mt-4 rounded-2xl bg-gray-100 p-4 text-sm text-gray-600">
            🔒 Hoàn thành ga trước để mở ga này nhé.
          </p>
        ) : (
          <>
            <div className="mt-4 rounded-2xl bg-sun-100 p-4">
              <p className="text-xs font-semibold text-sun-700">Câu dùng ngay</p>
              <div className="mt-1 flex items-start gap-2">
                <p className="flex-1 text-xl text-gray-900">{station.phrase.hanzi}</p>
                <button
                  onClick={() => speakChinese(station.phrase.hanzi)}
                  aria-label="Nghe câu"
                  className="-mt-1 shrink-0"
                >
                  <VolumeIcon width={36} height={36} alt="" />
                </button>
              </div>
              <p className="text-sm text-brand-700">{station.phrase.pinyin}</p>
              <p className="text-sm text-gray-600">{station.phrase.meaning}</p>
            </div>

            <p className="mb-2 mt-5 text-sm font-semibold text-gray-500">Nhiệm vụ</p>
            <div className="space-y-2">
              {station.tasks.map((t) => {
                const ok = isTaskDone(t, progress)
                return (
                  <Link
                    key={t.ref}
                    to={taskPath(t)}
                    className={`flex items-center gap-3 rounded-2xl p-3 text-sm shadow-sm ${
                      ok ? 'bg-emerald-50 text-emerald-800' : 'bg-white ring-1 ring-gray-200 text-gray-800'
                    }`}
                  >
                    <span className="text-lg">{ok ? '✅' : '⬜'}</span>
                    <span className="flex-1">{t.label}</span>
                    <span className="text-gray-400">›</span>
                  </Link>
                )
              })}
              <Link
                to={`/tro-chuyen-ai?vai=${station.key}`}
                className={`flex items-center gap-3 rounded-2xl p-3 text-sm shadow-sm ${
                  roleplayDone ? 'bg-emerald-50 text-emerald-800' : 'bg-brand-50 ring-1 ring-brand-200 text-brand-800'
                }`}
              >
                <span className="text-lg">{roleplayDone ? '⭐' : '🎭'}</span>
                <span className="flex-1">
                  Nhập vai với AI <span className="text-xs opacity-70">(thêm sao, không bắt buộc)</span>
                  <span className="block text-xs opacity-80">{station.roleplay.mission}</span>
                </span>
                <span className="text-gray-400">›</span>
              </Link>
            </div>

            <div className="mt-5">
              {claimed ? (
                <p className="rounded-2xl bg-emerald-100 p-4 text-center text-sm font-semibold text-emerald-800">
                  {station.sticker.icon} Đã nhận sticker {station.sticker.label}
                </p>
              ) : done ? (
                <button
                  onClick={() => onClaim(station)}
                  className="w-full rounded-2xl bg-gradient-to-r from-sun-500 to-candy-500 p-4 text-base font-semibold text-white shadow"
                >
                  {station.sticker.icon} Nhận sticker · +{XP_REWARDS.journeyStation} XP
                </button>
              ) : (
                <p className="rounded-2xl bg-gray-50 p-4 text-center text-xs text-gray-500">
                  Xong các nhiệm vụ để nhận sticker {station.sticker.icon} và mở ga tiếp theo
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function JourneyPage() {
  const { completedTopics, completedDialogues, addXp } = useProgress()
  const progress = { completedTopics, completedDialogues }
  const [journey, setJourney] = useState(() => loadJourney())
  // Giu ga dang mo tren dia chi de bam vao nhiem vu roi quay lai van thay bang chi tiet.
  const [params, setParams] = useSearchParams()
  const openKey = params.get('ga')
  const states = stationStates(progress)
  const doneCount = states.filter((s) => s === 'done').length
  const stars = journey.roleplayDone.length
  // Chua them cho trong duoi cung vi nhan ga cuoi co the xuong 2 dong.
  const height = JOURNEY_STATIONS.length * ROW_H + 28

  const openIndex = JOURNEY_STATIONS.findIndex((s) => s.key === openKey)
  const setOpen = (key) => setParams(key ? { ga: key } : {}, { replace: true })

  function handleClaim(station) {
    setJourney(markStickerClaimed(station.key))
    addXp(XP_REWARDS.journeyStation)
    playCelebrate()
  }

  return (
    <div className="px-4 pt-6 pb-10">
      <div className="mb-3 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">Hành trình</h1>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-brand-600 p-4 text-white shadow-sm">
        <p className="text-xs text-white/80">Bạn là môi giới mới ở 上海 Thượng Hải</p>
        <p className="text-lg font-semibold">{JOURNEY_TITLE}</p>
        <div className="mt-2 flex items-center gap-3 text-xs">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-sun-200"
              style={{ width: `${(doneCount / JOURNEY_STATIONS.length) * 100}%` }}
            />
          </div>
          <span>{doneCount}/{JOURNEY_STATIONS.length} ga</span>
          <span>⭐ {stars}</span>
        </div>
        <div className="mt-3 flex gap-2">
          {JOURNEY_STATIONS.map((s) => (
            <span
              key={s.key}
              title={s.sticker.label}
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
                journey.claimed.includes(s.key) ? 'bg-white/90' : 'bg-white/15 opacity-50 grayscale'
              }`}
            >
              {journey.claimed.includes(s.key) ? s.sticker.icon : '❔'}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-b from-sky-100 via-sun-50 to-candy-50"
        style={{ height }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 100 ${height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={pathD(JOURNEY_STATIONS.length)}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="6"
            strokeDasharray="2 12"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {JOURNEY_STATIONS.map((s, i) => {
          const state = states[i]
          const left = xOf(i)
          return (
            <button
              key={s.key}
              onClick={() => setOpen(s.key)}
              className="absolute flex w-36 -translate-x-1/2 flex-col items-center"
              style={{ left: `${left}%`, top: i * ROW_H + ROW_H / 2 - 36 }}
            >
              <span
                className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-full text-4xl shadow-md ${NODE_STYLE[state]}`}
              >
                {state === 'locked' ? '🔒' : s.icon}
                {journey.claimed.includes(s.key) && (
                  <span className="absolute -right-1 -top-1 rounded-full bg-white px-1 text-base shadow">
                    {s.sticker.icon}
                  </span>
                )}
                {journey.roleplayDone.includes(s.key) && (
                  <span className="absolute -bottom-1 -left-1 text-base">⭐</span>
                )}
              </span>
              <span className="mt-1 rounded-full bg-white/90 px-2 py-0.5 text-center text-xs font-semibold text-gray-700 shadow-sm">
                {s.time} · {s.name}
              </span>
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        Bấm vào một ga để xem nhiệm vụ. Mỗi ga dùng lại bài học bạn đã có.
      </p>

      {openIndex >= 0 && (
        <StationSheet
          station={JOURNEY_STATIONS[openIndex]}
          state={states[openIndex]}
          journey={journey}
          progress={progress}
          onClose={() => setOpen(null)}
          onClaim={handleClaim}
        />
      )}
    </div>
  )
}
