import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { LEVELS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { todayKey } from '../lib/date'
import { getLeftoverWriting, getNextVocabCombo, getComboByUnitKey } from '../lib/curriculum'
import {
  SESSION_STEP_META,
  SESSION_STEP_STYLE,
  buildSessionSteps,
  getCurrentStep,
  stepLink
} from '../lib/sessionPlan'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'

export default function TodayPlanPage() {
  const { srsState, completedUnits, writingStats, completedGrammar, newWordsToday, dailyCombo, lockDailyCombo } =
    useProgress()

  // Bai "song" (khong bi khoa theo ngay): bai som nhat con TU VUNG CHUA HOC -
  // dung de biet con gi de "hoc vuot" hay khong sau khi da xong bai hom nay.
  const freshCombo = getNextVocabCombo(LEVELS, completedUnits, completedGrammar, writingStats)
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

  // Phan viet chu con sot cua cac bai DA HOC TU TRUOC nhung chua luyen het chu.
  // KHONG phai mot buoc cua phien va KHONG duoc tinh vao viec chot phien: neu
  // tinh vao thi mot ngay chi toan luyen not chu cu cung duoc coi la "xong phien
  // hoc hom nay" - dung cai loi ma getNextVocabCombo vua sua. Nen cho nay chi la
  // mot dong nhac nho, khong chan gi ca.
  const leftover = getLeftoverWriting(LEVELS, lockedUnitKey, completedUnits, writingStats)

  // Danh sach buoc nam o lib/sessionPlan.js - dung CHUNG voi thanh tien trinh va
  // man hinh hoan thanh cua tung buoc, de bon noi khong lech nhau ve thu tu.
  const steps = buildSessionSteps({ srsState, newWordsToday, combo })
  const currentStep = getCurrentStep(steps)
  const currentIndex = currentStep ? steps.findIndex((s) => s.key === currentStep.key) : -1
  const allDone = currentIndex === -1
  // Combo hom nay da xong nhung van con bai khac trong giao trinh - goi y "hoc
  // vuot" (hoan toan tuy chon), khong bat buoc de duoc tinh la hoan thanh.
  const showAhead = allDone && freshCombo

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">Học hôm nay</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">Ôn trước rồi mới học mới - giúp nhớ lâu nhất.</p>

      {/* KHONG con nut rieng o tren dau trang: nut hanh dong nam ngay trong o cua
          buoc dang can hoc ben duoi - bam vao dung cai o minh dang nhin, khong
          phai noi mot cho bam mot neo. */}

      <div className="relative pl-2">
        <div className="absolute bottom-3 left-[19px] top-3 w-0.5 bg-gray-200" />

        {steps.map((step, i) => {
          const status = step.done ? 'done' : i === currentIndex ? 'current' : 'upcoming'
          const meta = SESSION_STEP_META[step.key]
          const style = SESSION_STEP_STYLE[meta.color]
          const Icon = meta.icon

          if (status === 'current') {
            return (
              <div key={step.key} className="relative mb-5 flex gap-3">
                <span
                  className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white ${style.dot}`}
                >
                  <Icon width={24} height={24} />
                </span>
                <div className={`flex-1 rounded-2xl p-4 shadow-sm ${style.card}`}>
                  <p className="text-xs font-semibold text-gray-500">{meta.full}</p>
                  <p className="mt-0.5 text-base text-gray-800">{step.title}</p>
                  {step.subtitle && <p className="mt-0.5 text-xs text-gray-500">{step.subtitle}</p>}
                  {/* Nut nam ngay trong o cua buoc dang can hoc, va la cho bam
                      DUY NHAT tren trang de vao buoc do. Nhan dat rieng cho tung
                      buoc (On ngay / Hoc ngay / Luyen ngay) chu khong dung mot
                      chu chung - nhin la biet minh sap lam gi. */}
                  <Link
                    to={stepLink(step)}
                    className={`mt-3 flex items-center justify-center gap-1 rounded-xl py-2.5 text-center text-sm font-semibold text-white shadow-sm ${style.button}`}
                  >
                    {step.actionLabel}
                    <ArrowRightIcon width={20} height={20} />
                  </Link>
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
                {status === 'done' ? <CheckIcon width={16} height={16} /> : <Icon width={14} height={14} />}
              </span>
              <p className="text-sm text-gray-500">
                <span className="font-medium">{meta.full}</span> · {step.summary}
                {status === 'done' && ' ✓'}
              </p>
            </div>
          )
        })}

        {allDone && (
          <div className="relative flex gap-3">
            <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-md ring-4 ring-white">
              <CheckIcon width={24} height={24} />
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

      {leftover.count > 0 && (
        // Mot dong nho, khong co nut to, khong nam trong duong thoi gian o tren -
        // de nhin la biet viec nay nam ngoai phien hom nay. Hien ca khi da xong
        // phien (luc do no la loi nhac huu ich nhat) lan khi chua xong (luc do no
        // chi la thong tin them, khong keo nguoi hoc ra khoi buoc dang lam).
        <Link
          to={`/viet-chu/${leftover.levelId}/${leftover.unitId}`}
          className="mt-1 flex items-center justify-between gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm"
        >
          <span className="text-xs text-gray-500">
            ✍️ Còn <span className="font-semibold text-gray-700">{leftover.count} chữ</span> của bài trước chưa
            luyện
          </span>
          <span className="shrink-0 text-xs font-semibold text-candy-600">Luyện nốt →</span>
        </Link>
      )}

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
      <Link to="/cai-dat" className="mt-2 block text-center text-xs text-gray-500 underline">
        Đổi giới hạn từ mới mỗi ngày
      </Link>
    </div>
  )
}
