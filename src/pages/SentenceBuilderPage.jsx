import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SENTENCES } from '../data/sentenceBuilder'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { shuffle } from '../lib/quiz'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { CheckIcon } from '../components/Icons'

const ROUND_SIZE = 10

function buildRound() {
  return shuffle(SENTENCES).slice(0, Math.min(ROUND_SIZE, SENTENCES.length))
}

function makeTokens(chunks) {
  return shuffle(chunks.map((text, orderIndex) => ({ id: orderIndex, text, orderIndex })))
}

export default function SentenceBuilderPage() {
  const { addXp } = useProgress()
  const [round, setRound] = useState(buildRound)
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [bank, setBank] = useState(() => makeTokens(round[0].chunks))
  const [assembled, setAssembled] = useState([])
  const [checked, setChecked] = useState(null) // null | true | false
  const [phase, setPhase] = useState('play') // play | done

  const current = round[index]

  useEffect(() => {
    setBank(makeTokens(current.chunks))
    setAssembled([])
    setChecked(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function pick(token) {
    if (checked !== null) return
    setBank((b) => b.filter((t) => t.id !== token.id))
    setAssembled((a) => [...a, token])
  }

  function unpick(token) {
    if (checked !== null) return
    setAssembled((a) => a.filter((t) => t.id !== token.id))
    setBank((b) => [...b, token])
  }

  function checkAnswer() {
    const isCorrect = assembled.every((t, i) => t.orderIndex === i)
    setChecked(isCorrect)
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      addXp(XP_REWARDS.quizCorrect)
    } else {
      playWrong()
    }
  }

  function nextQuestion() {
    if (index + 1 < round.length) {
      setIndex((i) => i + 1)
    } else {
      playCelebrate()
      setPhase('done')
    }
  }

  function restart() {
    const fresh = buildRound()
    setRound(fresh)
    setIndex(0)
    setCorrectCount(0)
    setBank(makeTokens(fresh[0].chunks))
    setAssembled([])
    setChecked(null)
    setPhase('play')
  }

  if (phase === 'done') {
    return (
      <div className="px-4 pt-6">
        <h1 className="mb-4 text-2xl text-brand-800">Sắp xếp câu</h1>
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white">
            <CheckIcon width={32} height={32} />
          </span>
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {correctCount}/{round.length} câu
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={restart} className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Luyện lại
            </button>
            <Link to="/" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Trang chủ
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Sắp xếp câu</h1>
      <p className="mb-4 text-sm text-gray-500">
        Chạm các từ theo đúng thứ tự để ghép thành câu. Câu {index + 1}/{round.length}
      </p>

      <div className="mb-4 rounded-2xl bg-brand-50 p-4 text-center">
        <p className="text-xs font-semibold text-brand-600">Dịch câu này sang tiếng Trung:</p>
        <p className="mt-1 text-lg text-brand-800">{current.meaning}</p>
      </div>

      <div
        className={`mb-4 flex min-h-[4rem] flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed p-3 ${
          checked === null ? 'border-gray-300 bg-white' : checked ? 'border-teal-400 bg-teal-50' : 'border-red-400 bg-red-50'
        }`}
      >
        {assembled.length === 0 && <p className="text-sm text-gray-400">Chạm các từ bên dưới để ghép câu</p>}
        {assembled.map((t) => (
          <button
            key={t.id}
            onClick={() => unpick(t)}
            disabled={checked !== null}
            className="rounded-xl bg-brand-600 px-3 py-2 text-lg text-white disabled:opacity-90"
          >
            {t.text}
          </button>
        ))}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {bank.map((t) => (
          <button
            key={t.id}
            onClick={() => pick(t)}
            className="rounded-xl border-2 border-brand-200 bg-white px-3 py-2 text-lg text-gray-700"
          >
            {t.text}
          </button>
        ))}
      </div>

      {checked !== null && (
        <div
          className={`mb-4 rounded-2xl p-3 text-center text-sm font-semibold ${
            checked ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-600'
          }`}
        >
          {checked ? '✅ Chính xác!' : `❌ Chưa đúng. Câu đúng là: ${current.chunks.join('')}`}
          <button
            onClick={() => speakChinese(current.chunks.join(''))}
            className="ml-2 underline"
          >
            🔊 Nghe
          </button>
          <p className="mt-1 font-normal text-gray-600">{current.pinyin}</p>
        </div>
      )}

      {checked === null ? (
        <button
          onClick={checkAnswer}
          disabled={bank.length > 0}
          className="w-full rounded-2xl bg-brand-700 py-3 text-lg text-white disabled:opacity-40"
        >
          Kiểm tra
        </button>
      ) : (
        <button onClick={nextQuestion} className="w-full rounded-2xl bg-brand-700 py-3 text-lg text-white">
          {index + 1 < round.length ? 'Câu tiếp theo →' : 'Hoàn thành'}
        </button>
      )}
    </div>
  )
}
