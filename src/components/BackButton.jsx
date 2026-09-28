import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from './Icons'

// Nut quay lai dung chung cho moi trang.
//
// Truoc day moi trang tu viet `<button className="text-gray-500"><ArrowLeftIcon /></button>`,
// va bieu tuong chi rong 32x32px - nho hon nguong cham duoc tren dien thoai
// (khoang 44x44). Day la nut duoc bam NHIEU NHAT trong ca app ma lai kho bam
// nhat: nguoi dung lien tuc bam truot ma khong hieu vi sao.
//
// `-ml-2` bu lai phan padding vua them, de bieu tuong van thang hang voi mep
// noi dung nhu truoc - chi vung cham rong ra, bo cuc khong doi.
export default function BackButton({ className = '' }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Quay lại"
      className={`-ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 active:bg-gray-200 ${className}`}
    >
      <ArrowLeftIcon />
    </button>
  )
}
