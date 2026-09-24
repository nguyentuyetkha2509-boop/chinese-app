import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getStory } from '../data/stories'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { shuffle } from '../lib/quiz'
import { XP_REWARDS } from '../lib/gamification'
import { ArrowLeftIcon, VolumeIcon, CheckIcon } from '../components/Icons'

export default function StoryDetailPage() {
  const { storyKey } = useParams()
  const navigate = useNavigate()
  const story = getStory(storyKey)
  const { addXp } = useProgress()

  const [phase, setPhase] = useState('reading') // reading | quiz | done
  const [chapterIndex, setChapterIndex] = useState(0)
  const [playingAll, setPlayingAll] = useState(false)
  const [activeLine, setActiveLine] = useState(null)

  const quizRound = useMemo(
    () =>
      story
        ? story.quiz.map((q) => ({
            question: q.question,
            correct: q.options[0],
            options: shuffle(q.options)
          }))
        : [],
    [story]
  )
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)

  if (!story) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy truyện.</p>
        <Link to="/truyen" className="text-brand-600">
          Quay lại danh sách truyện
        </Link>
      </div>
    )
  }

  const chapter = story.chapters[chapterIndex]
  const isLastChapter = chapterIndex === story.chapters.length - 1

  function playAll(index = 0) {
    if (index >= chapter.lines.length) {
      setPlayingAll(false)
      setActiveLine(null)
      return
    }
    setPlayingAll(true)
    setActiveLine(index)
    speakChinese(chapter.lines[index].hanzi, { onEnd: () => setTimeout(() => playAll(index + 1), 250) })
  }

  function goToQuiz() {
    setQuizIndex(0)
    setCorrectCount(0)
    setSelected(null)
    setPhase('quiz')
  }

  function chooseAnswer(opt) {
    if (selected !== null) return
    setSelected(opt)
    const q = quizRound[quizIndex]
    const isCorrect = opt === q.correct
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      addXp(XP_REWARDS.storyQuizCorrect)
    } else {
      playWrong()
    }
    setTimeout(() => {
      setSelected(null)
      if (quizIndex + 1 < quizRound.length) {
        setQuizIndex((i) => i + 1)
      } else {
        addXp(XP_REWARDS.storyComplete)
        playCelebrate()
        setPhase('done')
      }
    }, 700)
  }

  function restart() {
    setChapterIndex(0)
    setPlayingAll(false)
    setActiveLine(null)
    setQuizIndex(0)
    setCorrectCount(0)
    setSelected(null)
    setPhase('reading')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/truyen')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">
          {story.icon} {story.title}
        </h1>
      </div>

      {phase === 'reading' && (
        <>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {chapter.title} · Phần {chapterIndex + 1}/{story.chapters.length}
            </p>
            <div className="flex gap-1">
              {story.chapters.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-5 rounded-full ${i === chapterIndex ? 'bg-brand-600' : 'bg-brand-100'}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => (playingAll ? null : playAll(0))}
            disabled={playingAll}
            className="mb-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {playingAll ? '🔊 Đang phát...' : '🔊 Nghe cả phần này'}
          </button>

          <div className="space-y-2">
            {chapter.lines.map((line, i) => {
              const isActive = activeLine === i
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveLine(i)
                    speakChinese(line.hanzi, { onEnd: () => setActiveLine(null) })
                  }}
                  className={`w-full rounded-2xl bg-white p-3.5 text-left shadow-sm transition ${
                    isActive ? 'ring-2 ring-candy-400' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-800">{line.hanzi}</span>
                    <VolumeIcon width={14} height={14} className="text-gray-400" />
                  </div>
                  <p className="mt-0.5 text-xs text-brand-600">{line.pinyin}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{line.meaning}</p>
                </button>
              )
            })}
          </div>

          <div className="mt-5 flex gap-2">
            {chapterIndex > 0 && (
              <button
                onClick={() => setChapterIndex((i) => i - 1)}
                className="flex-1 rounded-2xl bg-white py-3 text-sm font-semibold text-gray-600 shadow-sm"
              >
                ← Phần trước
              </button>
            )}
            <button
              onClick={() => (isLastChapter ? goToQuiz() : setChapterIndex((i) => i + 1))}
              className="flex-1 rounded-2xl bg-brand-700 py-3 text-sm font-semibold text-white"
            >
              {isLastChapter ? 'Làm bài đọc hiểu →' : 'Phần tiếp theo →'}
            </button>
          </div>
        </>
      )}

      {phase === 'quiz' && quizRound[quizIndex] && (
        <div className="animate-quiz-in">
          <p className="mb-2 text-sm text-gray-500">
            Đọc hiểu · Câu {quizIndex + 1}/{quizRound.length}
          </p>
          <div className="mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
            <p className="text-xl text-gray-800">{quizRound[quizIndex].question}</p>
          </div>
          <div className="space-y-2">
            {quizRound[quizIndex].options.map((opt, i) => {
              const isChosen = selected === opt
              const isRight = opt === quizRound[quizIndex].correct
              const showResult = selected !== null && (isChosen || isRight)
              const letter = String.fromCharCode(65 + i)
              return (
                <button
                  key={opt}
                  onClick={() => chooseAnswer(opt)}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
                    showResult
                      ? isRight
                        ? 'border-brand-500 bg-brand-50 text-brand-700'
                        : 'border-red-400 bg-red-50 text-red-600'
                      : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      showResult ? (isRight ? 'bg-brand-500 text-white' : 'bg-red-400 text-white') : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {letter}
                  </span>
                  {opt}
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
          <p className="text-xl">🎉 Hoàn thành truyện!</p>
          <p className="mt-1 text-white/90">
            Đọc hiểu đúng {correctCount}/{quizRound.length} câu
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={restart} className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Đọc lại
            </button>
            <Link to="/truyen" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Truyện khác
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
