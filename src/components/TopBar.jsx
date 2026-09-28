import headerPanda from '../assets/icons-gemini/header_panda.png'

// Thanh thuong hieu co dinh tren cung, luon hien tren moi trang - giong cach
// cac app hoc ngoai ngu khac (vd. HelloChinese) tach biet ro vung status bar
// voi noi dung, thay vi de status bar de len sat tieu de tung trang.
export default function TopBar() {
  return (
    <div className="sticky top-0 z-20 bg-brand-700 px-4 pb-1.5 pt-[max(env(safe-area-inset-top),20px)] text-white shadow-sm">
      <div className="flex items-center justify-center gap-1.5">
        <img src={headerPanda} alt="" width={20} height={20} className="inline-block" />
        <span className="text-base font-bold tracking-wide">PandaChinese</span>
      </div>
    </div>
  )
}
