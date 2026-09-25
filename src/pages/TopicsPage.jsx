import { Link } from 'react-router-dom'
import { TOPICS, getTopicWords } from '../data/topics'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { CheckIcon } from '../components/Icons'

export default function TopicsPage() {
  const { completedTopics } = useProgress()
  const doneCount = TOPICS.filter((t) => completedTopics.includes(t.key)).length

  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Học theo chủ đề</h1>
      <p className="mb-4 text-sm text-gray-500">
        Ôn từ vựng đã học theo mạch chủ đề cho đỡ nhàm chán. Đã xong {doneCount}/{TOPICS.length}.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {TOPICS.map((topic, i) => {
          const accent = accentFor(i)
          const count = getTopicWords(topic.key).length
          const done = completedTopics.includes(topic.key)
          return (
            <Link
              key={topic.key}
              to={`/chu-de/${topic.key}`}
              className={`relative rounded-2xl border bg-white p-4 shadow-sm ${accent.border}`}
            >
              {done && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={12} height={12} />
                </span>
              )}
              <span className="text-3xl">{topic.icon}</span>
              <p className="mt-2 text-base text-gray-800">{topic.title}</p>
              <p className={`text-xs ${accent.text}`}>{count} từ</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
