function base(props) {
  return { viewBox: '0 0 64 64', width: 32, height: 32, ...props }
}

// Panda mascot SVG để dùng lại
function PandaMascot({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Body */}
      <circle cx="32" cy="36" r="18" fill="white" stroke="#2d1b4e" strokeWidth="2"/>
      {/* Head */}
      <circle cx="32" cy="20" r="16" fill="white" stroke="#2d1b4e" strokeWidth="2"/>
      {/* Ears */}
      <circle cx="18" cy="10" r="7" fill="#2d1b4e"/>
      <circle cx="46" cy="10" r="7" fill="#2d1b4e"/>
      {/* Eyes */}
      <circle cx="26" cy="18" r="5" fill="#2d1b4e"/>
      <circle cx="38" cy="18" r="5" fill="#2d1b4e"/>
      {/* Eye shine */}
      <circle cx="27" cy="17" r="2" fill="white"/>
      <circle cx="39" cy="17" r="2" fill="white"/>
      {/* Nose */}
      <circle cx="32" cy="24" r="2.5" fill="#2d1b4e"/>
      {/* Mouth */}
      <path d="M32 24 Q28 28 26 27" fill="none" stroke="#2d1b4e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 24 Q36 28 38 27" fill="none" stroke="#2d1b4e" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Blush */}
      <circle cx="20" cy="22" r="2.5" fill="#ff9999" opacity="0.7"/>
      <circle cx="44" cy="22" r="2.5" fill="#ff9999" opacity="0.7"/>
    </g>
  )
}

export function HomeIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Background - roof shape */}
      <path d="M 8 28 L 32 8 L 56 28 Z" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="2"/>
      {/* House body */}
      <rect x="12" y="28" width="40" height="28" rx="2" fill="#e6c5ff" stroke="#2d1b4e" strokeWidth="2"/>
      {/* Door */}
      <rect x="26" y="36" width="12" height="20" rx="2" fill="#fff9e6" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Door handle */}
      <circle cx="37" cy="46" r="1.5" fill="#ffc000"/>
      {/* Window */}
      <rect x="14" y="32" width="8" height="8" rx="1" fill="#fff9e6" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Bamboo decoration */}
      <g transform="translate(48, 20)">
        <rect x="0" y="0" width="3" height="12" rx="1" fill="#52c41a"/>
        <path d="M-2 3 L4 3 M-2 7 L4 7" stroke="#2d1b4e" strokeWidth="0.5"/>
      </g>
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Panda with book */}
      <circle cx="18" cy="32" r="10" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="12" cy="26" r="4" fill="#2d1b4e"/>
      <circle cx="24" cy="26" r="4" fill="#2d1b4e"/>
      <circle cx="14" cy="26" r="1.5" fill="white"/>
      <circle cx="22" cy="26" r="1.5" fill="white"/>
      <circle cx="18" cy="30" r="1.5" fill="#2d1b4e"/>
      <path d="M16 32 Q18 34 20 32" stroke="#2d1b4e" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Book */}
      <rect x="26" y="22" width="14" height="18" rx="1" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="1.5"/>
      <path d="M33 22 L33 40" stroke="#2d1b4e" strokeWidth="1"/>
      <line x1="28" y1="26" x2="38" y2="26" stroke="#f5d547" strokeWidth="0.8"/>
      <line x1="28" y1="30" x2="38" y2="30" stroke="#f5d547" strokeWidth="0.8"/>
      <line x1="28" y1="34" x2="38" y2="34" stroke="#f5d547" strokeWidth="0.8"/>
      {/* Sparkles */}
      <path d="M 48 18 L 49 19 L 48 20 L 47 19 Z" fill="#ffc000"/>
    </svg>
  )
}

export function CardsIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Panda card */}
      <rect x="4" y="12" width="18" height="20" rx="2" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Chinese character on card */}
      <text x="13" y="26" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#2d1b4e" fontFamily="Arial">学</text>
      <text x="13" y="38" fontSize="8" textAnchor="middle" fill="#b19cd9" fontFamily="Arial">Lesson</text>
      {/* Panda peeking */}
      <circle cx="10" cy="24" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="7" cy="21" r="2" fill="#2d1b4e"/>
      <circle cx="13" cy="21" r="2" fill="#2d1b4e"/>
      <circle cx="7.5" cy="20" r="0.8" fill="white"/>
      <circle cx="12.5" cy="20" r="0.8" fill="white"/>
      <circle cx="10" cy="24" r="1" fill="#2d1b4e"/>
      {/* Bamboo stick */}
      <g transform="translate(42, 18)">
        <rect x="0" y="0" width="2" height="14" fill="#52c41a"/>
        <path d="M-1.5 4 L3.5 4 M-1.5 9 L3.5 9" stroke="#2d1b4e" strokeWidth="0.3"/>
      </g>
    </svg>
  )
}

