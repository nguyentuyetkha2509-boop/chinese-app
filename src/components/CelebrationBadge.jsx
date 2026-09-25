import happyPanda from '../assets/panda/happy_panda.webp'

export default function CelebrationBadge() {
  return (
    <img
      src={happyPanda}
      alt="Gấu trúc ăn mừng"
      className="mx-auto mb-3 h-20 w-20 rounded-full object-cover shadow-md"
    />
  )
}
