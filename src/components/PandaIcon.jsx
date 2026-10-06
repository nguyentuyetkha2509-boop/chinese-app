import graduatePanda from '../assets/panda/graduate_panda.webp'

// Thay cho emoji gau truc: dung hinh panda doi mu cu nhan hieu cua app
export default function PandaIcon({ size = 32, className = '' }) {
  return (
    <img
      src={graduatePanda}
      alt=""
      width={size}
      height={size}
      className={`inline-block align-middle ${className}`}
    />
  )
}

// Icon truyen la emoji chuoi; rieng gau truc doi sang hinh panda doi mu
export function StoryIcon({ icon, size = 32 }) {
  return icon === '🐼' ? <PandaIcon size={size} /> : <span style={{ fontSize: size }}>{icon}</span>
}
