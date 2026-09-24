import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_WORDS, getWordById } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats, getDueWordIds } from '../lib/srs'
import { speakChinese } from '../lib/tts'
import { VolumeIcon, CheckIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'

const RATINGS = [
  { value: 0, label: 'Lại', className: 'bg-red-500' },
  { value: 1, label: 'Khó', className: 'bg-sun-500' },
  { value: 2, label: 'Ổn', className: 'bg-sky-500' },
  { value: 3, label: 'Dễ', className: 'bg-teal-500' }
]

export default function FlashcardsPage() {
  const { srsState, rateCard } = useProgress()
  const allIds = useMemo(() => ALL_WORDS.map((w) => w.id), [])
  const stats = useMemo(() => getCardStats(allIds, srsState), [allIds, srsState])
  const [queue, setQueue] = useState(() => getDueWordIds(allIds, srsState, 20))
  const [reviewed, setReviewed] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const isBrandNew = stats.learned === 0

  const currentId = queue[0]
  const currentWord = currentId ? getWordById(currentId) : null
  const accent = accentFor(reviewed)

  function handleRate(rating) {
    rateCard(currentId, rating)
    setReviewed((n) => n + 1)
    setFlipped(false)
    setQueue((q) => q.slice(1))
  }

  if (!currentWord) {
    return (
      <div className="px-4 pt-6">
        <h1 className="mb-4 text-2xl text-brand-800">Ôn tập</h1>
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white">
            <CheckIcon width={28} height={28} />
          </span>
          <p className="text-lg">
            {reviewed > 0 ? `🎉 Đã ôn xong ${reviewed} thẻ!` : 'Không có thẻ nào cần ôn lúc này.'}
          </p>
          <p className="mt-1 text-sm text-white/90">Học bài mới hoặc quay lại sau nhé.</p>
          <Link to="/bai-hoc" className="mt-4 inline-block rounded-xl bg-white px-5 py-2.5 font-semibold text-brand-700">
            Học bài mới
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl text-brand-800">Ôn tập</h1>
        <span className="text-sm text-gray-500">Còn {queue.length} thẻ</span>
      </div>

      {isBrandNew && reviewed === 0 && (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-sun-100 p-3">
          <p className="text-xs text-gray-700">
            💡 Bạn chưa học từ nào. Nên học ở mục <b>Bài học</b> trước, rồi quay lại đây ôn cho nhớ lâu.
          </p>
          <Link to="/bai-hoc" className="shrink-0 rounded-lg bg-sun-600 px-3 py-1.5 text-xs font-semibold text-white">
            Bài học
          </Link>
        </div>
      )}

      <button
        onClick={() => setFlipped((f) => !f)}
        className={`flex min-h-[16rem] w-full flex-col items-center justify-center rounded-3xl border-t-4 bg-white p-6 text-center shadow-sm ${accent.topBorder}`}
      >
        <p className="text-5xl text-gray-800">{currentWord.hanzi}</p>
        {flipped ? (
          <>
            <p className={`mt-3 text-xl ${accent.text}`}>{currentWord.pinyin}</p>
            <p className="mt-1 text-gray-600">{currentWord.meaning}</p>
            {hasPictograph(currentWord.hanzi) && (
              <div className="mt-3 flex w-full items-center gap-2 rounded-xl bg-sun-100 p-2.5">
                <PictographIcon char={currentWord.hanzi} className="h-9 w-9 shrink-0 text-sun-700" />
                <p className="text-left text-xs text-gray-700">💡 {PICTOGRAPH_HINTS[currentWord.hanzi]}</p>
              </div>
            )}
            {!hasPictograph(currentWord.hanzi) && hasRadicalHint(currentWord.hanzi) && (
              <div className="mt-3 flex w-full items-center gap-2 rounded-xl bg-teal-100 p-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-teal-700">
                  {getRadicalSymbol(currentWord.hanzi)}
                </span>
                <p className="text-left text-xs text-gray-700">🧩 {getRadicalHint(currentWord.hanzi)}</p>
              </div>
            )}
            {currentWord.example && (
              <div className={`mt-4 w-full rounded-xl ${accent.bg} p-3`}>
                <p className="text-base text-gray-800">{currentWord.example.hanzi}</p>
                <p className={`text-xs ${accent.text}`}>{currentWord.example.pinyin}</p>
                <p className="text-xs text-gray-600">{currentWord.example.meaning}</p>
              </div>
            )}
          </>
        ) : (
          <p className="mt-4 text-sm text-gray-400">Chạm để xem đáp án</p>
        )}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          speakChinese(currentWord.hanzi)
        }}
        className={`mx-auto mt-3 flex items-center gap-1 ${accent.text}`}
      >
        <VolumeIcon width={20} height={20} />
        Nghe phát âm
      </button>

      {flipped && (
        <div className="mt-6 grid grid-cols-4 gap-2">
          {RATINGS.map((r) => (
            <button
              key={r.value}
              onClick={() => handleRate(r.value)}
              className={`rounded-xl py-3 text-sm text-white ${r.className}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
