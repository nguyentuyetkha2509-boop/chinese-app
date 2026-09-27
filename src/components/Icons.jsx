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
import shuffleIconImg from '../assets/icons-gemini/shuffle.png'
import arrowRightIconImg from '../assets/icons-gemini/arrow_right.png'
import arrowLeftIconImg from '../assets/icons-gemini/arrow_left.png'
import settingsIconImg from '../assets/icons-gemini/settings.png'
import trophyIconImg from '../assets/icons-gemini/trophy.png'
import zapIconImg from '../assets/icons-gemini/zap.png'
import chatIconImg from '../assets/icons-gemini/chat.png'
import storyIconImg from '../assets/icons-gemini/story.png'
import topicIconImg from '../assets/icons-gemini/topic.png'
import earIconImg from '../assets/icons-gemini/ear.png'
import shieldIconImg from '../assets/icons-gemini/shield.png'
import speedIconImg from '../assets/icons-gemini/speed.png'

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

export function ArrowLeftIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={arrowLeftIconImg}
      width={width}
      height={height}
      alt="Quay lại"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function ArrowRightIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={arrowRightIconImg}
      width={width}
      height={height}
      alt="Tiếp theo"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function ZapIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={zapIconImg}
      width={width}
      height={height}
      alt="Kiên trì"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function ChatIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={chatIconImg}
      width={width}
      height={height}
      alt="Hội thoại"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function TopicIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={topicIconImg}
      width={width}
      height={height}
      alt="Học theo chủ đề"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function StoryIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={storyIconImg}
      width={width}
      height={height}
      alt="Truyện dài"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function ShuffleIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={shuffleIconImg}
      width={width}
      height={height}
      alt="Sắp xếp câu"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function SettingsIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={settingsIconImg}
      width={width}
      height={height}
      alt="Cài đặt"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function EarIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={earIconImg}
      width={width}
      height={height}
      alt="Nghe"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
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

export function TrophyIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={trophyIconImg}
      width={width}
      height={height}
      alt="Thành tích"
      style={{ display: 'inline-block' }}
      {...props}
    />
  )
}

export function ShieldIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={shieldIconImg}
      width={width}
      height={height}
      alt="Bảo vệ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}

export function SpeedIcon({ width = 32, height = 32, ...props }) {
  return (
    <img
      src={speedIconImg}
      width={width}
      height={height}
      alt="Đua tốc độ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      {...props}
    />
  )
}
