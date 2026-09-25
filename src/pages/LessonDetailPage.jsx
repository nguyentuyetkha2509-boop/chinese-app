import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getLevel, ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { ArrowLeftIcon, VolumeIcon, CheckIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { XP_REWARDS } from '../lib/gamification'
import { buildQuiz } from '../lib/quiz'
import QuizQuestion from '../components/QuizQuestion'

export default function LessonDetailPage() {
  const { levelId, unitId } = useParams()
  const navigate = useNavigate()
  const level = getLevel(levelId)
  const unit = level?.units.find((u) => u.id === Number(unitId))
  const nextUnit = level?.units.find((u) => u.id === Number(unitId) + 1)
  const { markUnitComplete, addXp } = useProgress()
  const [phase, setPhase] = useState('study') // study | quiz | done
  const quiz = useMemo(
    () => (unit ? buildQuiz(unit.words, level.words.length > 4 ? level.words : ALL_WORDS) : []),
    [unit, level]
  )
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
        markUnitComplete(`${levelId}:${unit.id}`)
        addXp(XP_REWARDS.unitComplete)
        setPhase('done')
        playCelebrate()
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
          {unit.intro && (
            <div className="mb-4 rounded-2xl bg-brand-50 p-3.5">
              <p className="text-sm text-gray-700">{unit.intro}</p>
            </div>
          )}
          <div className="space-y-2">
            {unit.words.map((word, i) => {
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
          <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/25 text-white">
            <CheckIcon width={32} height={32} />
          </span>
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {correctCount}/{quiz.length} câu
          </p>

          {nextUnit && (
            <Link
              to={`/bai-hoc/${levelId}/${nextUnit.id}`}
              className="mt-4 block rounded-xl bg-white py-2.5 font-semibold text-brand-700"
            >
              Học tiếp {nextUnit.title} →
            </Link>
          )}

          <p className="mt-4 text-xs text-white/80">Củng cố bài này thêm với:</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link to="/on-tap" className="rounded-xl bg-white/20 py-2.5 text-sm font-semibold text-white">
              🗂️ Ôn tập flashcard
            </Link>
            <Link
              to={`/phat-am/${levelId}/${unit.id}`}
              className="rounded-xl bg-white/20 py-2.5 text-sm font-semibold text-white"
            >
              🎧 Phát âm bài này
            </Link>
            <Link
              to={`/viet-chu/${levelId}/${unit.id}`}
              className="rounded-xl bg-white/20 py-2.5 text-sm font-semibold text-white"
            >
              ✍️ Viết chữ bài này
            </Link>
            <Link to="/bai-hoc" className="rounded-xl bg-white/20 py-2.5 text-sm font-semibold text-white">
              📚 Danh sách bài
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
