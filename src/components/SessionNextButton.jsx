import { Link } from 'react-router-dom'
import { getNextStep, nextStepLabel, stepLink } from '../lib/sessionPlan'

// Nut CHINH o man hinh hoan thanh cua tung buoc trong phien: "Tiep theo: ...".
// Dat rieng mot component de bon trang khong moi noi tu viet mot kieu nut khac
// nhau, va de con kiem thu duoc bang SSR voi props cho san.
//
// Het buoc phia truoc (Viet chu la buoc cuoi) thi nut doi thanh ket thuc phien,
// tro ve trang ke hoach - thay vi de nguoi hoc dung lai giua duong khong biet
// di dau tiep.
//
// variant: 'onGradient' khi nut nam TRONG the nen gradient (nen trang, chu tim
// dam), 'solid' khi nam tren nen trang.
export default function SessionNextButton({ steps, currentKey, variant = 'solid' }) {
  const next = getNextStep(steps, currentKey)
  const className = `mt-4 flex w-full items-center justify-center gap-1 rounded-xl py-3 text-base font-semibold shadow-sm ${
    variant === 'onGradient' ? 'bg-white text-brand-700' : 'bg-brand-700 text-white'
  }`

  if (!next) {
    return (
      <Link to="/hoc-hom-nay" className={className}>
        🎉 Xong phiên học hôm nay
      </Link>
    )
  }

  // Nhan co the la "Tiep theo: ..." hoac "Con thieu: ..." tuy huong - xem
  // nextStepLabel trong lib/sessionPlan.js.
  return (
    <Link to={stepLink(next)} className={className}>
      {nextStepLabel(steps, currentKey, next)} →
    </Link>
  )
}
