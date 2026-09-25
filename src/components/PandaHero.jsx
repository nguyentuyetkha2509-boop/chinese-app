export default function PandaHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-4 shadow-lg">
      <div className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -right-8 top-10 h-20 w-20 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-14 w-14 rounded-full bg-sun-400/30" />

      <svg viewBox="0 0 300 180" className="relative mx-auto h-40 w-full max-w-xs">
        {/* sparkles */}
        <g fill="#fde68a">
          <path d="M38 28 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z" />
          <path d="M258 22 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" />
          <circle cx="28" cy="88" r="3" />
          <circle cx="270" cy="92" r="4" />
        </g>

        {/* body - tron, map hon */}
        <ellipse cx="150" cy="140" rx="64" ry="34" fill="#ffffff" />
        {/* head - to, tron nhu chibi */}
        <circle cx="150" cy="82" r="54" fill="#ffffff" />
        {/* ears - tron day */}
        <circle cx="103" cy="42" r="20" fill="#2b2b2b" />
        <circle cx="197" cy="42" r="20" fill="#2b2b2b" />
        <circle cx="103" cy="42" r="9" fill="#4b4b4b" />
        <circle cx="197" cy="42" r="9" fill="#4b4b4b" />
        {/* eye patches - tron, khong nghieng, trong hien lanh hon */}
        <circle cx="120" cy="86" r="19" fill="#2b2b2b" />
        <circle cx="180" cy="86" r="19" fill="#2b2b2b" />
        {/* eyes - to tron long lanh */}
        <circle cx="120" cy="88" r="9" fill="#ffffff" />
        <circle cx="180" cy="88" r="9" fill="#ffffff" />
        <circle cx="122" cy="90" r="4.5" fill="#1f2937" />
        <circle cx="182" cy="90" r="4.5" fill="#1f2937" />
        <circle cx="124" cy="87" r="1.6" fill="#ffffff" />
        <circle cx="184" cy="87" r="1.6" fill="#ffffff" />
        {/* nose + mieng cuoi tron */}
        <ellipse cx="150" cy="103" rx="7" ry="5" fill="#2b2b2b" />
        <path d="M150 108 q0 9 -11 11" stroke="#2b2b2b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M150 108 q0 9 11 11" stroke="#2b2b2b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* cheeks hong */}
        <circle cx="104" cy="108" r="8" fill="#fbcfe8" opacity="0.8" />
        <circle cx="196" cy="108" r="8" fill="#fbcfe8" opacity="0.8" />

        {/* arms - map, tron */}
        <ellipse cx="102" cy="138" rx="15" ry="20" fill="#2b2b2b" transform="rotate(25 102 138)" />
        <ellipse cx="198" cy="138" rx="15" ry="20" fill="#2b2b2b" transform="rotate(-25 198 138)" />

        {/* book */}
        <g transform="translate(114 122)">
          <rect x="0" y="0" width="72" height="36" rx="5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
          <line x1="36" y1="2" x2="36" y2="34" stroke="#9333ea" strokeWidth="2.5" />
          <line x1="9" y1="11" x2="29" y2="11" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="9" y1="20" x2="29" y2="20" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="43" y1="11" x2="63" y2="11" stroke="#e9d5ff" strokeWidth="2.5" />
          <line x1="43" y1="20" x2="63" y2="20" stroke="#e9d5ff" strokeWidth="2.5" />
        </g>
      </svg>

      <p className="relative mt-1 text-center text-sm font-semibold text-white drop-shadow">
        学中文, 加油! 💪 Học tiếng Trung mỗi ngày
      </p>
    </div>
  )
}
