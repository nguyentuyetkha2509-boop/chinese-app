import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { CheckIcon, BookIcon } from '../components/Icons'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'
import lessonPanda from '../assets/panda/lesson_panda.webp'

export default function LessonsPage() {
  const { completedUnits } = useProgress()
  const [levelId, setLevelId] = useState('hsk1')
  const level = getLevel(levelId)
  // Cac bai KHONG deu so tu (vd HSK2 co bai 6 tu, co bai 12 tu) - lay dung
  // so tu bai dau tien roi nhan len se ra tong sai lech han so tong that (vd
  // HSK5 hien "139 bai x 11 tu = 1529" trong khi thuc te chi co 1298 tu).
  // Hien khoang min-max cho trung thuc, chi noi "moi bai X tu" khi TAT CA
  // cac bai deu bang nhau.
  const unitSizes = level.units.map((u) => u.words.length)
  const minSize = Math.min(...unitSizes)
  const maxSize = Math.max(...unitSizes)
  const sizeLabel = minSize === maxSize ? `${minSize} từ` : `${minSize}-${maxSize} từ`

  return (
    <div className="px-4 pt-6">
      <img src={lessonPanda} alt="Gấu trúc học bài" className="mx-auto mb-2 w-36 max-w-full" />
      <h1 className="mb-1 text-2xl text-brand-800">Bài học {level.label}</h1>
      <p className="mb-4 text-sm text-gray-500">
        {level.words.length} từ vựng, chia thành {level.units.length} bài, mỗi bài {sizeLabel}.
      </p>

      <LevelTabs value={levelId} onChange={setLevelId} />

      <div className="space-y-3">
        {(() => {
          const nextUnitId = level.units.find((u) => !completedUnits.includes(`${levelId}:${u.id}`))?.id
          return level.units.map((unit, i) => {
            const unitKey = `${levelId}:${unit.id}`
            const done = completedUnits.includes(unitKey)
            const isNext = !done && unit.id === nextUnitId
            const accent = accentFor(i)
            return (
              <Link
                key={unit.id}
                to={`/bai-hoc/${levelId}/${unit.id}`}
                className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm ${
                  isNext ? 'border-2 border-brand-500' : accent.border
                }`}
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
                ) : isNext ? (
                  <span className="shrink-0 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                    👉 Tiếp theo
                  </span>
                ) : (
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${accent.bg} ${accent.text}`}>
                    Bắt đầu
                  </span>
                )}
              </Link>
            )
          })
        })()}
      </div>
    </div>
  )
}
