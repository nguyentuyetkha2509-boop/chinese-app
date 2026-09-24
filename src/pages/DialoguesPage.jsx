import { Link } from 'react-router-dom'
import { DIALOGUES } from '../data/dialogues'
import { accentFor } from '../lib/colors'

export default function DialoguesPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Hội thoại</h1>
      <p className="mb-4 text-sm text-gray-500">Xem tiếng Trung được dùng thế nào trong tình huống thật.</p>

      <div className="grid grid-cols-2 gap-3">
        {DIALOGUES.map((d, i) => {
          const accent = accentFor(i)
          return (
            <Link
              key={d.key}
              to={`/hoi-thoai/${d.key}`}
              className={`animate-card-in rounded-2xl border bg-white p-4 shadow-sm ${accent.border}`}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <span className="text-3xl">{d.icon}</span>
              <p className="mt-2 text-base text-gray-800">{d.title}</p>
              <p className={`text-xs ${accent.text}`}>{d.lines.length} câu</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
