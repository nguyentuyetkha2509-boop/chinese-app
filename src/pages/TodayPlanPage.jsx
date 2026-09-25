import { Link, useNavigate } from 'react-router-dom'
import { ALL_WORDS, LEVELS, getNextUnit } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats } from '../lib/srs'
import {
  getDailyNewWordLimit,
  getRelatedGrammarForUnit,
  getAllUnitsNeedingWriting,
  getAllUnitsNeedingGrammar
} from '../lib/curriculum'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CardsIcon,
  BookIcon,
  GrammarIcon,
  PencilIcon,
  MicIcon,
  CheckIcon
} from '../components/Icons'

// Chi dung cac sac da co san trong tailwind.config.js (vd "gold" khong co
// shade -50/-700) de tranh class bi lang le khong render.
const STEP_STYLE = {
  brand: { dot: 'bg-brand-600', card: 'bg-brand-50', button: 'bg-brand-700' },
  sky: { dot: 'bg-sky-600', card: 'bg-sky-100', button: 'bg-sky-600' },
  gold: { dot: 'bg-gold-600', card: 'bg-gold-100', button: 'bg-gold-600' },
  candy: { dot: 'bg-candy-600', card: 'bg-candy-100', button: 'bg-candy-600' },
  sun: { dot: 'bg-sun-600', card: 'bg-sun-100', button: 'bg-sun-600' }
}

