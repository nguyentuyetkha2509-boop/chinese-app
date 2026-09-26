import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SENTENCES } from '../data/sentenceBuilder'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { shuffle } from '../lib/quiz'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { ArrowLeftIcon, VolumeIcon } from '../components/Icons'
import CelebrationBadge from '../components/CelebrationBadge'

const ROUND_SIZE = 10

function buildRound() {
  return shuffle(SENTENCES).slice(0, Math.min(ROUND_SIZE, SENTENCES.length))
}

function makeTokens(chunks) {
  return shuffle(chunks.map((text, orderIndex) => ({ id: orderIndex, text, orderIndex })))
}

export default function DictationPage() {
  const navigate = useNavigate()
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
    speakChinese(current.chunks.join(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function playAudio() {
    speakChinese(current.chunks.join(''))
  }

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
      addXp(XP_REWARDS.dictationCorrect)
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
        <h1 className="mb-4 text-2xl text-brand-800">Nghe chép chính tả</h1>
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
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
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-2xl text-brand-800">Nghe chép chính tả</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Nghe câu rồi chạm các từ theo đúng thứ tự bạn nghe được. Câu {index + 1}/{round.length}
      </p>

      <button
        onClick={playAudio}
        className="mb-4 flex w-full flex-col items-center justify-center gap-2 rounded-3xl bg-white py-8 shadow-sm"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <VolumeIcon width={26} height={26} />
        </span>
        <span className="text-sm text-brand-600">Chạm để nghe lại</span>
      </button>

      <div
        className={`mb-4 flex min-h-[4rem] flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed p-3 ${
          checked === null ? 'border-gray-300 bg-white' : checked ? 'border-teal-400 bg-teal-50' : 'border-red-400 bg-red-50'
        }`}
      >
        {assembled.length === 0 && <p className="text-sm text-gray-400">Chạm các từ bên dưới để ghép lại câu bạn nghe được</p>}
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
          <p className="mt-1 font-normal text-gray-600">{current.pinyin}</p>
          <p className="font-normal text-gray-600">{current.meaning}</p>
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
