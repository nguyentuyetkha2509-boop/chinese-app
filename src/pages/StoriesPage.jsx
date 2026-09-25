import { Link } from 'react-router-dom'
import { STORIES } from '../data/stories'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { CheckIcon } from '../components/Icons'

export default function StoriesPage() {
  const { completedStories } = useProgress()
  const doneCount = STORIES.filter((s) => completedStories.includes(s.key)).length

  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Truyện dài</h1>
      <p className="mb-4 text-sm text-gray-500">
        Đọc truyện nhiều chương, luyện nghe và làm bài đọc hiểu cuối truyện. Đã xong {doneCount}/{STORIES.length}.
      </p>

      <div className="space-y-3">
        {STORIES.map((s, i) => {
          const accent = accentFor(i)
          const lineCount = s.chapters.reduce((sum, c) => sum + c.lines.length, 0)
          const done = completedStories.includes(s.key)
          return (
            <Link
              key={s.key}
              to={`/truyen/${s.key}`}
              className={`animate-card-in flex items-center gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-3xl">{s.icon}</span>
              <div className="flex-1">
                <p className="text-base text-gray-800">{s.title}</p>
                <p className={`text-xs ${accent.text}`}>
                  {s.level} · {s.chapters.length} phần · {lineCount} câu
                </p>
              </div>
              {done && (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={14} height={14} />
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
