import homeIconImg from '../assets/icons-gemini/home.png'
import bookIconImg from '../assets/icons-gemini/book.png'
import cardsIconImg from '../assets/icons-gemini/cards.png'
import micIconImg from '../assets/icons-gemini/mic.png'
import pencilIconImg from '../assets/icons-gemini/pencil.png'
import checkIconImg from '../assets/icons-gemini/check.png'
import bellIconImg from '../assets/icons-gemini/bell.png'
import grammarIconImg from '../assets/icons-gemini/grammar.png'
import fireIconImg from '../assets/icons-gemini/fire.png'
import volumeIconImg from '../assets/icons-gemini/volume.png'

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

export function HomeIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={homeIconImg}
      width={width}
      height={height}
      alt="Trang chủ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function BookIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={bookIconImg}
      width={width}
      height={height}
      alt="Bài học"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function CardsIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={cardsIconImg}
      width={width}
      height={height}
      alt="Ôn tập"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function MicIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={micIconImg}
      width={width}
      height={height}
      alt="Phát âm"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function PencilIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={pencilIconImg}
      width={width}
      height={height}
      alt="Viết chữ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function CheckIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={checkIconImg}
      width={width}
      height={height}
      alt="Hoàn thành"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function BellIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={bellIconImg}
      width={width}
      height={height}
      alt="Thông báo"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function FireIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={fireIconImg}
      width={width}
      height={height}
      alt="Năng lượng"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function VolumeIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={volumeIconImg}
      width={width}
      height={height}
      alt="Âm lượng"
      style={{ display: 'inline-block' }}
      {...props}
    />
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

export function GrammarIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={grammarIconImg}
      width={width}
      height={height}
      alt="Ngữ pháp"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
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
