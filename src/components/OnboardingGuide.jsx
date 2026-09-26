import { useNavigate } from 'react-router-dom'
import { loadJSON, saveJSON } from '../lib/storage'

const SEEN_KEY = 'hasSeenOnboarding'

export function hasSeenOnboarding() {
  return loadJSON(SEEN_KEY, false)
}

function markOnboardingSeen() {
  saveJSON(SEEN_KEY, true)
}

const STEPS = [
  {
    emoji: '1️⃣',
    title: 'Học hôm nay',
    desc: 'Mỗi ngày mở mục này trước tiên: ôn tập thẻ đến hạn, rồi học 1 bài mới gồm từ vựng + ngữ pháp + viết chữ. Xong là coi như hoàn thành nhiệm vụ trong ngày.'
  },
  {
    emoji: '2️⃣',
    title: 'Ôn tập đều đặn',
    desc: 'Quay lại Ôn tập bất cứ khi nào rảnh - hệ thống tự nhắc từ nào cần ôn lại đúng lúc sắp quên, giúp nhớ lâu hơn học dồn.'
  },
  {
    emoji: '3️⃣',
    title: 'Luyện thêm khi rảnh',
    desc: 'Khi đã có ít vốn từ, ghé Phát âm, Chủ đề, Hội thoại, Truyện, Trò chơi... để luyện phản xạ - không bắt buộc mỗi ngày, học thêm cho vui và chắc kiến thức hơn.'
  }
]

// Hien 1 lan duy nhat sau man hinh Chao mung (WelcomeScreen), giai thich
// nhanh nen hoc theo thu tu nao - giai quyet cam giac "roi rac" cua nguoi
// moi khi vua vao thang Trang chu voi ca chuc the khong biet bat dau tu dau.
export default function OnboardingGuide({ onDone }) {
  const navigate = useNavigate()

  function handleStart() {
    markOnboardingSeen()
    onDone()
    navigate('/hoc-hom-nay')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-600 via-candy-500 to-sky-500 px-6 text-center text-white">
      <div className="text-6xl">🐼</div>
      <h1 className="mt-3 text-2xl font-bold">Học thế nào cho hiệu quả?</h1>
      <p className="mt-1 text-sm text-white/85">3 bước đơn giản, làm theo thứ tự này nhé</p>

      <div className="mt-6 w-full max-w-sm space-y-3">
        {STEPS.map((s) => (
          <div key={s.title} className="flex items-start gap-3 rounded-2xl bg-white/15 p-4 text-left">
            <span className="text-2xl">{s.emoji}</span>
            <div>
              <p className="font-semibold">{s.title}</p>
              <p className="mt-0.5 text-xs text-white/85">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleStart}
        className="mt-8 w-full max-w-sm rounded-xl bg-white py-3 text-sm font-semibold text-brand-700 shadow-lg"
      >
        Bắt đầu học ngay →
      </button>
    </div>
  )
}
