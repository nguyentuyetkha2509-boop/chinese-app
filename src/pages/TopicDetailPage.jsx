import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getTopic, getTopicWords } from '../data/topics'
import { ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { ArrowLeftIcon, VolumeIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { buildQuiz } from '../lib/quiz'
import QuizQuestion from '../components/QuizQuestion'
import CelebrationBadge from '../components/CelebrationBadge'

export default function TopicDetailPage() {
  const { topicKey } = useParams()
  const navigate = useNavigate()
  const { addXp } = useProgress()
  const topic = getTopic(topicKey)
  const words = useMemo(() => getTopicWords(topicKey), [topicKey])
  const [phase, setPhase] = useState('study') // study | quiz | done
  const quiz = useMemo(() => buildQuiz(words, ALL_WORDS), [words])
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)

  if (!topic) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy chủ đề.</p>
        <Link to="/chu-de" className="text-brand-600">
          Quay lại danh sách chủ đề
        </Link>
      </div>
    )
  }

  function chooseAnswer(answer) {
    if (selected !== null) return
    setSelected(answer)
    const q = quiz[quizIndex]
    const isCorrect = q.type === 'truefalse' ? answer === q.isTrue : answer.id === q.word.id
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      addXp(XP_REWARDS.quizCorrect)
    } else {
      playWrong()
    }
    setTimeout(() => {
      setSelected(null)
      if (quizIndex + 1 < quiz.length) {
        setQuizIndex((i) => i + 1)
      } else {
        playCelebrate()
        setPhase('done')
      }
    }, 700)
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/chu-de')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">
          {topic.icon} {topic.title}
        </h1>
      </div>

      {phase === 'study' && (
        <>
          <div className="space-y-2">
            {words.map((word, i) => {
              const accent = accentFor(i)
              return (
                <div
                  key={word.id}
                  className={`animate-card-in rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
                  style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
                >
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
                  {!hasPictograph(word.hanzi) && hasRadicalHint(word.hanzi) && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-teal-100 p-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-teal-700">
                        {getRadicalSymbol(word.hanzi)}
                      </span>
                      <p className="text-xs text-gray-700">🧩 {getRadicalHint(word.hanzi)}</p>
                    </div>
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
        <QuizQuestion
          key={quizIndex}
          question={quiz[quizIndex]}
          index={quizIndex}
          total={quiz.length}
          selected={selected}
          onAnswer={chooseAnswer}
        />
      )}

      {phase === 'done' && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {correctCount}/{quiz.length} câu
          </p>
          <div className="mt-4 flex gap-2">
            <Link to="/chu-de" className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Chủ đề khác
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
