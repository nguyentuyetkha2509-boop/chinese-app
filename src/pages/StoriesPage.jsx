import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { STORIES } from '../data/stories'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { parseLevelRank } from '../lib/contentLevel'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

export default function StoriesPage() {
  const { completedStories } = useProgress()
  // Sap xep tu de den kho theo cap do co san (vd "HSK1" truoc "HSK2-3"), kem
  // so thu tu va danh dau "Tiep theo" giong trang Bai hoc.
  const sortedStories = useMemo(
    () => [...STORIES].sort((a, b) => parseLevelRank(a.level) - parseLevelRank(b.level)),
    []
  )
  const doneCount = sortedStories.filter((s) => completedStories.includes(s.key)).length
  const nextKey = sortedStories.find((s) => !completedStories.includes(s.key))?.key

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <Link to="/" className="text-gray-500">
          <ArrowLeftIcon />
        </Link>
        <h1 className="text-2xl text-brand-800">Truyện dài</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Đọc truyện nhiều chương, luyện nghe và làm bài đọc hiểu, xếp từ dễ đến khó. Đã xong {doneCount}/
        {sortedStories.length}.
      </p>

      <div className="space-y-3">
        {sortedStories.map((s, i) => {
          const accent = accentFor(i)
          const lineCount = s.chapters.reduce((sum, c) => sum + c.lines.length, 0)
          const done = completedStories.includes(s.key)
          const isNext = !done && s.key === nextKey
          return (
            <Link
              key={s.key}
              to={`/truyen/${s.key}`}
              className={`animate-card-in flex items-center gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-sm ${
                isNext ? 'border-2 border-brand-500' : accent.leftBorder
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
                {i + 1}
              </span>
              <span className="text-3xl">{s.icon}</span>
              <div className="flex-1">
                <p className="text-base text-gray-800">{s.title}</p>
                <p className={`text-xs ${accent.text}`}>
                  {s.level} · {s.chapters.length} phần · {lineCount} câu
                </p>
              </div>
              {done ? (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={14} height={14} />
                </span>
              ) : isNext ? (
                <span className="shrink-0 rounded-full bg-brand-700 px-2.5 py-1 text-[10px] font-semibold text-white">
                  👉 Tiếp theo
                </span>
              ) : null}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
