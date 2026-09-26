import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_WORDS, LEVELS, getWordById } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats, getDueWordIds, getLeechWordIds } from '../lib/srs'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate, playFlip } from '../lib/sfx'
import { VolumeIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { XP_REWARDS } from '../lib/gamification'
import CelebrationBadge from '../components/CelebrationBadge'
import flashcardPanda from '../assets/panda/flashcard_panda.webp'

const SESSION_SIZE = 20

const RATINGS = [
  { value: 0, label: 'Quên rồi', hint: 'gặp lại ngay', className: 'bg-red-500' },
  { value: 1, label: 'Khó nhớ', hint: 'gặp lại sớm', className: 'bg-sun-500' },
  { value: 2, label: 'Nhớ được', hint: 'vài ngày sau', className: 'bg-sky-500' },
  { value: 3, label: 'Nhớ rõ', hint: 'lâu mới gặp lại', className: 'bg-teal-500' }
]

// Chi tra ve nhung tu DA duoc gioi thieu qua Bai hoc (co san trong SRS) -
// On tap la noi rev on lai tu da hoc, khong phai noi am tham day them tu
// moi ngoai gioi han moi ngay, keo lam sai lech thong ke "da hoc".
function wordIdsForScope(scope, srsState) {
  const ids = scope === 'all' ? ALL_WORDS.map((w) => w.id) : LEVELS.find((l) => l.id === scope)?.words.map((w) => w.id) || []
  return ids.filter((id) => srsState[id])
}

// Danh sach chip cuon ngang (Tat ca, HSK1-6, Tu kho...) - co dau mo o mep phai
// goi y "con nua, vuot tiep" vi truoc day khong co dau hieu gi, de nham tuong
// HSK5/HSK6 "khong co" trong khi chi la chua vuot toi.
function ScopeChips({ chips, scope, onChange }) {
  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto">
        {chips.map((c) => (
          <button
            key={c.key}
            onClick={() => onChange(c.key)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm ${
              scope === c.key ? 'bg-brand-700 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  )
}

export default function FlashcardsPage() {
  const { srsState, rateCard, addXp } = useProgress()
  const allIds = useMemo(() => ALL_WORDS.map((w) => w.id), [])
  const stats = useMemo(() => getCardStats(allIds, srsState), [allIds, srsState])
  const leechIds = useMemo(() => getLeechWordIds(allIds, srsState), [allIds, srsState])

  const [scope, setScope] = useState('all')
  const [queue, setQueue] = useState(() => getDueWordIds(wordIdsForScope('all', srsState), srsState, SESSION_SIZE))
  const [sessionTotal, setSessionTotal] = useState(queue.length)
  const [ratingCounts, setRatingCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })
  const [sessionXp, setSessionXp] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const isBrandNew = stats.learned === 0

  const currentId = queue[0]
  const currentWord = currentId ? getWordById(currentId) : null
  const reviewed = sessionTotal - queue.length
  const accent = accentFor(reviewed)

  function buildQueueForScope(nextScope) {
    const ids = nextScope === 'leech' ? leechIds : wordIdsForScope(nextScope, srsState)
    const nextQueue =
      nextScope === 'leech' ? ids.slice(0, SESSION_SIZE) : getDueWordIds(ids, srsState, SESSION_SIZE)
    setQueue(nextQueue)
    setSessionTotal(nextQueue.length)
    setRatingCounts({ 0: 0, 1: 0, 2: 0, 3: 0 })
    setSessionXp(0)
    setFlipped(false)
  }

  function handleScopeChange(nextScope) {
    setScope(nextScope)
    buildQueueForScope(nextScope)
  }

  function handleRate(rating) {
    rateCard(currentId, rating)
    if (rating === 0) playWrong()
    else playCorrect()
    addXp(XP_REWARDS.flashcardReview)
    setSessionXp((n) => n + XP_REWARDS.flashcardReview)
    setRatingCounts((c) => ({ ...c, [rating]: c[rating] + 1 }))
    if (queue.length === 1) setTimeout(playCelebrate, 350)
    setFlipped(false)
    setQueue((q) => q.slice(1))
  }

  function handleFlip() {
    if (!flipped) {
      playFlip()
      speakChinese(currentWord.hanzi)
    }
    setFlipped((f) => !f)
  }

  const SCOPE_CHIPS = [
    { key: 'all', label: 'Tất cả' },
    ...LEVELS.map((l) => ({ key: l.id, label: l.label })),
    ...(leechIds.length > 0 ? [{ key: 'leech', label: `⚠️ Từ khó (${leechIds.length})` }] : [])
  ]

  if (!currentWord) {
    const totalRated = ratingCounts[0] + ratingCounts[1] + ratingCounts[2] + ratingCounts[3]
    return (
      <div className="px-4 pt-6">
        <h1 className="mb-4 text-2xl text-brand-800">Ôn tập</h1>

        <div className="mb-4">
          <ScopeChips chips={SCOPE_CHIPS} scope={scope} onChange={handleScopeChange} />
        </div>

        {totalRated === 0 && (
          <img
            src={flashcardPanda}
            alt="Gấu trúc mời ôn tập từ vựng"
            className="mx-auto mb-4 w-48 max-w-full"
          />
        )}

        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          {totalRated > 0 && <CelebrationBadge />}
          <p className="text-lg">
            {totalRated > 0 ? `🎉 Đã ôn xong ${totalRated} thẻ!` : 'Không có thẻ nào cần ôn ở mục này.'}
          </p>
          {totalRated > 0 ? (
            <>
              <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
                {RATINGS.map((r) => (
                  <div key={r.value} className="rounded-lg bg-white/15 py-1.5">
                    <p className="text-base font-semibold">{ratingCounts[r.value]}</p>
                    <p className="text-white/80">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/90">+{sessionXp} XP</p>
            </>
          ) : (
            <p className="mt-1 text-sm text-white/90">Học bài mới hoặc chọn mục khác để ôn.</p>
          )}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => buildQueueForScope(scope)}
              className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white"
            >
              Ôn thêm
            </button>
            <Link to="/bai-hoc" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Học bài mới
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-2xl text-brand-800">Ôn tập</h1>
        <span className="text-sm text-gray-500">
          Thẻ {reviewed + 1}/{sessionTotal}
        </span>
      </div>

      <div className="mb-3">
        <ScopeChips chips={SCOPE_CHIPS} scope={scope} onChange={handleScopeChange} />
      </div>

      <p className="mb-4 text-xs text-gray-500">
        Đoán nghĩa trong đầu, chạm vào thẻ để xem đáp án, rồi chọn mức độ bạn nhớ được.
      </p>

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
        onClick={handleFlip}
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
        <>
          <p className="mt-5 text-center text-xs text-gray-500">Bạn nhớ từ này đến mức nào?</p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {RATINGS.map((r) => (
              <button
                key={r.value}
                onClick={() => handleRate(r.value)}
                className={`rounded-xl py-2.5 text-center text-white ${r.className}`}
              >
                <p className="text-xs font-semibold leading-tight">{r.label}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-white/80">{r.hint}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
