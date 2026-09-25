import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GRAMMAR_POINTS } from '../data/grammar'
import { LEVELS } from '../data/levels'
import { accentFor } from '../lib/colors'
import LevelTabs from '../components/LevelTabs'

export default function GrammarPage() {
  const [levelId, setLevelId] = useState('hsk1')
  const levelLabel = LEVELS.find((l) => l.id === levelId)?.label
  const points = GRAMMAR_POINTS.filter((g) => g.level === levelLabel)

  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Ngữ pháp</h1>
      <p className="mb-4 text-sm text-gray-500">Học cách ghép câu, không chỉ học từ rời rạc.</p>

      <LevelTabs value={levelId} onChange={setLevelId} />

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
}
