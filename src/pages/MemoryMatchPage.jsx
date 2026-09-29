import { useEffect, useRef, useState } from 'react'
import BackButton from '../components/BackButton'
import LevelTabs from '../components/LevelTabs'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { XP_REWARDS } from '../lib/gamification'
import { loadJSON, saveJSON } from '../lib/storage'
import { shuffle } from '../lib/quiz'
import { playCelebrate, playCorrect, playFlip, playWrong } from '../lib/sfx'
import { speakChinese } from '../lib/tts'

const PAIRS = 6
const BEST_KEY = 'memoryMatchBest'
const MISMATCH_DELAY_MS = 900

// Chi lay tu ngan de vua khit o the tren man hinh dien thoai, va khong lay hai
// tu trung chu Han hoac trung nghia (neu khong 2 the "giong het nhau" se khien
// nguoi choi ghep dung ma van bi tinh sai).
export function buildBoard(words) {
  const seenHanzi = new Set()
  const seenMeaning = new Set()
  const candidates = shuffle(words).filter((w) => {
    if (w.hanzi.length > 3 || w.meaning.length > 16) return false
    if (seenHanzi.has(w.hanzi) || seenMeaning.has(w.meaning)) return false
    seenHanzi.add(w.hanzi)
    seenMeaning.add(w.meaning)
    return true
  })
  const picked = candidates.slice(0, PAIRS)
  const cards = picked.flatMap((w) => [
    { key: `${w.id}:h`, pairId: w.id, kind: 'hanzi', word: w },
    { key: `${w.id}:m`, pairId: w.id, kind: 'meaning', word: w }
  ])
  return shuffle(cards)
}

