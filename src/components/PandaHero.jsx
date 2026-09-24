export default function PandaHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-4 shadow-lg">
      <div className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-14 w-14 rounded-full bg-sun-400/30" />

      <svg viewBox="0 0 300 170" className="relative mx-auto h-36 w-full max-w-xs">
        {/* sparkles */}
        <g fill="#fde68a">
          <path d="M40 30 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z" />
          <path d="M255 24 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" />
          <circle cx="30" cy="90" r="3" />
          <circle cx="268" cy="95" r="4" />
        </g>

        {/* body */}
        <ellipse cx="150" cy="138" rx="58" ry="30" fill="#ffffff" />
        {/* head */}
        <circle cx="150" cy="88" r="46" fill="#ffffff" />
        {/* ears */}
        <circle cx="109" cy="52" r="17" fill="#2b2b2b" />
        <circle cx="191" cy="52" r="17" fill="#2b2b2b" />
        {/* eye patches */}
        <ellipse cx="123" cy="93" rx="16" ry="21" fill="#2b2b2b" transform="rotate(-18 123 93)" />
        <ellipse cx="177" cy="93" rx="16" ry="21" fill="#2b2b2b" transform="rotate(18 177 93)" />
        {/* eyes */}
        <circle cx="126" cy="96" r="5" fill="#ffffff" />
        <circle cx="174" cy="96" r="5" fill="#ffffff" />
        <circle cx="127" cy="97" r="2.4" fill="#1f2937" />
        <circle cx="173" cy="97" r="2.4" fill="#1f2937" />
        {/* nose + mouth */}
        <ellipse cx="150" cy="107" rx="7" ry="5" fill="#2b2b2b" />
        <path d="M150 112 q0 8 -10 10" stroke="#2b2b2b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M150 112 q0 8 10 10" stroke="#2b2b2b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* cheeks */}
        <circle cx="112" cy="112" r="6" fill="#fbcfe8" opacity="0.7" />
        <circle cx="188" cy="112" r="6" fill="#fbcfe8" opacity="0.7" />

        {/* arms */}
        <ellipse cx="112" cy="135" rx="12" ry="18" fill="#2b2b2b" transform="rotate(25 112 135)" />
        <ellipse cx="188" cy="135" rx="12" ry="18" fill="#2b2b2b" transform="rotate(-25 188 135)" />

        {/* book */}
        <g transform="translate(118 118)">
          <rect x="0" y="0" width="64" height="34" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="2" />
          <line x1="32" y1="2" x2="32" y2="32" stroke="#9333ea" strokeWidth="2" />
          <line x1="8" y1="10" x2="26" y2="10" stroke="#e9d5ff" strokeWidth="2" />
          <line x1="8" y1="18" x2="26" y2="18" stroke="#e9d5ff" strokeWidth="2" />
          <line x1="38" y1="10" x2="56" y2="10" stroke="#e9d5ff" strokeWidth="2" />
          <line x1="38" y1="18" x2="56" y2="18" stroke="#e9d5ff" strokeWidth="2" />
        </g>
      </svg>

      <p className="relative mt-1 text-center text-sm font-semibold text-white drop-shadow">
        学中文, 加油! 💪 Học tiếng Trung mỗi ngày
      </p>
    </div>
  )
}
