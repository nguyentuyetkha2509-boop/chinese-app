import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { TOPICS, getTopicWords, getTopicLevel } from '../data/topics'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

export default function TopicsPage() {
  const { completedTopics } = useProgress()
  // Sap xep tu de den kho (theo do kho tu vung thuc te) thay vi thu tu tuy
  // tien - kem so thu tu va danh dau "Tiep theo" giong trang Bai hoc, de biet
  // dang luyen den dau, khong con cam giac roi rac.
  const sortedTopics = useMemo(
    () => [...TOPICS].sort((a, b) => getTopicLevel(a.key) - getTopicLevel(b.key)),
    []
  )
  const doneCount = sortedTopics.filter((t) => completedTopics.includes(t.key)).length
  const nextKey = sortedTopics.find((t) => !completedTopics.includes(t.key))?.key

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <Link to="/" className="text-gray-500">
          <ArrowLeftIcon />
        </Link>
        <h1 className="text-2xl text-brand-800">Học theo chủ đề</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Ôn từ vựng đã học theo mạch chủ đề, xếp từ dễ đến khó. Đã xong {doneCount}/{sortedTopics.length}.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {sortedTopics.map((topic, i) => {
          const accent = accentFor(i)
          const count = getTopicWords(topic.key).length
          const done = completedTopics.includes(topic.key)
          const isNext = !done && topic.key === nextKey
          return (
            <Link
              key={topic.key}
              to={`/chu-de/${topic.key}`}
              className={`relative rounded-2xl border bg-white p-4 shadow-sm ${
                isNext ? 'border-2 border-brand-500' : accent.border
              }`}
            >
              <span className="absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-500">
                {i + 1}
              </span>
              {done && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={12} height={12} />
                </span>
              )}
              <span className="mt-4 block text-3xl">{topic.icon}</span>
              <p className="mt-2 text-base text-gray-800">{topic.title}</p>
              <div className="flex items-center justify-between">
                <p className={`text-xs ${accent.text}`}>{count} từ · HSK{getTopicLevel(topic.key)}</p>
                {isNext && <span className="text-[10px] font-semibold text-brand-600">👉 Tiếp theo</span>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