export default function TodayPlanPage() {
  const navigate = useNavigate()
  const { srsState, completedUnits, newWordsToday, writingStats, completedGrammar } = useProgress()
  const allIds = ALL_WORDS.map((w) => w.id)
  const dueCount = getCardStats(allIds, srsState).due
  const dailyLimit = getDailyNewWordLimit()
  const learnedToday = newWordsToday.count
  const capReached = learnedToday >= dailyLimit
  const nextUnit = getNextUnit(completedUnits)

  // Liet ke TOAN BO bai da hoc tu vung nhung con thieu ngu phap/viet chu -
  // moi bai la 1 muc doc lap, khong bai nao "chan" bai kia (bai 1 con thieu
  // viet chu khong lien quan gi den bai 6 con thieu ngu phap).
  const grammarBacklog = getAllUnitsNeedingGrammar(LEVELS, completedUnits, completedGrammar)
  const grammarPreview =
    grammarBacklog.length === 0 && nextUnit ? getRelatedGrammarForUnit(nextUnit.levelLabel, nextUnit.unit) : null
  const writingBacklog = getAllUnitsNeedingWriting(LEVELS, completedUnits, writingStats)

  const reviewDone = dueCount === 0
  const newStepDone = capReached || !nextUnit

  // Hanh trinh hom nay chi gom 2 buoc CO THU TU that su: On tap (retrieval)
  // truoc, roi moi Hoc tu moi - lam truoc lam sau anh huong toi hieu qua
  // nho lau. Ngu phap/Viet chu/Phat am la cac hoat dong CUNG CO doc lap,
  // hien o danh sach rieng ben duoi, khong xep chung vao 1 hang doi.
  const steps = [
    {
      key: 'review',
      icon: CardsIcon,
      color: 'brand',
      label: 'Ôn tập',
      done: reviewDone,
      summary: reviewDone ? 'Không còn thẻ đến hạn' : `${dueCount} thẻ cần ôn lại`,
      title: reviewDone ? 'Đã ôn xong, không còn thẻ đến hạn 🎉' : `${dueCount} thẻ cần ôn lại hôm nay`,
      actionLabel: 'Ôn tập ngay',
      actionTo: '/on-tap'
    },
    {
      key: 'newWord',
      icon: BookIcon,
      color: 'sky',
      label: 'Học từ mới',
      done: newStepDone,
      summary: !nextUnit ? 'Đã học hết giáo trình' : capReached ? 'Đã đạt giới hạn hôm nay' : nextUnit.unit.title,
      title: !nextUnit
        ? 'Bạn đã học hết toàn bộ giáo trình! 🎉'
        : capReached
          ? `Đã đạt giới hạn hôm nay (${learnedToday}/${dailyLimit} từ) - mai học tiếp nhé!`
          : `${nextUnit.levelLabel} · ${nextUnit.unit.title}`,
      subtitle: nextUnit && !capReached ? `Đã học ${learnedToday}/${dailyLimit} từ mới hôm nay` : null,
      actionLabel: 'Học ngay',
      actionTo: nextUnit && !capReached ? `/bai-hoc/${nextUnit.levelId}/${nextUnit.unit.id}` : null,
      secondaryLabel: capReached ? 'Vẫn muốn học thêm? Xem toàn bộ bài học' : null,
      secondaryTo: capReached ? '/bai-hoc' : null
    }
  ]

  const currentIndex = steps.findIndex((s) => !s.done)
  const bothDone = currentIndex === -1
  const hasBacklog = grammarBacklog.length > 0 || writingBacklog.length > 0 || grammarPreview

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Học hôm nay</h1>
      </div>
      <p className="mb-6 text-sm text-gray-500">Ôn trước rồi mới học mới - giúp nhớ lâu nhất.</p>

      <div className="relative pl-2">
        <div className="absolute bottom-3 left-[19px] top-3 w-0.5 bg-gray-200" />

        {steps.map((step, i) => {
          const status = step.done ? 'done' : i === currentIndex ? 'current' : 'upcoming'
          const style = STEP_STYLE[step.color]
          const Icon = step.icon

          if (status === 'current') {
            return (
              <div key={step.key} className="relative mb-5 flex gap-3">
                <span
                  className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white ${style.dot}`}
                >
                  <Icon width={20} height={20} />
                </span>
                <div className={`flex-1 rounded-2xl p-4 shadow-sm ${style.card}`}>
                  <p className="text-xs font-semibold text-gray-500">{step.label}</p>
                  <p className="mt-0.5 text-base text-gray-800">{step.title}</p>
                  {step.subtitle && <p className="mt-0.5 text-xs text-gray-400">{step.subtitle}</p>}
                  {step.actionTo && (
                    <Link
                      to={step.actionTo}
                      className={`mt-3 flex items-center justify-center gap-1 rounded-xl py-2.5 text-center text-sm font-semibold text-white ${style.button}`}
                    >
                      {step.actionLabel} <ArrowRightIcon width={16} height={16} />
                    </Link>
                  )}
                  {step.secondaryTo && (
                    <Link to={step.secondaryTo} className="mt-3 block text-center text-xs text-gray-400 underline">
                      {step.secondaryLabel}
                    </Link>
                  )}
                </div>
              </div>
            )
          }

          return (
            <div key={step.key} className="relative mb-3 flex items-center gap-3">
              <span
                className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] ${
                  status === 'done' ? 'bg-teal-500 text-white' : 'border-2 border-gray-300 bg-white text-gray-300'
                }`}
              >
                {status === 'done' ? <CheckIcon width={12} height={12} /> : <Icon width={11} height={11} />}
              </span>
              <p className={`text-sm ${status === 'done' ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="font-medium">{step.label}</span> · {step.summary}
                {status === 'done' && ' ✓'}
              </p>
            </div>
          )
        })}

        {bothDone && !hasBacklog && (
          <div className="relative flex gap-3">
            <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-md ring-4 ring-white">
              <CheckIcon width={20} height={20} />
            </span>
            <div className="flex-1 rounded-2xl bg-teal-50 p-4 shadow-sm">
              <p className="text-base font-semibold text-teal-700">🎉 Xong hết hôm nay!</p>
              <p className="mt-0.5 text-xs text-gray-500">Quay lại vào ngày mai để tiếp tục nhé.</p>
            </div>
          </div>
        )}
      </div>

      {hasBacklog && (
        <div className="mt-2">
          <p className="mb-3 text-sm font-semibold text-gray-500">
            Còn thiếu cần bổ sung ({grammarBacklog.length + writingBacklog.length * 2} mục)
          </p>

          <div className="space-y-2.5">
            {grammarBacklog.map((b) => (
              <div key={`g-${b.grammar.key}`} className="flex items-center gap-3 rounded-xl bg-gold-100 p-3 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-gold-600">
                  <GrammarIcon width={18} height={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs text-gray-500">
                    {b.levelLabel} {b.unit.title}
                  </p>
                  <p className="truncate text-sm font-semibold text-gray-800">{b.grammar.title}</p>
                </div>
                <Link
                  to={`/ngu-phap/${b.grammar.key}`}
                  className="shrink-0 rounded-lg bg-gold-600 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Xem
                </Link>
              </div>
            ))}

            {grammarPreview && (
              <div className="flex items-center gap-3 rounded-xl bg-gold-100 p-3 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-gold-600">
                  <GrammarIcon width={18} height={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs text-gray-500">Ngữ pháp liên quan (bài sắp học)</p>
                  <p className="truncate text-sm font-semibold text-gray-800">{grammarPreview.title}</p>
                </div>
                <Link
                  to={`/ngu-phap/${grammarPreview.key}`}
                  className="shrink-0 rounded-lg bg-gold-600 px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Xem
                </Link>
              </div>
            )}

            {writingBacklog.map((b) => (
              <div key={`w-${b.levelId}-${b.unit.id}`} className="rounded-xl bg-white p-3 shadow-sm">
                <p className="mb-2 text-xs text-gray-500">
                  {b.levelLabel} {b.unit.title}
                </p>
                <div className="flex gap-2">
                  <Link
                    to={`/viet-chu/${b.levelId}/${b.unit.id}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-candy-100 py-2 text-xs font-semibold text-candy-700"
                  >
                    <PencilIcon width={15} height={15} /> Viết chữ
                  </Link>
                  <Link
                    to={`/phat-am/${b.levelId}/${b.unit.id}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-sun-100 py-2 text-xs font-semibold text-sun-700"
                  >
                    <MicIcon width={15} height={15} /> Phát âm
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Link to="/lo-trinh" className="mt-5 block text-center text-sm text-brand-600 underline">
        Xem lộ trình học toàn bộ 6 cấp
      </Link>
      <Link to="/cai-dat" className="mt-2 block text-center text-xs text-gray-400 underline">
        Đổi giới hạn từ mới mỗi ngày
      </Link>
    </div>
  )
}
