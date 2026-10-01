import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import MiniQuiz from '../components/MiniQuiz'
import { KANGXI_RADICALS } from '../data/radicalsKangxi'
import { groupWordsByRadical, radicalGlyph } from '../lib/radicalIndex'
import { ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { XP_REWARDS } from '../lib/gamification'
import { loadJSON, saveJSON } from '../lib/storage'
import { shuffle } from '../lib/quiz'
import CelebrationBadge from '../components/CelebrationBadge'

const QUESTIONS_PER_ROUND = 10
const HIGH_SCORE_KEY = 'radicalGameHighScore'

// Hai dang cau hoi:
//  - 'char':    cho mot chu trong tu vung, hoi chu do thuoc bo nao
//  - 'meaning': cho mot bo, hoi bo do nghia la gi
// Tron lan nhau de khong bi doan theo kieu "cau nao cung hoi mot kieu".
// Xuat ra de kiem tra duoc de bai bang script (xem phan kiem tra khi lam tinh nang).
export function buildRound(examplesByRadical) {
  // Chi lay nhung bo co vi du trong tu vung cua nguoi hoc - hoi ve bo ho chua
  // tung gap thi khong hoc duoc gi.
  const pool = KANGXI_RADICALS.filter((r) => examplesByRadical.has(r.n))
  const picked = shuffle(pool).slice(0, QUESTIONS_PER_ROUND)

  return picked.map((r) => {
    const glyph = radicalGlyph(r)
    const examples = examplesByRadical.get(r.n)

    if (Math.random() < 0.6) {
      const word = examples[Math.floor(Math.random() * examples.length)]
      // Dap an nhieu phai khac CA BA thu: khac bo, khac cach viet va khac ten.
      // - Khac cach viet: bo 邑 và bo 阜 deu viet la 阝, deu hien "阝" thi nhin
      //   nhu hai lua chon giong het nhau.
      // - Khac ten: ten Han-Viet khong duy nhat (巾 và 斤 deu la "Cân", 己 và 几
      //   deu la "Kỷ"), hai lua chon cung duoi "Bộ Cân" cung gay nham lan.
      const others = shuffle(
        pool.filter((o) => o.n !== r.n && radicalGlyph(o) !== glyph && o.name !== r.name)
      ).slice(0, 3)
      return {
        question: `Chữ 「${word.hanzi}」 (${word.meaning}) thuộc bộ nào?`,
        options: [r, ...others].map((o) => `${radicalGlyph(o)} — Bộ ${o.name}`)
      }
    }

    const seen = new Set([r.meaning])
    const otherMeanings = []
    for (const o of shuffle(pool)) {
      if (o.n === r.n || seen.has(o.meaning)) continue
      seen.add(o.meaning)
      otherMeanings.push(o.meaning)
      if (otherMeanings.length === 3) break
    }
    return {
      question: `Bộ 「${glyph}」 (Bộ ${r.name}) nghĩa là gì?`,
      options: [r.meaning, ...otherMeanings]
    }
  })
}

export default function RadicalGamePage() {
  const { addXp } = useProgress()
  const [highScore, setHighScore] = useState(() => loadJSON(HIGH_SCORE_KEY, 0))
  const [attempt, setAttempt] = useState(0)
  const [phase, setPhase] = useState('idle') // idle | playing | over
  const [result, setResult] = useState(null)
  // De bai sinh mot lan cho ca luot choi (khong sinh lai moi lan bam, khong thi
  // dap an bi xao lai giua chung).
  const [items, setItems] = useState([])

  const examplesByRadical = useMemo(() => groupWordsByRadical(ALL_WORDS, 8), [])

  function start() {
    setItems(buildRound(examplesByRadical))
    setAttempt((a) => a + 1)
    setPhase('playing')
    setResult(null)
  }

  function handleDone(correct, total) {
    setResult({ correct, total })
    setPhase('over')
    if (correct > highScore) {
      setHighScore(correct)
      saveJSON(HIGH_SCORE_KEY, correct)
    }
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">🧩 Đố bộ thủ</h1>
      </div>

      {phase === 'idle' && (
        <>
          <p className="mb-4 text-sm text-gray-500">
            Nhìn một chữ Hán trong bài học và đoán xem nó thuộc bộ thủ nào — hoặc nhìn bộ thủ và đoán
            nghĩa. Mỗi lượt {QUESTIONS_PER_ROUND} câu, lấy từ những bộ bạn đang gặp trong từ vựng.
          </p>
          <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-brand-600 p-6 text-center text-white shadow-lg">
            <p className="text-5xl">氵</p>
            <p className="mt-2 text-lg">Sẵn sàng chưa?</p>
            <p className="mt-1 text-sm text-white/80">Kỷ lục hiện tại: {highScore}/{QUESTIONS_PER_ROUND} câu</p>
          </div>
          <button
            onClick={start}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white shadow-sm"
          >
            Bắt đầu
          </button>
          <Link
            to="/bo-thu"
            className="mt-3 block w-full rounded-2xl bg-white py-3 text-center text-sm text-brand-700 shadow-sm"
          >
            Xem lại 214 bộ thủ
          </Link>
        </>
      )}

      {phase === 'playing' && (
        <MiniQuiz
          key={attempt}
          items={items}
          onDone={handleDone}
          xpPerCorrect={XP_REWARDS.quizCorrect}
          addXp={addXp}
        />
      )}

      {phase === 'over' && result && (
        <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-brand-600 p-6 text-center text-white shadow-lg">
          {result.correct === result.total || result.correct < result.total / 2 ? (
            <p className="text-4xl">{result.correct === result.total ? '🏆' : '💪'}</p>
          ) : (
            <CelebrationBadge className="mx-auto" />
          )}
          <p className="mt-2 text-3xl">
            {result.correct}/{result.total}
          </p>
          <p className="mt-1 text-sm text-white/80">
            {result.correct === result.total
              ? 'Đúng hết cả lượt!'
              : `Kỷ lục cao nhất: ${highScore}/${result.total} câu`}
          </p>
          <button
            onClick={start}
            className="mt-5 w-full rounded-2xl bg-white py-3 text-lg text-brand-700 shadow-sm"
          >
            Chơi lại
          </button>
          <Link
            to="/bo-thu"
            className="mt-3 block w-full rounded-2xl bg-white/20 py-3 text-center text-sm text-white"
          >
            Xem lại 214 bộ thủ
          </Link>
        </div>
      )}
    </div>
  )
}
