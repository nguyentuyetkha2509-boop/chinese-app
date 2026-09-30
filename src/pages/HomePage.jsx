import { Link } from 'react-router-dom'
import { LEVELS, ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { useFirebaseAuth } from '../store/FirebaseSyncContext'
import { getCardStats } from '../lib/srs'
import {
  FireIcon,
  BookIcon,
  CardsIcon,
  MicIcon,
  PencilIcon,
  ArrowRightIcon,
  SpeedIcon,
  TopicIcon,
  RadicalIcon,
  ChatIcon,
  StoryIcon,
  GrammarIcon,
  ShuffleIcon,
  EarIcon,
  SettingsIcon,
  TrophyIcon,
  ZapIcon
} from '../components/Icons'
import PandaHero from '../components/PandaHero'
import trophyPanda from '../assets/panda/trophy_panda.webp'
import headerPanda from '../assets/icons-gemini/header_panda.png'
import { getLevelInfo, DAILY_GOAL_XP } from '../lib/gamification'
import { getNextVocabCombo, getComboByUnitKey } from '../lib/curriculum'
import { BADGES, getEarnedBadgeIds } from '../lib/badges'
import { todayKey } from '../lib/date'
import { useScrollRestoration } from '../lib/useScrollRestoration'

const STAT_STYLES = [
  { key: 'total', label: 'Tổng từ', className: 'bg-sky-100 text-sky-700' },
  { key: 'learned', label: 'Đã học', className: 'bg-teal-100 text-teal-700' },
  { key: 'percent', label: 'Tiến độ', className: 'bg-sun-100 text-sun-700' },
  { key: 'due', label: 'Cần ôn', className: 'bg-brand-100 text-brand-700' }
]

// Vong lap hoc chinh moi ngay - hien ngay sau nut "tiep tuc hoc", khong can cuon.
// Moi the la mot cap mau chuyen sac. Bang mau gom 5 tong: tim, hong, xanh duong,
// xanh la (emerald/teal) va cam - xep sao cho hai the ke nhau (ngang va doc)
// khong trung tong. "col-span-2" = the dai (ca hang), khong co = the vuong; moi
// hang deu du 2 cot nen khong the nao bi le.
//
// Lo trinh chinh: 6 the vuong, 3 hang.
const CORE_CARDS = [
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
    className: 'bg-gradient-to-br from-sky-500 to-emerald-500'
  },
  {
    to: '/ngu-phap',
    icon: GrammarIcon,
    title: 'Ngữ pháp',
    className: 'bg-gradient-to-br from-brand-600 to-sky-500'
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
    className: 'bg-gradient-to-br from-emerald-500 to-teal-600'
  },
  {
    to: '/bo-thu',
    icon: RadicalIcon,
    title: 'Bộ thủ',
    className: 'bg-gradient-to-br from-sky-600 to-brand-600'
  }
]

// Noi dung phu / mo rong - luyen them khi da xong vong hoc chinh, dat cuoi trang.
// 11 the xep thanh 7 hang: 2 vuong (hoc), 2 vuong (AI), 1 dai (truyen), 2 vuong
// (thu, nghe chep), 2 vuong (tro choi), roi 2 thanh dai lien nhau o cuoi (dua
// toc do, bang xep hang).
const EXTRA_CARDS = [
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
    className: 'bg-gradient-to-br from-emerald-500 to-sky-600'
  },
  {
    to: '/tro-chuyen-ai',
    icon: ChatIcon,
    title: 'Trò chuyện AI',
    className: 'bg-gradient-to-br from-brand-600 to-candy-500'
  },
  {
    to: '/cham-bai-viet',
    icon: ZapIcon,
    title: 'Chấm bài viết AI',
    className: 'bg-gradient-to-br from-sun-500 to-candy-600'
  },
  {
    to: '/truyen',
    icon: StoryIcon,
    title: 'Truyện dài',
    className: 'col-span-2 bg-gradient-to-br from-brand-600 to-sky-500'
  },
  {
    to: '/thu',
    icon: PencilIcon,
    title: 'Thư gửi chính mình',
    className: 'bg-gradient-to-br from-candy-500 to-brand-600'
  },
  {
    to: '/nghe-chep-chinh-ta',
    icon: EarIcon,
    title: 'Nghe chép chính tả',
    className: 'bg-gradient-to-br from-teal-500 to-sky-600'
  },
  {
    to: '/sap-xep-cau',
    icon: ShuffleIcon,
    title: 'Sắp xếp câu',
    className: 'bg-gradient-to-br from-emerald-500 to-teal-600'
  },
  {
    to: '/ghep-cap',
    icon: CardsIcon,
    title: 'Ghép cặp',
    className: 'bg-gradient-to-br from-candy-500 to-sky-500'
  },
  {
    to: '/tro-choi',
    icon: SpeedIcon,
    title: 'Đua tốc độ',
    className: 'col-span-2 bg-gradient-to-br from-candy-500 via-brand-500 to-sky-500'
  },
  {
    to: '/bang-xep-hang',
    icon: TrophyIcon,
    title: 'Bảng xếp hạng',
    className: 'col-span-2 bg-gradient-to-br from-gold-500 to-sun-500'
  }
]

