import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getLevel, ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { ArrowLeftIcon, VolumeIcon, CheckIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuiz(unitWords, levelWords) {
  return unitWords.map((word) => {
    const pool = levelWords.length > 4 ? levelWords : ALL_WORDS
    const others = shuffle(pool.filter((w) => w.id !== word.id)).slice(0, 3)
    const options = shuffle([word, ...others])
    return { word, options }
  })
}

export default function LessonDetailPage() {
  const { levelId, unitId } = useParams()
  const navigate = useNavigate()
  const level = getLevel(levelId)
  const unit = level?.units.find((u) => u.id === Number(unitId))
  const { markUnitComplete } = useProgress()
  const [phase, setPhase] = useState('study') // study | quiz | done
  const quiz = useMemo(() => (unit ? buildQuiz(unit.words, level.words) : []), [unit, level])
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)

  if (!level || !unit) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy bài học.</p>
        <Link to="/bai-hoc" className="text-brand-600">
          Quay lại danh sách bài học
        </Link>
      </div>
    )
  }

  function chooseAnswer(option) {
    if (selected) return
    setSelected(option)
    const isCorrect = option.id === quiz[quizIndex].word.id
    if (isCorrect) setCorrectCount((c) => c + 1)
    setTimeout(() => {
      setSelected(null)
      if (quizIndex + 1 < quiz.length) {
        setQuizIndex((i) => i + 1)
      } else {
        markUnitComplete(`${levelId}:${unit.id}`)
        setPhase('done')
      }
    }, 700)
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/bai-hoc')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">
          {level.label} · {unit.title}
        </h1>
      </div>

      {phase === 'study' && (
        <>
          <div className="space-y-2">
            {unit.words.map((word, i) => {
              const accent = accentFor(i)
              return (
                <div key={word.id} className={`rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}>
                  <button
                    onClick={() => speakChinese(word.hanzi)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div>
                      <p className="text-2xl text-gray-800">{word.hanzi}</p>
                      <p className={`text-sm ${accent.text}`}>{word.pinyin}</p>
                      <p className="text-sm text-gray-500">{word.meaning}</p>
                    </div>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
                      <VolumeIcon width={18} height={18} />
                    </span>
                  </button>
                  {hasPictograph(word.hanzi) && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-sun-100 p-2.5">
                      <PictographIcon char={word.hanzi} className="h-9 w-9 shrink-0 text-sun-700" />
                      <p className="text-xs text-gray-700">💡 {PICTOGRAPH_HINTS[word.hanzi]}</p>
                    </div>
                  )}
                  {word.example && (
                    <button
                      onClick={() => speakChinese(word.example.hanzi)}
                      className={`mt-3 w-full rounded-xl p-3 text-left ${accent.bg}`}
                    >
                      <p className="text-base text-gray-800">{word.example.hanzi}</p>
                      <p className={`text-xs ${accent.text}`}>{word.example.pinyin}</p>
                      <p className="text-xs text-gray-600">{word.example.meaning}</p>
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          <button
            onClick={() => setPhase('quiz')}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white"
          >
            Làm bài kiểm tra
          </button>
        </>
      )}

      {phase === 'quiz' && quiz[quizIndex] && (
        <div>
          <p className="mb-2 text-sm text-gray-500">
            Câu {quizIndex + 1}/{quiz.length}
          </p>
          <div className="mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
            <p className="text-4xl text-gray-800">{quiz[quizIndex].word.hanzi}</p>
            <p className="mt-1 text-brand-600">{quiz[quizIndex].word.pinyin}</p>
          </div>
          <p className="mb-2 text-sm text-gray-500">Chọn nghĩa đúng:</p>
          <div className="space-y-2">
            {quiz[quizIndex].options.map((opt, i) => {
              const isChosen = selected?.id === opt.id
              const isRight = opt.id === quiz[quizIndex].word.id
              const showResult = selected && (isChosen || isRight)
              const accent = accentFor(i)
              const letter = String.fromCharCode(65 + i)
              return (
                <button
                  key={opt.id}
                  onClick={() => chooseAnswer(opt)}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left ${
                    showResult
                      ? isRight
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-red-400 bg-red-50 text-red-600'
                      : `${accent.border} bg-white text-gray-700`
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      showResult ? (isRight ? 'bg-brand-500 text-white' : 'bg-red-400 text-white') : `${accent.bg} ${accent.text}`
                    }`}
                  >
                    {letter}
                  </span>
                  {opt.meaning}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {phase === 'done' && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white">
            <CheckIcon width={32} height={32} />
          </span>
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {correctCount}/{quiz.length} câu
          </p>
          <div className="mt-4 flex gap-2">
            <Link to="/bai-hoc" className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Danh sách bài
            </Link>
            <Link to="/on-tap" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Ôn tập flashcard
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
