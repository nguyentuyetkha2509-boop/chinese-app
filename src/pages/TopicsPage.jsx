import { Link } from 'react-router-dom'
import { TOPICS, getTopicWords } from '../data/topics'
import { accentFor } from '../lib/colors'

export default function TopicsPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Học theo chủ đề</h1>
      <p className="mb-4 text-sm text-gray-500">Ôn từ vựng đã học theo mạch chủ đề cho đỡ nhàm chán.</p>

      <div className="grid grid-cols-2 gap-3">
        {TOPICS.map((topic, i) => {
          const accent = accentFor(i)
          const count = getTopicWords(topic.key).length
          return (
            <Link
              key={topic.key}
              to={`/chu-de/${topic.key}`}
              className={`rounded-2xl border bg-white p-4 shadow-sm ${accent.border}`}
            >
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
