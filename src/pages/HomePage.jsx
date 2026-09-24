import { Link } from 'react-router-dom'
import { LEVELS, ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats, getDueWordIds } from '../lib/srs'
import { FireIcon, BookIcon, CardsIcon, MicIcon, PencilIcon } from '../components/Icons'
import PandaHero from '../components/PandaHero'

const STAT_STYLES = [
  { key: 'total', label: 'Tổng từ', className: 'bg-sky-100 text-sky-700' },
  { key: 'learned', label: 'Đã học', className: 'bg-sun-100 text-sun-700' },
  { key: 'percent', label: 'Tiến độ', className: 'bg-gold-100 text-gold-600' },
  { key: 'due', label: 'Cần ôn', className: 'bg-brand-100 text-brand-700' }
]

const ACTION_CARDS = [
  {
    to: '/on-tap',
    icon: CardsIcon,
    title: 'Ôn tập ngay',
    className: 'bg-gradient-to-br from-brand-500 to-candy-500'
  },
  {
    to: '/bai-hoc',
    icon: BookIcon,
    title: 'Bài học',
    className: 'bg-gradient-to-br from-sky-500 to-teal-500'
  },
  {
    to: '/phat-am',
    icon: MicIcon,
    title: 'Phát âm & thanh điệu',
    className: 'bg-gradient-to-br from-sun-500 to-candy-500'
  },
  {
    to: '/viet-chu',
    icon: PencilIcon,
    title: 'Viết chữ Hán',
    className: 'bg-gradient-to-br from-gold-500 to-teal-600'
  }
]

export default function HomePage() {
  const { srsState, completedUnits, streak, toneStats } = useProgress()
  const allIds = ALL_WORDS.map((w) => w.id)
  const stats = getCardStats(allIds, srsState)
  const dueCount = getDueWordIds(allIds, srsState, allIds.length).length
  const toneAccuracy = toneStats.total ? Math.round((toneStats.correct / toneStats.total) * 100) : null
  const totalUnits = LEVELS.reduce((sum, l) => sum + l.units.length, 0)
  const unitsDone = completedUnits.length
  const percent = Math.round((stats.learned / stats.total) * 100)

  const statValues = { total: stats.total, learned: stats.learned, percent: `${percent}%`, due: dueCount }

  return (
    <div className="px-4 pt-6">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Chào bạn 👋</p>
          <h1 className="text-2xl text-brand-800">🐼 PandaChinese</h1>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-sun-100 px-3 py-1.5 text-sun-600">
          <FireIcon width={18} height={18} />
          <span className="text-sm">{streak.count} ngày</span>
        </div>
      </header>

      <PandaHero />

      <section className="my-5 grid grid-cols-2 gap-3">
        {STAT_STYLES.map((s) => (
          <div key={s.key} className={`rounded-2xl p-3 text-center ${s.className}`}>
            <p className="text-xl">{statValues[s.key]}</p>
            <p className="text-xs opacity-80">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-brand-50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-candy-500"
            style={{ width: `${Math.min(100, percent)}%` }}
          />
        </div>
        <p className="mt-1 text-right text-xs text-gray-500">{unitsDone}/{totalUnits} bài hoàn thành</p>

        <div className="mt-3 space-y-2 border-t border-gray-100 pt-3">
          {LEVELS.map((level) => {
            const levelIds = level.words.map((w) => w.id)
            const levelStats = getCardStats(levelIds, srsState)
            const levelUnitsDone = level.units.filter((u) => completedUnits.includes(`${level.id}:${u.id}`)).length
            return (
              <Link
                key={level.id}
                to="/bai-hoc"
                className="flex items-center justify-between text-sm text-gray-600"
              >
                <span className="font-semibold text-gray-700">{level.label}</span>
                <span>
                  {levelStats.learned}/{levelStats.total} từ · {levelUnitsDone}/{level.units.length} bài
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mb-5 grid grid-cols-2 gap-3">
        {ACTION_CARDS.map(({ to, icon: Icon, title, className }) => (
          <Link key={to} to={to} className={`rounded-2xl p-4 text-white shadow-sm ${className}`}>
            <Icon width={22} height={22} />
            <p className="mt-2 text-lg">{title}</p>
            {to === '/on-tap' && <p className="text-xs text-white/80">{dueCount} thẻ cần ôn</p>}
            {to === '/bai-hoc' && <p className="text-xs text-white/80">{LEVELS.map((l) => l.label).join(' · ')}</p>}
            {to === '/phat-am' && (
              <p className="text-xs text-white/80">
                {toneAccuracy === null ? 'Chưa luyện' : `Độ chính xác ${toneAccuracy}%`}
              </p>
            )}
            {to === '/viet-chu' && <p className="text-xs text-white/80">Luyện nét theo thứ tự chuẩn</p>}
          </Link>
        ))}
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="mb-2 text-sm text-gray-500">Gợi ý học hiệu quả</p>
        <ul className="space-y-1.5 text-sm text-gray-700">
          <li>🔥 Học bài mới mỗi ngày, sau đó ôn tập bằng flashcard đều đặn.</li>
          <li>🎧 Luyện nghe - nói ngay từ đầu để quen thanh điệu.</li>
          <li>✍️ Viết tay chữ Hán vài lần giúp nhớ mặt chữ lâu hơn.</li>
        </ul>
      </section>
    </div>
  )
}
