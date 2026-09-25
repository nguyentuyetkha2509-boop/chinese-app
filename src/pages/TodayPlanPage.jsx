import { Link, useNavigate } from 'react-router-dom'
import { ALL_WORDS, LEVELS, getNextUnit } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats } from '../lib/srs'
import {
  getDailyNewWordLimit,
  getRelatedGrammarForUnit,
  getFirstUnitNeedingWriting,
  getFirstUnitNeedingGrammar
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

  // Uu tien bai CU NHAT da hoc tu vung nhung con thieu ngu phap/viet chu -
  // tranh tinh trang hoc lien tuc nhieu bai moi (chi phan tu vung) roi bo
  // quen vinh vien phan cung co cua nhung bai cu hon.
  const grammarBacklog = getFirstUnitNeedingGrammar(LEVELS, completedUnits, completedGrammar)
  const grammarPreview = !grammarBacklog && nextUnit ? getRelatedGrammarForUnit(nextUnit.levelLabel, nextUnit.unit) : null
  const writingBacklog = getFirstUnitNeedingWriting(LEVELS, completedUnits, writingStats)

  const reviewDone = dueCount === 0
  const newStepDone = capReached || !nextUnit

  // Hanh trinh hom nay: gop 5 buoc thanh 1 danh sach du lieu duy nhat, theo
  // dung thu tu nen lam. Buoc nao chua xong dau tien se duoc "mo rong" lam
  // trong tam (current), cac buoc con lai thu gon lai (done da xong, hoac
  // upcoming sap toi) - giong cam giac di theo 1 hanh trinh co thu tu ro
  // rang, thay vi 5 the roi rac ngang hang nhau.
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

  if (grammarBacklog) {
    steps.push({
      key: 'grammar',
      icon: GrammarIcon,
      color: 'gold',
      label: `Ngữ pháp còn thiếu · ${grammarBacklog.levelLabel} ${grammarBacklog.unit.title}`,
      done: false,
      summary: grammarBacklog.grammar.title,
      title: grammarBacklog.grammar.title,
      actionLabel: 'Xem ngữ pháp này',
      actionTo: `/ngu-phap/${grammarBacklog.grammar.key}`
    })
  } else if (grammarPreview && !capReached) {
    steps.push({
      key: 'grammar',
      icon: GrammarIcon,
      color: 'gold',
      label: 'Ngữ pháp liên quan',
      done: false,
      summary: grammarPreview.title,
      title: grammarPreview.title,
      actionLabel: 'Xem ngữ pháp này',
      actionTo: `/ngu-phap/${grammarPreview.key}`
    })
  }

  if (writingBacklog) {
    steps.push({
      key: 'writing',
      icon: PencilIcon,
      color: 'candy',
      label: 'Viết chữ còn thiếu',
      done: false,
      summary: `${writingBacklog.levelLabel} · ${writingBacklog.unit.title}`,
      title: `${writingBacklog.levelLabel} · ${writingBacklog.unit.title}`,
      actionLabel: 'Luyện viết bài này',
      actionTo: `/viet-chu/${writingBacklog.levelId}/${writingBacklog.unit.id}`
    })
    steps.push({
      key: 'pronunciation',
      icon: MicIcon,
      color: 'sun',
      label: 'Luyện phát âm',
      done: false,
      summary: `${writingBacklog.levelLabel} · ${writingBacklog.unit.title}`,
      title: `${writingBacklog.levelLabel} · ${writingBacklog.unit.title}`,
      actionLabel: 'Luyện phát âm bài này',
      actionTo: `/phat-am/${writingBacklog.levelId}/${writingBacklog.unit.id}`
    })
  }

  const currentIndex = steps.findIndex((s) => !s.done)
  const allDone = currentIndex === -1

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Học hôm nay</h1>
      </div>
      <p className="mb-6 text-sm text-gray-500">
        Hành trình hôm nay: ôn trước - học mới - củng cố bằng ngữ pháp, viết và phát âm.
      </p>

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
              <p className={`text-sm ${status === 'done' ? 'text-gray-400 line-through' : 'text-gray-400'}`}>
                <span className="font-medium">{step.label.split(' · ')[0]}</span> · {step.summary}
              </p>
            </div>
          )
        })}

        {allDone && (
          <div className="relative flex gap-3">
            <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-md ring-4 ring-white">
              <CheckIcon width={20} height={20} />
            </span>
            <div className="flex-1 rounded-2xl bg-teal-50 p-4 shadow-sm">
              <p className="text-base font-semibold text-teal-700">🎉 Xong hết hành trình hôm nay!</p>
              <p className="mt-0.5 text-xs text-gray-500">Quay lại vào ngày mai để tiếp tục nhé.</p>
            </div>
          </div>
        )}
      </div>

      <Link to="/lo-trinh" className="mt-4 block text-center text-sm text-brand-600 underline">
        Xem lộ trình học toàn bộ 6 cấp
      </Link>
      <Link to="/cai-dat" className="mt-2 block text-center text-xs text-gray-400 underline">
        Đổi giới hạn từ mới mỗi ngày
      </Link>
    </div>
  )
}
