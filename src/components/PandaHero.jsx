export default function PandaHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-4 shadow-lg">
      <div className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-14 w-14 rounded-full bg-sun-400/30" />

      <svg viewBox="0 0 300 200" className="relative mx-auto h-40 w-full max-w-xs">
        {/* sparkles + chu Han bay nhe */}
        <g fill="#fde68a">
          <path d="M34 50 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z" />
          <path d="M264 46 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" />
          <circle cx="46" cy="150" r="3" />
          <circle cx="252" cy="150" r="3.5" />
        </g>
        <text x="42" y="100" fontSize="20" fill="#fde68a" opacity="0.85" fontFamily="sans-serif">学</text>
        <text x="238" y="95" fontSize="18" fill="#fde68a" opacity="0.8" fontFamily="sans-serif">中</text>

        {/* than - tron, be, ngoi */}
        <ellipse cx="150" cy="166" rx="50" ry="28" fill="#ffffff" />

        {/* dau - to tron kieu chibi */}
        <circle cx="150" cy="96" r="58" fill="#ffffff" />

        {/* tai */}
        <circle cx="100" cy="44" r="20" fill="#2b2b2b" />
        <circle cx="200" cy="44" r="20" fill="#2b2b2b" />
        <circle cx="100" cy="46" r="9" fill="#57575a" />
        <circle cx="200" cy="46" r="9" fill="#57575a" />

        {/* mat kinh panda - tron nho, can doi, con song mui thoang */}
        <circle cx="124" cy="95" r="14" fill="#2b2b2b" />
        <circle cx="176" cy="95" r="14" fill="#2b2b2b" />

        {/* mat to sang long lanh */}
        <circle cx="124" cy="97" r="7.5" fill="#ffffff" />
        <circle cx="176" cy="97" r="7.5" fill="#ffffff" />
        <circle cx="126" cy="99" r="4.3" fill="#1f2937" />
        <circle cx="178" cy="99" r="4.3" fill="#1f2937" />
        <circle cx="122" cy="94" r="1.8" fill="#ffffff" />
        <circle cx="174" cy="94" r="1.8" fill="#ffffff" />

        {/* mui nho */}
        <ellipse cx="150" cy="117" rx="5" ry="3.5" fill="#2b2b2b" />
        {/* cuoi tuoi mot net cong */}
        <path d="M137 125 Q150 136 163 125" stroke="#2b2b2b" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* ma hong */}
        <circle cx="99" cy="115" r="8.5" fill="#fbcfe8" opacity="0.8" />
        <circle cx="201" cy="115" r="8.5" fill="#fbcfe8" opacity="0.8" />

        {/* hai tay om sach */}
        <ellipse cx="106" cy="155" rx="12" ry="19" fill="#2b2b2b" transform="rotate(22 106 155)" />
        <ellipse cx="194" cy="155" rx="12" ry="19" fill="#2b2b2b" transform="rotate(-22 194 155)" />

        {/* sach dang mo */}
        <g transform="translate(112 138)">
          <rect x="0" y="0" width="76" height="38" rx="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
          <line x1="38" y1="3" x2="38" y2="35" stroke="#9333ea" strokeWidth="2.5" />
          <line x1="10" y1="12" x2="30" y2="12" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="10" y1="22" x2="30" y2="22" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="46" y1="12" x2="66" y2="12" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="46" y1="22" x2="66" y2="22" stroke="#e9d5ff" strokeWidth="2.5" />
        </g>
      </svg>

      <p className="relative mt-1 text-center text-sm font-semibold text-white drop-shadow">
        学中文, 加油! 💪 Học tiếng Trung mỗi ngày
      </p>
    </div>
  )
}