export function MicIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Panda head */}
      <circle cx="22" cy="28" r="9" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="18" cy="24" r="3" fill="#2d1b4e"/>
      <circle cx="26" cy="24" r="3" fill="#2d1b4e"/>
      <circle cx="18.5" cy="23" r="1" fill="white"/>
      <circle cx="25.5" cy="23" r="1" fill="white"/>
      <circle cx="22" cy="28" r="1" fill="#2d1b4e"/>
      <path d="M20 30 Q22 32 24 30" stroke="#2d1b4e" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Microphone */}
      <rect x="10" y="18" width="4" height="8" rx="2" fill="#8b4dff" stroke="#2d1b4e" strokeWidth="1"/>
      <path d="M12 26 L12 32" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="12" cy="33" r="2" fill="#2d1b4e"/>
      {/* Sound waves */}
      <path d="M 30 24 Q 34 24 34 28" fill="none" stroke="#52c41a" strokeWidth="1"/>
      <path d="M 32 22 Q 37 22 37 28" fill="none" stroke="#52c41a" strokeWidth="1"/>
    </svg>
  )
}

export function PencilIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Panda */}
      <circle cx="18" cy="32" r="8" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="15" cy="29" r="2.5" fill="#2d1b4e"/>
      <circle cx="21" cy="29" r="2.5" fill="#2d1b4e"/>
      <circle cx="15.5" cy="28" r="0.7" fill="white"/>
      <circle cx="20.5" cy="28" r="0.7" fill="white"/>
      <circle cx="18" cy="32" r="0.8" fill="#2d1b4e"/>
      <path d="M16.5 33.5 Q18 35 19.5 33.5" stroke="#2d1b4e" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Brush/Pencil */}
      <g transform="translate(22, 26)">
        <rect x="0" y="0" width="2" height="10" fill="#8b6f47" stroke="#2d1b4e" strokeWidth="0.8"/>
        <rect x="-2" y="10" width="6" height="2" fill="#f5d547" stroke="#2d1b4e" strokeWidth="0.8"/>
        <path d="M -2 12 L 4 12 L 2 16 L 0 16 Z" fill="#2d1b4e" opacity="0.6"/>
      </g>
      {/* Paper/Canvas */}
      <rect x="6" y="20" width="10" height="12" rx="1" fill="#fff9e6" stroke="#2d1b4e" strokeWidth="1"/>
      <text x="11" y="28" fontSize="5" textAnchor="middle" fill="#f5d547" fontWeight="bold">汉字</text>
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Checkmark with celebration */}
      <circle cx="32" cy="32" r="16" fill="#52c41a" stroke="#2d1b4e" strokeWidth="2"/>
      <path d="M 22 32 L 28 38 L 40 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Panda celebrating */}
      <circle cx="12" cy="18" r="5" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="10" cy="16" r="1.5" fill="#2d1b4e"/>
      <circle cx="14" cy="16" r="1.5" fill="#2d1b4e"/>
      <circle cx="12" cy="19" r="0.5" fill="#2d1b4e"/>
      <path d="M10.5 20 Q12 21 13.5 20" stroke="#2d1b4e" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
      {/* Sparkles */}
      <path d="M 48 20 L 49 21 L 48 22 L 47 21 Z" fill="#ffc000"/>
      <path d="M 10 42 L 11 43 L 10 44 L 9 43 Z" fill="#ffc000"/>
    </svg>
  )
}

export function BellIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Bell shape */}
      <path d="M 12 10 Q 10 10 10 12 Q 10 18 12 20 L 20 20 Q 22 18 22 12 Q 22 10 20 10 Z" fill="#f5d547" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Bell clapper */}
      <circle cx="16" cy="21" r="2" fill="#8b6f47" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Panda ringing bell */}
      <circle cx="28" cy="14" r="5" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="26" cy="12" r="1.5" fill="#2d1b4e"/>
      <circle cx="30" cy="12" r="1.5" fill="#2d1b4e"/>
      <circle cx="28" cy="15" r="0.5" fill="#2d1b4e"/>
      {/* Motion lines */}
      <line x1="22" y1="8" x2="26" y2="6" stroke="#b19cd9" strokeWidth="1" strokeLinecap="round"/>
      <line x1="22" y1="12" x2="25" y2="10" stroke="#b19cd9" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

