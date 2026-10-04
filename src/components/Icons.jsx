import homeIconImg from '../assets/icons-gemini/home.png'
import bookIconImg from '../assets/icons-gemini/book.png'
import cardsIconImg from '../assets/icons-gemini/cards.png'
import micIconImg from '../assets/icons-gemini/mic.png'
import recordIconImg from '../assets/icons-gemini/mic-panda.png'
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
import aiChatIconImg from '../assets/icons-gemini/ai-chat.png'
import writingCheckIconImg from '../assets/icons-gemini/writing-check.png'
import robotIconImg from '../assets/icons-gemini/ai-robot.png'
import storyIconImg from '../assets/icons-gemini/story.png'
import topicIconImg from '../assets/icons-gemini/topic.png'
import earIconImg from '../assets/icons-gemini/ear.png'
import shieldIconImg from '../assets/icons-gemini/shield.png'
import speedIconImg from '../assets/icons-gemini/speed.png'

export function HomeIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={homeIconImg}
      width={width}
      height={height}
      alt="Trang chủ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function BookIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={bookIconImg}
      width={width}
      height={height}
      alt="Bài học"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function CardsIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={cardsIconImg}
      width={width}
      height={height}
      alt="Ôn tập"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

// Hinh dan gau cam mic (nen trong suot) cho cac nut ghi am/thu tieng. MicIcon o tren
// la o vuong bo goc dung lam icon dieu huong (tab Phat am, the o trang chu).
export function RecordIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={recordIconImg}
      width={width}
      height={height}
      alt=""
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function MicIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={micIconImg}
      width={width}
      height={height}
      alt="Phát âm"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function PencilIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={pencilIconImg}
      width={width}
      height={height}
      alt="Viết chữ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function CheckIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={checkIconImg}
      width={width}
      height={height}
      alt="Hoàn thành"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function BellIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={bellIconImg}
      width={width}
      height={height}
      alt="Thông báo"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function FireIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={fireIconImg}
      width={width}
      height={height}
      alt="Năng lượng"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function VolumeIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={volumeIconImg}
      width={width}
      height={height}
      alt="Âm lượng"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function ArrowLeftIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={arrowLeftIconImg}
      width={width}
      height={height}
      alt="Quay lại"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function ArrowRightIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={arrowRightIconImg}
      width={width}
      height={height}
      alt="Tiếp theo"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function ZapIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={zapIconImg}
      width={width}
      height={height}
      alt="Kiên trì"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

// Icon rieng cho Cham bai viet AI (gau viet chu + robot cham diem).
export function WritingCheckIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={writingCheckIconImg}
      width={width}
      height={height}
      alt="Chấm bài viết AI"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

// Icon rieng cho Tro chuyen AI (gau + robot); ChatIcon o duoi dung cho Hoi thoai.
export function AiChatIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={aiChatIconImg}
      width={width}
      height={height}
      alt="Trò chuyện AI"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

// Chu robot AI (hinh dan nen trong suot) thay cho emoji robot o cac cho noi ve tinh nang AI.
export function RobotIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={robotIconImg}
      width={width}
      height={height}
      alt=""
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function ChatIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={chatIconImg}
      width={width}
      height={height}
      alt="Hội thoại"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function TopicIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={topicIconImg}
      width={width}
      height={height}
      alt="Học theo chủ đề"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function StoryIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={storyIconImg}
      width={width}
      height={height}
      alt="Truyện dài"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function ShuffleIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={shuffleIconImg}
      width={width}
      height={height}
      alt="Sắp xếp câu"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function SettingsIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={settingsIconImg}
      width={width}
      height={height}
      alt="Cài đặt"
      style={{ display: 'inline-block' }}
      draggable={false}
      {...props}
    />
  )
}

export function EarIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={earIconImg}
      width={width}
      height={height}
      alt="Nghe"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function GrammarIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={grammarIconImg}
      width={width}
      height={height}
      alt="Ngữ pháp"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function TrophyIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={trophyIconImg}
      width={width}
      height={height}
      alt="Thành tích"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function ShieldIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={shieldIconImg}
      width={width}
      height={height}
      alt="Bảo vệ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

export function SpeedIcon({ width = 38, height = 38, ...props }) {
  return (
    <img
      src={speedIconImg}
      width={width}
      height={height}
      alt="Đua tốc độ"
      style={{ display: 'inline-block', borderRadius: '22%' }}
      draggable={false}
      {...props}
    />
  )
}

// Bo thu chua co anh icon rieng trong bo icon cua app, nen ve bang chinh chu bo:
// dat trong the mau dam thi chu trang noi len ro, lai dung tinh than tinh nang.
export function RadicalIcon({ width = 38, height = 38, ...props }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width,
        height,
        fontSize: width * 0.95,
        lineHeight: `${height}px`,
        textAlign: 'center'
      }}
      {...props}
    >
      氵
    </span>
  )
}
