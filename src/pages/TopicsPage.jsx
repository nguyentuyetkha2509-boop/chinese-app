import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { TOPICS, TOPIC_GROUPS, getTopicWords, getTopicLevel, getTopicGroup } from '../data/topics'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'
import { useScrollRestoration } from '../lib/useScrollRestoration'

export default function TopicsPage() {
  useScrollRestoration('topics')
  const { completedTopics } = useProgress()
  const [group, setGroup] = useState('all')
  // Sap xep tu de den kho (theo do kho tu vung thuc te) thay vi thu tu tuy
  // tien - kem so thu tu va danh dau "Tiep theo" giong trang Bai hoc, de biet
  // dang luyen den dau, khong con cam giac roi rac.
  const sortedTopics = useMemo(
    () => [...TOPICS].sort((a, b) => getTopicLevel(a.key) - getTopicLevel(b.key)),
    []
  )
  const doneCount = sortedTopics.filter((t) => completedTopics.includes(t.key)).length
  const nextKey = sortedTopics.find((t) => !completedTopics.includes(t.key))?.key
  // Loc theo nhom nhung giu nguyen so thu tu va danh dau "Tiep theo" cua ca danh sach.
  const visible = sortedTopics
    .map((topic, i) => ({ topic, i }))
    .filter(({ topic }) => group === 'all' || getTopicGroup(topic) === group)

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">Học theo chủ đề</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Ôn từ vựng đã học theo mạch chủ đề, xếp từ dễ đến khó. Đã xong {doneCount}/{sortedTopics.length}.
      </p>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {TOPIC_GROUPS.map((g) => (
          <button
            key={g.id}
            onClick={() => setGroup(g.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm ${
              group === g.id ? 'bg-brand-700 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {visible.map(({ topic, i }) => {
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
                  <CheckIcon width={16} height={16} />
                </span>
              )}
              <span className="mt-4 block text-3xl">{topic.icon}</span>
              <p className="mt-2 text-base text-gray-800">{topic.title}</p>
              <div className="flex items-center justify-between">
                <p className={`text-xs ${accent.text}`}>{count} từ · {topic.tag || `HSK${getTopicLevel(topic.key)}`}</p>
                {isNext && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-600">
                    <ArrowRightIcon width={18} height={18} /> Tiếp theo
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