export function FireIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Fire shape */}
      <path d="M 24 12 Q 20 18 20 24 Q 20 32 26 36 Q 32 32 32 24 Q 32 18 28 12 Z" fill="#ff6b6b" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Flame middle */}
      <path d="M 24 14 Q 22 18 22 22 Q 22 28 24 32 Q 26 28 26 22 Q 26 18 24 14 Z" fill="#ffc000" stroke="none"/>
      {/* Panda with energy */}
      <circle cx="38" cy="22" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="36" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="40" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="38" cy="23" r="0.7" fill="#2d1b4e"/>
      <path d="M36.5 24.5 Q38 26 39.5 24.5" stroke="#2d1b4e" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Energy sparkles */}
      <path d="M 44 16 L 45 17 L 44 18 L 43 17 Z" fill="#ffc000"/>
      <path d="M 48 24 L 49 25 L 48 26 L 47 25 Z" fill="#ffc000"/>
    </svg>
  )
}

export function VolumeIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Speaker cone */}
      <path d="M 8 14 L 8 22 L 14 24 L 14 12 Z" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Speaker back */}
      <rect x="6" y="14" width="4" height="8" rx="1" fill="#8b4dff" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Sound waves */}
      <path d="M 18 18 Q 22 18 22 22" fill="none" stroke="#52c41a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M 20 16 Q 26 16 26 22" fill="none" stroke="#52c41a" strokeWidth="2" strokeLinecap="round"/>
      {/* Panda listening */}
      <circle cx="38" cy="20" r="5" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="36" cy="18" r="1.5" fill="#2d1b4e"/>
      <circle cx="40" cy="18" r="1.5" fill="#2d1b4e"/>
      <circle cx="38" cy="21" r="0.5" fill="#2d1b4e"/>
    </svg>
  )
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Arrow pointing left with panda */}
      <path d="M 8 32 L 20 32" stroke="#2d1b4e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 10 28 L 8 32 L 10 36" stroke="#2d1b4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Panda */}
      <circle cx="38" cy="32" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="36" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="40" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="38" cy="33" r="0.6" fill="#2d1b4e"/>
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Arrow pointing right with panda */}
      <path d="M 44 32 L 56 32" stroke="#2d1b4e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 54 28 L 56 32 L 54 36" stroke="#2d1b4e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Panda */}
      <circle cx="26" cy="32" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="24" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="28" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="26" cy="33" r="0.6" fill="#2d1b4e"/>
    </svg>
  )
}

export function ZapIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Lightning bolt */}
      <path d="M 28 8 L 22 20 L 28 20 L 20 38 L 32 24 L 26 24 Z" fill="#ffc000" stroke="#2d1b4e" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Panda with power */}
      <circle cx="44" cy="24" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="42" cy="22" r="1.8" fill="#2d1b4e"/>
      <circle cx="46" cy="22" r="1.8" fill="#2d1b4e"/>
      <circle cx="44" cy="25" r="0.7" fill="#2d1b4e"/>
      <path d="M42 26.5 Q44 28 46 26.5" stroke="#2d1b4e" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Power aura */}
      <circle cx="44" cy="24" r="9" fill="none" stroke="#ffc000" strokeWidth="1"/>
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Left panda */}
      <circle cx="14" cy="28" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="12" cy="26" r="1.8" fill="#2d1b4e"/>
      <circle cx="16" cy="26" r="1.8" fill="#2d1b4e"/>
      <circle cx="12.5" cy="25.5" r="0.5" fill="white"/>
      <circle cx="15.5" cy="25.5" r="0.5" fill="white"/>
      <circle cx="14" cy="28" r="0.6" fill="#2d1b4e"/>
      {/* Right panda */}
      <circle cx="36" cy="28" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="34" cy="26" r="1.8" fill="#2d1b4e"/>
      <circle cx="38" cy="26" r="1.8" fill="#2d1b4e"/>
      <circle cx="34.5" cy="25.5" r="0.5" fill="white"/>
      <circle cx="37.5" cy="25.5" r="0.5" fill="white"/>
      <circle cx="36" cy="28" r="0.6" fill="#2d1b4e"/>
      {/* Speech bubbles */}
      <rect x="8" y="16" width="10" height="6" rx="1.5" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="0.8"/>
      <polygon points="10,22 8,24 12,22" fill="#b19cd9"/>
      <rect x="26" y="20" width="10" height="6" rx="1.5" fill="#52c41a" stroke="#2d1b4e" strokeWidth="0.8"/>
      <polygon points="28,26 26,28 30,26" fill="#52c41a"/>
      {/* Sparkles */}
      <path d="M 44 20 L 45 21 L 44 22 L 43 21 Z" fill="#ffc000"/>
      <path d="M 8 14 L 9 15 L 8 16 L 7 15 Z" fill="#ffc000"/>
    </svg>
  )
}

