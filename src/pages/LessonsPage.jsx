import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { CheckIcon, BookIcon } from '../components/Icons'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'

export default function LessonsPage() {
  const { completedUnits } = useProgress()
  const [levelId, setLevelId] = useState('hsk1')
  const level = getLevel(levelId)

  return (
    <div className="px-4 pt-6">
      <h1 className="mb-1 text-2xl text-brand-800">Bài học {level.label}</h1>
      <p className="mb-4 text-sm text-gray-500">
        {level.words.length} từ vựng, chia thành {level.units.length} bài, mỗi bài 10 từ.
      </p>

      <LevelTabs value={levelId} onChange={setLevelId} />

      <div className="space-y-3">
        {level.units.map((unit, i) => {
          const unitKey = `${levelId}:${unit.id}`
          const done = completedUnits.includes(unitKey)
          const accent = accentFor(i)
          return (
            <Link
              key={unit.id}
              to={`/bai-hoc/${levelId}/${unit.id}`}
              className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm ${accent.border}`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.bg} ${accent.text}`}>
                <BookIcon width={20} height={20} />
              </span>
              <div className="flex-1">
                <p className="text-lg text-gray-800">{unit.title}</p>
                <p className="text-xs text-gray-500">
                  {unit.words[0].hanzi} · {unit.words[unit.words.length - 1].hanzi} và {unit.words.length - 2} từ khác
                </p>
              </div>
              {done ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon width={18} height={18} />
                </span>
              ) : (
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${accent.bg} ${accent.text}`}>
                  Bắt đầu
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