// The dai: bieu tuong ben trai, chu ben phai. The vuong: bieu tuong tren, chu duoi.
function HomeCard({ to, icon: Icon, title, className, subtitle }) {
  const wide = className.includes('col-span-2')
  return (
    <Link
      to={to}
      className={`flex min-h-[7.5rem] rounded-2xl p-4 text-white shadow-sm ${
        wide ? 'items-center gap-4' : 'flex-col'
      } ${className}`}
    >
      <Icon width={wide ? 40 : 28} height={wide ? 40 : 28} className="shrink-0" />
      <div className={wide ? '' : 'mt-2'}>
        <p className="text-lg leading-snug">{title}</p>
        {subtitle && <p className="text-xs text-white/85">{subtitle}</p>}
      </div>
    </Link>
  )
}

function isLevelDone(levelId, completedUnits) {
  const level = LEVELS.find((l) => l.id === levelId)
  return level.units.every((u) => completedUnits.includes(`${levelId}:${u.id}`))
}

export default function HomePage() {
  useScrollRestoration('home')
  const { srsState, completedUnits, streak, toneStats, xp, dailyXp, writingPerfectCount, completedGrammar, writingStats, dailyCombo } =
    useProgress()
  const { nickname } = useFirebaseAuth()
  const allIds = ALL_WORDS.map((w) => w.id)
  const stats = getCardStats(allIds, srsState)
  const dueCount = stats.due
  const toneAccuracy = toneStats.total ? Math.round((toneStats.correct / toneStats.total) * 100) : null
  const totalUnits = LEVELS.reduce((sum, l) => sum + l.units.length, 0)
  const unitsDone = completedUnits.length
  const percent = Math.round((stats.learned / stats.total) * 100)

  // Cung logic combo voi TodayPlanPage: neu hom nay da khoa 1 bai muc tieu thi
  // doc lai dung bai do, chua khoa thi xem truoc bai se duoc khoa (xem ghi chu
  // chi tiet trong TodayPlanPage.jsx va lib/curriculum.js).
  //
  // getNextVocabCombo chu khong phai ban cu getCurrentCombo: bai cu chi con sot
  // phan viet chu KHONG duoc lay lam bai cua hom nay, neu khong the xem truoc
  // o day se chi vao mot bai da hoc tu hom qua.
  const freshCombo = getNextVocabCombo(LEVELS, completedUnits, completedGrammar, writingStats)
  const freshUnitKey = freshCombo ? `${freshCombo.levelId}:${freshCombo.unit.id}` : null
  const lockedUnitKey = dailyCombo.date === todayKey() ? dailyCombo.unitKey : freshUnitKey
  const todayCombo = getComboByUnitKey(LEVELS, lockedUnitKey, completedUnits, completedGrammar, writingStats)
  const comboDone = !todayCombo || (todayCombo.vocabDone && todayCombo.grammarDone && todayCombo.writingDone)
  const todayPlanSubtitle =
    dueCount > 0
      ? `${dueCount} thẻ cần ôn`
      : !comboDone
        ? `${todayCombo.levelLabel} · ${todayCombo.unit.title}`
        : 'Hoàn thành nhiệm vụ 🎉'

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

  function cardSubtitle(to) {
    // So the can on da nam o dai "Phien hoc hom nay" ngay phia tren, khong lap lai o day
    if (to === '/on-tap') return 'Lật thẻ để nhớ lâu hơn'
    if (to === '/phat-am') return toneAccuracy === null ? 'Chưa luyện' : `Độ chính xác ${toneAccuracy}%`
    if (to === '/viet-chu') return 'Luyện nét theo thứ tự chuẩn'
    if (to === '/chu-de') return 'Ngành nghề, bất động sản, đời sống'
    if (to === '/bo-thu') return '214 bộ dựng nên chữ Hán'
    if (to === '/hoi-thoai') return 'Xem tiếng Trung dùng thật'
    if (to === '/thu') return 'Tự dịch rồi đối chiếu đáp án'
    if (to === '/tro-choi') return 'Trả lời nhanh trong 60 giây!'
    if (to === '/ghep-cap') return 'Lật thẻ ghép chữ với nghĩa'
    if (to === '/tro-chuyen-ai') return 'Luyện nói với AI, sửa lỗi ngay'
    if (to === '/cham-bai-viet') return 'AI chấm và sửa câu văn bạn viết'
    return null
  }

  return (
    <div className="px-4 pt-6">
      <header className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-base italic text-candy-600">Chào {nickname || 'bạn'} 👋</p>
          <h1 className="flex items-center gap-1.5 text-xl text-brand-800">
            <img src={headerPanda} alt="" width={34} height={34} className="inline-block" />
            PandaChinese
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-sun-100 px-3 py-1.5 text-sun-600">
            <FireIcon width={22} height={22} />
            <span className="text-sm">{streak.count} ngày</span>
          </div>
          <Link to="/cai-dat" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <SettingsIcon width={22} height={22} />
          </Link>
        </div>
      </header>

      <PandaHero />

      <Link
        to="/hoc-hom-nay"
        className="mt-4 flex items-center justify-between rounded-2xl bg-brand-700 p-4 text-white shadow-md"
      >
        <div>
          <p className="text-xs text-white/80">
            {unitsDone > 0 ? 'Phiên học hôm nay' : 'Bắt đầu phiên học'}
          </p>
          <p className="text-lg font-semibold">{todayPlanSubtitle}</p>
        </div>
        <ArrowRightIcon width={32} height={32} />
      </Link>

      <p className="mb-2 mt-5 text-sm font-semibold text-gray-500">Lộ trình chính</p>
      <section className="mb-6 grid grid-cols-2 gap-3">
        {CORE_CARDS.map((card) => (
          <HomeCard key={card.to} {...card} subtitle={cardSubtitle(card.to)} />
        ))}
      </section>

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

      <div className={`mb-5 rounded-2xl p-4 shadow-sm ${dailyGoalDone ? 'bg-teal-100' : 'bg-white'}`}>
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

      <section className="mb-5 grid grid-cols-2 gap-3">
        {STAT_STYLES.map((s) => (
          <div key={s.key} className={`rounded-2xl p-3 text-center ${s.className}`}>
            <p className="text-xl">{statValues[s.key]}</p>
            <p className="text-xs opacity-80">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500">Tiến độ học tập</p>
          <Link to="/lo-trinh" className="text-xs font-semibold text-brand-600">
            Xem lộ trình →
          </Link>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-brand-50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-candy-500"
            style={{ width: `${Math.min(100, percent)}%` }}
          />
        </div>
        <p className="mt-1 text-right text-xs text-gray-500">{unitsDone}/{totalUnits} bài hoàn thành</p>
      </section>

      <section className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <img src={trophyPanda} alt="" className="h-9 w-9 rounded-full object-cover" />
          <p className="text-sm text-gray-500">
            Thành tích ({earnedBadgeIds.size}/{BADGES.length})
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {BADGES.map((b) => {
            const earned = earnedBadgeIds.has(b.id)
            return (
              <div
                key={b.id}
                title={b.desc}
                className={`flex flex-col items-center rounded-xl p-2 text-center ${
                  earned ? 'animate-pop-in bg-gradient-to-br from-sun-100 to-candy-100' : 'bg-gray-100'
                }`}
              >
                <span className={`text-2xl ${earned ? '' : 'opacity-40 grayscale'}`}>{b.icon}</span>
                {/* Truoc day ca o bi opacity-50 va chu chi 10px, nen huy hieu CHUA
                    dat gan nhu khong doc duoc ten - nguoi hoc khong biet minh can
                    lam gi de mo khoa. Chi mo bieu tuong cho thay "chua dat" la du. */}
                <p className={`mt-1 text-xs leading-tight ${earned ? 'text-gray-700' : 'text-gray-600'}`}>
                  {b.title}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <p className="mb-2 text-sm font-semibold text-gray-500">Luyện thêm & giải trí</p>
      <section className="mb-5 grid grid-cols-2 gap-3">
        {EXTRA_CARDS.map((card) => (
          <HomeCard key={card.to} {...card} subtitle={cardSubtitle(card.to)} />
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