export function TopicIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Topic tag/label shape */}
      <path d="M 8 8 L 24 8 L 28 16 L 24 24 L 8 24 Q 4 20 4 16 Q 4 12 8 8 Z" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Theme icon - Chinese temple/building */}
      <rect x="10" y="14" width="10" height="8" fill="#e6c5ff" stroke="#2d1b4e" strokeWidth="0.8"/>
      <polygon points="10,14 15,10 20,14" fill="#f5d547" stroke="#2d1b4e" strokeWidth="0.8"/>
      <circle cx="12" cy="16" r="0.8" fill="#2d1b4e"/>
      <circle cx="18" cy="16" r="0.8" fill="#2d1b4e"/>
      {/* Panda sticker */}
      <circle cx="26" cy="10" r="4" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="24" cy="9" r="1.2" fill="#2d1b4e"/>
      <circle cx="28" cy="9" r="1.2" fill="#2d1b4e"/>
      <circle cx="26" cy="11" r="0.5" fill="#2d1b4e"/>
    </svg>
  )
}

export function StoryIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Open book pages */}
      <path d="M8 10 Q8 8 12 8 L12 36 Q8 36 8 34 Z" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="1.5"/>
      <path d="M52 10 Q52 8 48 8 L48 36 Q52 36 52 34 Z" fill="#e6c5ff" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Text on pages */}
      <line x1="12" y1="14" x2="30" y2="14" stroke="#2d1b4e" strokeWidth="0.8"/>
      <line x1="12" y1="18" x2="35" y2="18" stroke="#2d1b4e" strokeWidth="0.8"/>
      <line x1="12" y1="22" x2="32" y2="22" stroke="#2d1b4e" strokeWidth="0.8"/>
      <line x1="32" y1="26" x2="48" y2="26" stroke="#2d1b4e" strokeWidth="0.8"/>
      <line x1="30" y1="30" x2="48" y2="30" stroke="#2d1b4e" strokeWidth="0.8"/>
      {/* Panda on the book */}
      <circle cx="30" cy="16" r="5" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="27" cy="14" r="1.5" fill="#2d1b4e"/>
      <circle cx="33" cy="14" r="1.5" fill="#2d1b4e"/>
      <circle cx="30" cy="17" r="0.8" fill="#2d1b4e"/>
    </svg>
  )
}

export function ShuffleIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Shuffle arrows */}
      <line x1="8" y1="10" x2="28" y2="10" stroke="#2d1b4e" strokeWidth="2"/>
      <path d="M 26 8 L 28 10 L 26 12" fill="none" stroke="#2d1b4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="36" y1="24" x2="16" y2="24" stroke="#2d1b4e" strokeWidth="2"/>
      <path d="M 18 22 L 16 24 L 18 26" fill="none" stroke="#2d1b4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Panda jumping */}
      <circle cx="44" cy="18" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="42" cy="16" r="1.8" fill="#2d1b4e"/>
      <circle cx="46" cy="16" r="1.8" fill="#2d1b4e"/>
      <path d="M 44 20 Q 46 22 48 20" stroke="#2d1b4e" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Motion line */}
      <line x1="50" y1="14" x2="54" y2="16" stroke="#52c41a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function SettingsIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Settings gear with panda theme */}
      <circle cx="32" cy="32" r="12" fill="none" stroke="#2d1b4e" strokeWidth="2"/>
      {/* Gear teeth */}
      <rect x="30" y="18" width="4" height="3" fill="#2d1b4e"/>
      <rect x="30" y="43" width="4" height="3" fill="#2d1b4e"/>
      <rect x="18" y="30" width="3" height="4" fill="#2d1b4e"/>
      <rect x="43" y="30" width="3" height="4" fill="#2d1b4e"/>
      {/* Center circle with panda */}
      <circle cx="32" cy="32" r="8" fill="white" stroke="#2d1b4e" strokeWidth="1.5"/>
      <circle cx="29" cy="30" r="2" fill="#2d1b4e"/>
      <circle cx="35" cy="30" r="2" fill="#2d1b4e"/>
      <circle cx="29.5" cy="29" r="0.6" fill="white"/>
      <circle cx="34.5" cy="29" r="0.6" fill="white"/>
      <circle cx="32" cy="33" r="0.6" fill="#2d1b4e"/>
      <path d="M30 34 Q32 35 34 34" stroke="#2d1b4e" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function EarIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Large ear shape */}
      <path d="M 20 12 Q 16 12 14 16 Q 12 20 16 28 Q 20 32 24 28 Q 28 20 26 16 Q 24 12 20 12 Z" fill="#e6c5ff" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Inner ear */}
      <path d="M 20 16 Q 18 18 18 22 Q 18 26 20 26 Q 22 26 22 22 Q 22 18 20 16 Z" fill="#b19cd9" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Panda head listening */}
      <circle cx="38" cy="22" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="36" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="40" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="38" cy="23" r="0.6" fill="#2d1b4e"/>
      {/* Motion lines showing listening */}
      <path d="M 30 14 Q 32 14 32 16" fill="none" stroke="#52c41a" strokeWidth="1" strokeLinecap="round"/>
      <path d="M 30 26 Q 32 26 32 24" fill="none" stroke="#52c41a" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

