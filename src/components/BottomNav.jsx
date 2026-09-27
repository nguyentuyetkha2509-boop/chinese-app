import { NavLink } from 'react-router-dom'
import { HomeIcon, BookIcon, CardsIcon, MicIcon, PencilIcon } from './Icons'

const TABS = [
  { to: '/', label: 'Trang chủ', icon: HomeIcon, end: true },
  { to: '/bai-hoc', label: 'Bài học', icon: BookIcon },
  { to: '/on-tap', label: 'Ôn tập', icon: CardsIcon },
  { to: '/phat-am', label: 'Phát âm', icon: MicIcon },
  { to: '/viet-chu', label: 'Viết chữ', icon: PencilIcon }
]

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-20 pb-[env(safe-area-inset-bottom)]"
      style={{ background: 'linear-gradient(90deg, #8a7ee6 0%, #7b95e8 50%, #6fb0ea 100%)' }}
    >
      <div className="mx-auto flex max-w-md justify-between px-2">
        {TABS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-semibold ${
                isActive ? 'text-white' : 'text-white/60'
              }`
            }
          >
            <Icon width={28} height={28} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
