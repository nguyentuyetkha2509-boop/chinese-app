import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { LETTERS } from '../data/letters'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { CheckIcon } from '../components/Icons'

export default function LettersPage() {
  const { completedLetters } = useProgress()
  const doneCount = LETTERS.filter((l) => completedLetters.includes(l.key)).length

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">Thư dài</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Đọc thư tiếng Trung, tự dịch ra tiếng Việt rồi mới xem phiên âm và nghĩa để đối chiếu. Đã xong {doneCount}/
        {LETTERS.length}.
      </p>

      <div className="space-y-3">
        {LETTERS.map((l, i) => {
          const accent = accentFor(i)
          const done = completedLetters.includes(l.key)
          return (
            <Link
              key={l.key}
              to={`/thu/${l.key}`}
              className={`animate-card-in flex items-center gap-3 rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-3xl">{l.icon}</span>
              <div className="flex-1">
                <p className="text-base text-gray-800">{l.title}</p>
                <p className={`text-xs ${accent.text}`}>
                  {l.level} · {l.paragraphs.length} đoạn
                </p>
              </div>
              {done && (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={18} height={18} />
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