export function GrammarIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Grammar book/text */}
      <rect x="8" y="10" width="16" height="20" rx="2" fill="#fff9e6" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Text lines representing grammar rules */}
      <line x1="12" y1="14" x2="20" y2="14" stroke="#2d1b4e" strokeWidth="1"/>
      <line x1="12" y1="18" x2="22" y2="18" stroke="#2d1b4e" strokeWidth="1"/>
      <line x1="12" y1="22" x2="20" y2="22" stroke="#2d1b4e" strokeWidth="1"/>
      <line x1="12" y1="26" x2="22" y2="26" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Panda pointing at grammar */}
      <circle cx="30" cy="22" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="28" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="32" cy="20" r="1.8" fill="#2d1b4e"/>
      <circle cx="30" cy="24" r="0.7" fill="#2d1b4e"/>
      {/* Pointing hand */}
      <path d="M 35 22 L 38 22 L 38 20 L 40 20 L 38 24 L 38 22" fill="#8b4dff"/>
    </svg>
  )
}

export function TrophyIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Trophy cup */}
      <path d="M 12 8 L 10 10 Q 8 12 10 14 L 12 16 L 14 16 L 16 14 Q 18 12 16 10 L 14 8 Z" fill="#f5d547" stroke="#2d1b4e" strokeWidth="1.5"/>
      <rect x="10" y="14" width="8" height="2" fill="#2d1b4e"/>
      <rect x="11" y="16" width="6" height="4" rx="1" fill="#8b6f47" stroke="#2d1b4e" strokeWidth="1"/>
      {/* Trophy handles */}
      <path d="M 10 10 Q 6 10 6 14" fill="none" stroke="#f5d547" strokeWidth="2"/>
      <path d="M 18 10 Q 22 10 22 14" fill="none" stroke="#f5d547" strokeWidth="2"/>
      {/* Panda on trophy */}
      <circle cx="24" cy="20" r="5" fill="white" stroke="#2d1b4e" strokeWidth="1"/>
      <circle cx="22" cy="18" r="1.5" fill="#2d1b4e"/>
      <circle cx="26" cy="18" r="1.5" fill="#2d1b4e"/>
      <circle cx="24" cy="21" r="0.6" fill="#2d1b4e"/>
      <path d="M22.5 22 Q24 23 25.5 22" stroke="#2d1b4e" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
      {/* Sparkles */}
      <path d="M 6 6 L 7 7 L 6 8 L 5 7 Z" fill="#ffc000"/>
      <path d="M 28 8 L 29 9 L 28 10 L 27 9 Z" fill="#ffc000"/>
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base(props)}>
      {/* Shield shape */}
      <path d="M 32 6 L 16 10 L 16 18 Q 16 28 32 34 Q 48 28 48 18 L 48 10 Z" fill="#52c41a" stroke="#2d1b4e" strokeWidth="1.5"/>
      {/* Checkmark on shield */}
      <path d="M 28 24 L 30 26 L 36 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Panda behind shield */}
      <circle cx="44" cy="32" r="6" fill="white" stroke="#2d1b4e" strokeWidth="1.2"/>
      <circle cx="42" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="46" cy="30" r="1.8" fill="#2d1b4e"/>
      <circle cx="44" cy="33" r="0.6" fill="#2d1b4e"/>
    </svg>
  )
}
