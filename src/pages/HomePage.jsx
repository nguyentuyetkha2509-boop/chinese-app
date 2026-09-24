import { Link } from 'react-router-dom'
import { LEVELS, ALL_WORDS, getNextUnit } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats, getDueWordIds } from '../lib/srs'
import { FireIcon, BookIcon, CardsIcon, MicIcon, PencilIcon, ArrowRightIcon, ZapIcon, TopicIcon, ChatIcon } from '../components/Icons'
import PandaHero from '../components/PandaHero'
import { getLevelInfo, DAILY_GOAL_XP } from '../lib/gamification'
import { BADGES, getEarnedBadgeIds } from '../lib/badges'
import { todayKey } from '../lib/date'

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
  },
  {
    to: '/chu-de',
    icon: TopicIcon,
    title: 'Học theo chủ đề',
    className: 'bg-gradient-to-br from-candy-500 to-sun-500'
  },
  {
    to: '/hoi-thoai',
    icon: ChatIcon,
    title: 'Hội thoại',
    className: 'bg-gradient-to-br from-teal-500 to-sky-600'
  }
]

function isLevelDone(levelId, completedUnits) {
  const level = LEVELS.find((l) => l.id === levelId)
  return level.units.every((u) => completedUnits.includes(`${levelId}:${u.id}`))
}

export default function HomePage() {
  const { srsState, completedUnits, streak, toneStats, xp, dailyXp, writingPerfectCount } = useProgress()
  const allIds = ALL_WORDS.map((w) => w.id)
  const stats = getCardStats(allIds, srsState)
  const dueCount = getDueWordIds(allIds, srsState, allIds.length).length
  const toneAccuracy = toneStats.total ? Math.round((toneStats.correct / toneStats.total) * 100) : null
  const totalUnits = LEVELS.reduce((sum, l) => sum + l.units.length, 0)
  const unitsDone = completedUnits.length
  const percent = Math.round((stats.learned / stats.total) * 100)
  const nextUnit = getNextUnit(completedUnits)

  const statValues = { total: stats.total, learned: stats.learned, percent: `${percent}%`, due: dueCount }

  const { level, xpInLevel, xpForNext } = getLevelInfo(xp)
  const todayXp = dailyXp.date === todayKey() ? dailyXp.amount : 0
  const dailyGoalPercent = Math.min(100, Math.round((todayXp / DAILY_GOAL_XP) * 100))
  const dailyGoalDone = todayXp >= DAILY_GOAL_XP

  const earnedBadgeIds = getEarnedBadgeIds({
    streak: streak.count,
    learned: stats.learned,
    total: stats.total,
    unitsDone,
    hsk1Done: isLevelDone('hsk1', completedUnits),
    hsk2Done: isLevelDone('hsk2', completedUnits),
    hsk3Done: isLevelDone('hsk3', completedUnits),
    writingPerfectCount,
    toneTotal: toneStats.total,
    toneAccuracy: toneAccuracy ?? 0
  })

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

      <div className="mb-4 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-candy-500 text-sm font-bold text-white">
          Lv{level}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Cấp {level}</span>
            <span>{xpInLevel}/{xpForNext} XP</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-candy-500"
              style={{ width: `${xpInLevel}%` }}
            />
          </div>
        </div>
      </div>

      <PandaHero />

      <div className={`mt-4 rounded-2xl p-4 shadow-sm ${dailyGoalDone ? 'bg-teal-100' : 'bg-white'}`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">
            {dailyGoalDone ? '🎉 Đã đạt mục tiêu hôm nay!' : '🎯 Mục tiêu hôm nay'}
          </p>
          <span className="text-xs text-gray-500">{todayXp}/{DAILY_GOAL_XP} XP</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full ${dailyGoalDone ? 'bg-teal-500' : 'bg-gradient-to-r from-sun-400 to-candy-500'}`}
            style={{ width: `${dailyGoalPercent}%` }}
          />
        </div>
      </div>

      {nextUnit ? (
        <Link
          to={`/bai-hoc/${nextUnit.levelId}/${nextUnit.unit.id}`}
          className="mt-4 flex items-center justify-between rounded-2xl bg-brand-700 p-4 text-white shadow-md"
        >
          <div>
            <p className="text-xs text-white/80">
              {unitsDone > 0 ? 'Tiếp tục học' : 'Bắt đầu học ngay'}
            </p>
            <p className="text-lg font-semibold">
              {nextUnit.levelLabel} · {nextUnit.unit.title}
            </p>
          </div>
          <ArrowRightIcon width={26} height={26} />
        </Link>
      ) : (
        <Link
          to="/on-tap"
          className="mt-4 flex items-center justify-between rounded-2xl bg-brand-700 p-4 text-white shadow-md"
        >
          <div>
            <p className="text-xs text-white/80">Bạn đã học hết các bài!</p>
            <p className="text-lg font-semibold">Ôn tập lại cho chắc kiến thức</p>
          </div>
          <ArrowRightIcon width={26} height={26} />
        </Link>
      )}

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

      <Link
        to="/tro-choi"
        className="mb-5 flex items-center justify-between rounded-2xl bg-gradient-to-br from-candy-500 via-brand-500 to-sky-500 p-4 text-white shadow-md"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/25">
            <ZapIcon width={22} height={22} />
          </span>
          <div>
            <p className="text-lg font-semibold">Đua tốc độ</p>
            <p className="text-xs text-white/80">Trả lời nhanh trong 60 giây, phá kỷ lục!</p>
          </div>
        </div>
        <ArrowRightIcon width={22} height={22} />
      </Link>

      <section className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <p className="mb-3 text-sm text-gray-500">
          Thành tích ({earnedBadgeIds.size}/{BADGES.length})
        </p>
        <div className="grid grid-cols-4 gap-2">
          {BADGES.map((b) => {
            const earned = earnedBadgeIds.has(b.id)
            return (
              <div
                key={b.id}
                title={b.desc}
                className={`flex flex-col items-center rounded-xl p-2 text-center ${
                  earned ? 'animate-pop-in bg-gradient-to-br from-sun-100 to-candy-100' : 'bg-gray-50 opacity-50 grayscale'
                }`}
              >
                <span className="text-2xl">{b.icon}</span>
                <p className="mt-1 text-[10px] leading-tight text-gray-700">{b.title}</p>
              </div>
            )
          })}
        </div>
      </section>

      <p className="mb-2 text-sm text-gray-500">Hoặc chọn mục khác:</p>
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
            {to === '/chu-de' && <p className="text-xs text-white/80">Gia đình, đồ ăn, màu sắc...</p>}
            {to === '/hoi-thoai' && <p className="text-xs text-white/80">Xem tiếng Trung dùng thật</p>}
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
