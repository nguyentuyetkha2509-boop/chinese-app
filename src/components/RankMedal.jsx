import medal1 from '../assets/panda/medal_1.webp'
import medal2 from '../assets/panda/medal_2.webp'
import medal3 from '../assets/panda/medal_3.webp'

const MEDALS = [medal1, medal2, medal3]

// Hang 1-3 hien hinh panda cam cup/huy chuong, tu hang 4 tro di hien so thu tu
export default function RankMedal({ index, size = 36 }) {
  const src = MEDALS[index]
  if (!src) return <span>{index + 1}</span>
  return <img src={src} alt={`Hạng ${index + 1}`} height={size} style={{ height: size, width: 'auto' }} className="mx-auto" />
}
