import { Link } from 'react-router-dom'
import { CheckIcon } from './Icons'
import { SESSION_STEP_META, stepLink } from '../lib/sessionPlan'

// Mau vien sang cho buoc dang lam. Phai viet THANG ten lop o day: Tailwind doc
// chuoi trong ma nguon de sinh CSS, nen mot lop ghep luc chay kieu
// `'bg-sky-600'.replace('bg-','ring-')` se khong bao gio duoc sinh ra.
const CURRENT_RING = {
  brand: 'bg-brand-600 ring-brand-300',
  sky: 'bg-sky-600 ring-sky-200',
  gold: 'bg-gold-600 ring-gold-200',
  candy: 'bg-candy-600 ring-candy-200'
}

// Thanh tien trinh cua phien: dang o buoc may tren tong so may, va cac buoc
// truoc da xong chua. Nam o dau moi trang thuoc phien de nguoi hoc khong phai
// tu nho minh vua lam gi - day la thu thay cho viec phai bam cac tab duoi cung
// de doan xem con thieu buoc nao.
//
// Tra null khi khong du buoc de noi thanh mot tien trinh (vi du da het giao
// trinh, phien chi con moi On tap) hoac khi buoc hien tai khong nam trong phien
// (nguoi dung tu mo trang Ngu phap tu menu chu khong di theo phien).
export default function SessionBar({ steps, currentKey }) {
  if (!steps || steps.length < 2) return null
  const currentIndex = steps.findIndex((s) => s.key === currentKey)
  if (currentIndex === -1) return null

  const allDone = steps.every((s) => s.done)

  return (
    <div className="sticky top-[max(env(safe-area-inset-top),20px)] z-10 -mx-4 -mt-6 mb-4 border-b border-brand-100 bg-canvas px-4 pb-3 pt-3">
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-semibold text-gray-500">Phiên học hôm nay</p>
        <p className="text-xs text-gray-500">
          {allDone ? 'Đã xong cả phiên' : `Bước ${currentIndex + 1}/${steps.length}`}
        </p>
      </div>

      <div className="relative mt-3">
        {/* Duong noi cac cham. left-4/right-4 lui vao dung nua chieu rong mot
            cham (cham 28px, tam cach mep 14px) de duong khong tho ra ngoai. */}
        <div className="absolute left-4 right-4 top-3.5 h-0.5 bg-gray-200" />
        <div className="relative flex items-start justify-between">
          {steps.map((step, i) => {
            const meta = SESSION_STEP_META[step.key]
            const status = step.done ? 'done' : i === currentIndex ? 'current' : 'upcoming'
            return (
              <Link
                key={step.key}
                to={stepLink(step)}
                aria-label={`Bước ${i + 1}: ${meta.full}${step.done ? ' (đã xong)' : ''}`}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <span
                  aria-current={status === 'current' ? 'step' : undefined}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    status === 'done'
                      ? 'bg-teal-500 text-white'
                      : status === 'current'
                        ? `${CURRENT_RING[meta.color]} text-white ring-2`
                        : 'border-2 border-gray-300 bg-white text-gray-400'
                  }`}
                >
                  {status === 'done' ? <CheckIcon width={16} height={16} /> : i + 1}
                </span>
                <span className={`text-[10px] ${status === 'upcoming' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {meta.short}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