// 6 cap thi it nhat can 6 luot lat doi. Sao tinh theo so luot lat doi.
function starsFor(moves) {
  if (moves <= PAIRS + 2) return 3
  if (moves <= PAIRS * 2) return 2
  return 1
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function MemoryMatchPage() {
  const { addXp } = useProgress()
  const [levelId, setLevelId] = useState('hsk1')
  const [best, setBest] = useState(() => loadJSON(BEST_KEY, {}))
  const [phase, setPhase] = useState('idle') // idle | playing | won
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]) // key cua toi da 2 the dang lat
  const [matched, setMatched] = useState([]) // pairId da ghep xong
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [result, setResult] = useState(null)
  const timeoutRef = useRef(null)

  // Dong ho chi chay khi dang choi.
  useEffect(() => {
    if (phase !== 'playing') return undefined
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [phase])

  // Roi trang giua luc dang cho the lat lai thi huy hen gio.
  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  function start() {
    clearTimeout(timeoutRef.current)
    setCards(buildBoard(getLevel(levelId).words))
    setFlipped([])
    setMatched([])
    setMoves(0)
    setSeconds(0)
    setResult(null)
    setPhase('playing')
  }

  function finish(finalMoves, finalSeconds) {
    const stars = starsFor(finalMoves)
    const isRecord = best[levelId] === undefined || finalMoves < best[levelId]
    if (isRecord) {
      const next = { ...best, [levelId]: finalMoves }
      setBest(next)
      saveJSON(BEST_KEY, next)
    }
    addXp(XP_REWARDS.memoryMatchDone + stars * XP_REWARDS.memoryMatchStar)
    setResult({ moves: finalMoves, seconds: finalSeconds, stars, isRecord })
    setPhase('won')
    playCelebrate()
  }

  function handleFlip(card) {
    if (phase !== 'playing') return
    // Dang cho 2 the sai lat lai, hoac the nay da lat/da ghep: bo qua.
    if (flipped.length >= 2) return
    if (flipped.includes(card.key) || matched.includes(card.pairId)) return

    if (card.kind === 'hanzi') speakChinese(card.word.hanzi)
    else playFlip()

    const nextFlipped = [...flipped, card.key]
    setFlipped(nextFlipped)
    if (nextFlipped.length < 2) return

    const nextMoves = moves + 1
    setMoves(nextMoves)
    const [a, b] = nextFlipped.map((k) => cards.find((c) => c.key === k))

    if (a.pairId === b.pairId) {
      const nextMatched = [...matched, a.pairId]
      setMatched(nextMatched)
      setFlipped([])
      playCorrect()
      if (nextMatched.length === PAIRS) finish(nextMoves, seconds)
      return
    }

    playWrong()
    timeoutRef.current = setTimeout(() => setFlipped([]), MISMATCH_DELAY_MS)
  }

  const canPlay = cards.length === PAIRS * 2 || phase === 'idle'

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">🃏 Ghép cặp</h1>
      </div>

      {phase === 'idle' && (
        <>
          <p className="mb-4 text-sm text-gray-500">
            Lật hai thẻ mỗi lượt: một thẻ chữ Hán và một thẻ nghĩa tiếng Việt. Ghép đúng {PAIRS} cặp
            với ít lượt lật nhất để được 3 sao. Bấm thẻ chữ Hán sẽ nghe phát âm.
          </p>
          <LevelTabs value={levelId} onChange={setLevelId} />
          <div className="rounded-3xl bg-gradient-to-br from-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
            <p className="text-5xl">你好</p>
            <p className="mt-2 text-lg">Xin chào</p>
            <p className="mt-1 text-sm text-white/80">
              {best[levelId] === undefined
                ? 'Chưa có kỷ lục ở cấp này'
                : `Kỷ lục ${getLevel(levelId).label}: ${best[levelId]} lượt`}
            </p>
          </div>
          <button
            onClick={start}
            disabled={!canPlay}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white shadow-sm"
          >
            Bắt đầu
          </button>
        </>
      )}

      {phase === 'playing' && (
        <>
          <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
            <span>Lượt: {moves}</span>
            <span>
              Đã ghép: {matched.length}/{PAIRS}
            </span>
            <span>⏱ {formatTime(seconds)}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {cards.map((card) => {
              const isMatched = matched.includes(card.pairId)
              const isUp = isMatched || flipped.includes(card.key)
              return (
                <button
                  key={card.key}
                  onClick={() => handleFlip(card)}
                  aria-label={isUp ? (card.kind === 'hanzi' ? card.word.hanzi : card.word.meaning) : 'Thẻ úp'}
                  className={`flex h-24 flex-col items-center justify-center rounded-2xl p-1 text-center shadow-sm transition ${
                    isMatched
                      ? 'bg-teal-100 text-teal-700'
                      : isUp
                        ? 'bg-white text-brand-800 ring-2 ring-brand-500'
                        : 'bg-brand-700 text-white/80'
                  }`}
                >
                  {!isUp && <span className="text-3xl">?</span>}
                  {isUp && card.kind === 'hanzi' && (
                    <>
                      <span className="text-2xl">{card.word.hanzi}</span>
                      <span className="text-xs text-gray-500">{card.word.pinyin}</span>
                    </>
                  )}
                  {isUp && card.kind === 'meaning' && (
                    <span className="text-sm leading-tight">{card.word.meaning}</span>
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}

      {phase === 'won' && result && (
        <>
          <div className="rounded-3xl bg-gradient-to-br from-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
            <p className="text-4xl">{'⭐'.repeat(result.stars)}</p>
            <p className="mt-2 text-3xl">{result.moves} lượt</p>
            <p className="mt-1 text-sm text-white/80">Thời gian {formatTime(result.seconds)}</p>
            {result.isRecord && <p className="mt-2 text-sm">🏆 Kỷ lục mới!</p>}
            <p className="mt-2 text-sm text-white/80">
              +{XP_REWARDS.memoryMatchDone + result.stars * XP_REWARDS.memoryMatchStar} XP
            </p>
          </div>
          <LevelTabs value={levelId} onChange={setLevelId} />
          <button
            onClick={start}
            className="w-full rounded-2xl bg-brand-700 py-3 text-lg text-white shadow-sm"
          >
            Chơi lại
          </button>
        </>
      )}
    </div>
  )
}
