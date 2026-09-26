import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ALL_WORDS, LEVELS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats } from '../lib/srs'
import { todayKey } from '../lib/date'
import { getDailyNewWordLimit, getCurrentCombo, getComboByUnitKey } from '../lib/curriculum'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CardsIcon,
  BookIcon,
  GrammarIcon,
  PencilIcon,
  CheckIcon
} from '../components/Icons'

// Chi dung cac sac da co san trong tailwind.config.js (vd "gold" khong co
// shade -50/-700) de tranh class bi lang le khong render.
const STEP_STYLE = {
  brand: { dot: 'bg-brand-600', card: 'bg-brand-50', button: 'bg-brand-700' },
  sky: { dot: 'bg-sky-600', card: 'bg-sky-100', button: 'bg-sky-600' },
  gold: { dot: 'bg-gold-600', card: 'bg-gold-100', button: 'bg-gold-600' },
  candy: { dot: 'bg-candy-600', card: 'bg-candy-100', button: 'bg-candy-600' }
}

export default function TodayPlanPage() {
  const navigate = useNavigate()
  const { srsState, completedUnits, writingStats, completedGrammar, newWordsToday, dailyCombo, lockDailyCombo } =
    useProgress()
  const allIds = ALL_WORDS.map((w) => w.id)
  const dueCount = getCardStats(allIds, srsState).due
  const dailyLimit = getDailyNewWordLimit()
  const learnedToday = newWordsToday.count
  const reviewDone = dueCount === 0

  // Combo "song" (luon lay bai som nhat con thieu, khong bi khoa) - dung de
  // biet co con gi de "hoc vuot" hay khong sau khi da xong combo hom nay.
  const freshCombo = getCurrentCombo(LEVELS, completedUnits, completedGrammar, writingStats)
  const freshUnitKey = freshCombo ? `${freshCombo.levelId}:${freshCombo.unit.id}` : null

  // Khoa muc tieu cua ngay hom nay 1 lan duy nhat luc vao trang - de combo
  // hien thi khong tu nhien nhay sang bai tiep theo ngay khi vua lam xong bai
  // hom nay (xem ghi chu chi tiet trong lib/curriculum.js va ProgressContext).
  useEffect(() => {
    lockDailyCombo(freshUnitKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lockedUnitKey = dailyCombo.date === todayKey() ? dailyCombo.unitKey : freshUnitKey
  const combo = getComboByUnitKey(LEVELS, lockedUnitKey, completedUnits, completedGrammar, writingStats)

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
    }
  ]

  if (combo) {
    steps.push({
      key: 'vocab',
      icon: BookIcon,
      color: 'sky',
      label: 'Bài học',
      done: combo.vocabDone,
      summary: combo.unit.title,
      title: `${combo.levelLabel} · ${combo.unit.title}`,
      subtitle: !combo.vocabDone ? `Đã học ${learnedToday}/${dailyLimit} từ mới hôm nay` : null,
      actionLabel: 'Học ngay',
      actionTo: `/bai-hoc/${combo.levelId}/${combo.unit.id}`
    })

    if (combo.grammar) {
      steps.push({
        key: 'grammar',
        icon: GrammarIcon,
        color: 'gold',
        label: 'Ngữ pháp',
        done: combo.grammarDone,
        summary: combo.grammar.title,
        title: combo.grammar.title,
        actionLabel: 'Học ngay',
        actionTo: `/ngu-phap/${combo.grammar.key}`
      })
    }

    steps.push({
      key: 'writing',
      icon: PencilIcon,
      color: 'candy',
      label: 'Viết chữ',
      done: combo.writingDone,
      summary: combo.writingDone ? 'Đã luyện xong' : `${combo.writingChars.length} chữ cần luyện`,
      title: `Luyện viết ${combo.writingChars.length} chữ của ${combo.unit.title}`,
      actionLabel: 'Luyện ngay',
      actionTo: `/viet-chu/${combo.levelId}/${combo.unit.id}`
    })
  }

  const currentIndex = steps.findIndex((s) => !s.done)
  const allDone = currentIndex === -1
  // Combo hom nay da xong nhung van con bai khac trong giao trinh - goi y "hoc
  // vuot" (hoan toan tuy chon), khong bat buoc de duoc tinh la hoan thanh.
  const showAhead = allDone && freshCombo

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-gray-500">
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

        {allDone && (
          <div className="relative flex gap-3">
            <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-md ring-4 ring-white">
              <CheckIcon width={20} height={20} />
            </span>
            <div className="flex-1 rounded-2xl bg-teal-50 p-4 shadow-sm">
              <p className="text-base font-semibold text-teal-700">
                {combo ? '🎉 Xong nhiệm vụ hôm nay!' : '🎉 Bạn đã học hết toàn bộ giáo trình!'}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">Quay lại vào ngày mai để tiếp tục nhé.</p>
            </div>
          </div>
        )}
      </div>

      {showAhead && (
        <div className="mt-4 rounded-2xl border border-dashed border-brand-200 bg-white p-4">
          <p className="text-sm text-gray-600">Muốn học vượt tiến độ? Có thể học trước bài tiếp theo:</p>
          <p className="mt-1 text-sm font-semibold text-brand-700">
            {freshCombo.levelLabel} · {freshCombo.unit.title}
          </p>
          <Link
            to={`/bai-hoc/${freshCombo.levelId}/${freshCombo.unit.id}`}
            className="mt-3 block rounded-xl bg-brand-700 py-2.5 text-center text-sm font-semibold text-white"
          >
            Học trước bài này →
          </Link>
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
