import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getStory } from '../data/stories'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { ArrowLeftIcon, CheckIcon, VolumeIcon } from '../components/Icons'
import MiniQuiz from '../components/MiniQuiz'
import CelebrationBadge from '../components/CelebrationBadge'

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo storyKey de
// remount lai tu dau khi chuyen thang sang truyen khac, tranh giu nham
// phase/ket qua cua truyen truoc.
export default function StoryDetailPage() {
  const { storyKey } = useParams()
  return <StoryDetailPageInner key={storyKey} />
}

function StoryDetailPageInner() {
  const { storyKey } = useParams()
  const navigate = useNavigate()
  const story = getStory(storyKey)
  const { addXp, markStoryComplete, completedStories } = useProgress()

  const [phase, setPhase] = useState('reading') // reading | quiz | done
  const [chapterIndex, setChapterIndex] = useState(0)
  const [playingAll, setPlayingAll] = useState(false)
  const [activeLine, setActiveLine] = useState(null)
  const [result, setResult] = useState({ correct: 0, total: 0 })

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
  const done = completedStories.includes(story.key)

  function playAll(index = 0) {
    if (index >= chapter.lines.length) {
      setPlayingAll(false)
      setActiveLine(null)
      if (isLastChapter) markStoryComplete(story.key)
      return
    }
    setPlayingAll(true)
    setActiveLine(index)
    speakChinese(chapter.lines[index].hanzi, { onEnd: () => setTimeout(() => playAll(index + 1), 250) })
  }

  function goToQuiz() {
    setPhase('quiz')
  }

  function handleQuizDone(correct, total) {
    setResult({ correct, total })
    addXp(XP_REWARDS.storyComplete)
    markStoryComplete(story.key)
    playCelebrate()
    setPhase('done')
  }

  function restart() {
    setChapterIndex(0)
    setPlayingAll(false)
    setActiveLine(null)
    setPhase('reading')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">
          {story.icon} {story.title}
        </h1>
        {done && (
          <span className="flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
            <CheckIcon width={12} height={12} /> Đã hoàn thành
          </span>
        )}
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

      {phase === 'quiz' && (
        <>
          <p className="mb-2 text-sm text-gray-500">Đọc hiểu:</p>
          <MiniQuiz items={story.quiz} onDone={handleQuizDone} xpPerCorrect={XP_REWARDS.storyQuizCorrect} addXp={addXp} />
        </>
      )}

      {phase === 'done' && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
          <p className="text-xl">🎉 Hoàn thành truyện!</p>
          <p className="mt-1 text-white/90">
            Đọc hiểu đúng {result.correct}/{result.total} câu
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={restart} className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Đọc lại
            </button>
            <Link to="/truyen" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Truyện khác
            </Link>
          </div>
          <Link to="/hoc-hom-nay" className="mt-3 block text-center text-xs text-white/80 underline">
            Về Học hôm nay
          </Link>
        </div>
      )}
    </div>
  )
}
