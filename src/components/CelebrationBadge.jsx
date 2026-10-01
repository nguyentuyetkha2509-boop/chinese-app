import celebratePanda from '../assets/panda/celebrate_panda.png'

// size tinh bang px; mac dinh dung cho the hoan thanh, ban nho cho chat hep
export default function CelebrationBadge({ size = 96, className = 'mx-auto mb-3' }) {
  return (
    <img
      src={celebratePanda}
      alt="Gấu trúc ăn mừng"
      width={size}
      height={size}
      className={`${className} rounded-full object-cover shadow-md`}
    />
  )
}
