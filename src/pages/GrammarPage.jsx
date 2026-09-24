import { Link } from 'react-router-dom'
import { GRAMMAR_POINTS } from '../data/grammar'
import { accentFor } from '../lib/colors'

const LEVELS = ['HSK1', 'HSK2', 'HSK3', 'HSK4']

export default function GrammarPage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Ngữ pháp</h1>
      <p className="mb-4 text-sm text-gray-500">Học cách ghép câu, không chỉ học từ rời rạc.</p>

      {LEVELS.map((level) => {
        const points = GRAMMAR_POINTS.filter((g) => g.level === level)
        if (!points.length) return null
        return (
          <div key={level} className="mb-5">
            <p className="mb-2 text-sm font-semibold text-gray-500">{level}</p>
            <div className="space-y-2">
              {points.map((g, i) => {
                const accent = accentFor(i)
                return (
                  <Link
                    key={g.key}
                    to={`/ngu-phap/${g.key}`}
                    className={`animate-card-in flex items-center justify-between rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <div>
                      <p className="text-base text-gray-800">{g.title}</p>
                      <p className={`text-xs ${accent.text}`}>{g.pattern}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
