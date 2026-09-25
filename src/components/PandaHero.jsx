import heroPanda from '../assets/panda/hero_panda.webp'

export default function PandaHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-4 shadow-lg">
      <div className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-14 w-14 rounded-full bg-sun-400/30" />

      <img src={heroPanda} alt="Gấu trúc PandaChinese đang đọc sách" className="relative mx-auto h-40 w-auto drop-shadow-lg" />

      <p className="relative mt-1 text-center text-sm font-semibold text-white drop-shadow">
        学中文, 加油! 💪 Học tiếng Trung mỗi ngày
      </p>
    </div>
  )
}
