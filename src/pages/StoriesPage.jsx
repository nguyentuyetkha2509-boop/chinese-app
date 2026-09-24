import { Link } from 'react-router-dom'
import { STORIES } from '../data/stories'
import { accentFor } from '../lib/colors'

export default function StoriesPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Truyện dài</h1>
      <p className="mb-4 text-sm text-gray-500">Đọc truyện nhiều chương, luyện nghe và làm bài đọc hiểu cuối truyện.</p>

      <div className="space-y-3">
        {STORIES.map((s, i) => {
          const accent = accentFor(i)
          const lineCount = s.chapters.reduce((sum, c) => sum + c.lines.length, 0)
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
            </Link>
          )
        })}
      </div>
    </div>
  )
}
