// Import icon images
import homeIcon from '../assets/icons/home.png'
import bookIcon from '../assets/icons/book.png'
import cardsIcon from '../assets/icons/cards.png'
import micIcon from '../assets/icons/mic.png'
import pencilIcon from '../assets/icons/pencil.png'
import checkIcon from '../assets/icons/check.png'
import bellIcon from '../assets/icons/bell.png'
import fireIcon from '../assets/icons/fire.png'
import volumeIcon from '../assets/icons/volume.png'
import arrowLeftIcon from '../assets/icons/arrow_left.png'
import arrowRightIcon from '../assets/icons/arrow_right.png'
import zapIcon from '../assets/icons/zap.png'
import chatIcon from '../assets/icons/chat.png'
import storyIcon from '../assets/icons/story.png'
import shuffleIcon from '../assets/icons/shuffle.png'
import settingsIcon from '../assets/icons/settings.png'
import grammarIcon from '../assets/icons/grammar.png'
import trophyIcon from '../assets/icons/trophy.png'
import earIcon from '../assets/icons/ear.png'
import shieldIcon from '../assets/icons/shield.png'
import topicIcon from '../assets/icons/topic.png'
import profileIcon from '../assets/icons/profile.png'

const IconImage = ({ src, width = 32, height = 32, alt = '', ...props }) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
    style={{ display: 'inline-block', ...props.style }}
    {...props}
  />
)

export function HomeIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={homeIcon} width={width} height={height} alt="home" {...props} />
}

export function BookIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={bookIcon} width={width} height={height} alt="book" {...props} />
}

export function CardsIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={cardsIcon} width={width} height={height} alt="cards" {...props} />
}

export function MicIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={micIcon} width={width} height={height} alt="mic" {...props} />
}

export function PencilIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={pencilIcon} width={width} height={height} alt="pencil" {...props} />
}

export function CheckIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={checkIcon} width={width} height={height} alt="check" {...props} />
}

export function BellIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={bellIcon} width={width} height={height} alt="bell" {...props} />
}

export function FireIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={fireIcon} width={width} height={height} alt="fire" {...props} />
}

export function VolumeIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={volumeIcon} width={width} height={height} alt="volume" {...props} />
}

export function ArrowLeftIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={arrowLeftIcon} width={width} height={height} alt="arrow-left" {...props} />
}

export function ArrowRightIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={arrowRightIcon} width={width} height={height} alt="arrow-right" {...props} />
}

export function ZapIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={zapIcon} width={width} height={height} alt="zap" {...props} />
}

export function ChatIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={chatIcon} width={width} height={height} alt="chat" {...props} />
}

export function StoryIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={storyIcon} width={width} height={height} alt="story" {...props} />
}

export function ShuffleIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={shuffleIcon} width={width} height={height} alt="shuffle" {...props} />
}

export function SettingsIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={settingsIcon} width={width} height={height} alt="settings" {...props} />
}

export function GrammarIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={grammarIcon} width={width} height={height} alt="grammar" {...props} />
}

export function TrophyIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={trophyIcon} width={width} height={height} alt="trophy" {...props} />
}

export function EarIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={earIcon} width={width} height={height} alt="ear" {...props} />
}

export function ShieldIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={shieldIcon} width={width} height={height} alt="shield" {...props} />
}

export function TopicIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={topicIcon} width={width} height={height} alt="topic" {...props} />
}

export function ProfileIcon({ width = 32, height = 32, ...props }) {
  return <IconImage src={profileIcon} width={width} height={height} alt="profile" {...props} />
}

// Alias for compatibility
export const EarIconAlias = EarIcon
