// Minh hoa cho cac chu Han thuoc loai tuong hinh / chi su (象形字/指事字) -
// ve lai hinh dang goc de giup nho mat chu. Chi ap dung cho chu don, khong
// phai chu ghep (vi chu ghep khong con giu hinh dang truc quan ro rang).
const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const SHAPES = {
  一: (p) => <line x1="20" y1="50" x2="80" y2="50" {...p} />,
  二: (p) => (
    <>
      <line x1="20" y1="35" x2="80" y2="35" {...p} />
      <line x1="20" y1="65" x2="80" y2="65" {...p} />
    </>
  ),
  三: (p) => (
    <>
      <line x1="20" y1="25" x2="80" y2="25" {...p} />
      <line x1="20" y1="50" x2="80" y2="50" {...p} />
      <line x1="20" y1="75" x2="80" y2="75" {...p} />
    </>
  ),
  十: (p) => (
    <>
      <line x1="50" y1="15" x2="50" y2="85" {...p} />
      <line x1="15" y1="50" x2="85" y2="50" {...p} />
    </>
  ),
  人: (p) => (
    <>
      <line x1="50" y1="15" x2="18" y2="85" {...p} />
      <line x1="50" y1="15" x2="82" y2="85" {...p} />
    </>
  ),
  大: (p) => (
    <>
      <line x1="15" y1="32" x2="85" y2="32" {...p} />
      <line x1="50" y1="20" x2="25" y2="85" {...p} />
      <line x1="50" y1="20" x2="75" y2="85" {...p} />
    </>
  ),
  小: (p) => (
    <>
      <line x1="50" y1="20" x2="50" y2="65" {...p} />
      <path d="M32 45 Q22 60 30 80" {...p} />
      <path d="M68 45 Q78 60 70 80" {...p} />
    </>
  ),
  上: (p) => (
    <>
      <line x1="20" y1="68" x2="80" y2="68" {...p} />
      <line x1="58" y1="25" x2="58" y2="55" {...p} />
    </>
  ),
  下: (p) => (
    <>
      <line x1="20" y1="32" x2="80" y2="32" {...p} />
      <line x1="58" y1="45" x2="58" y2="75" {...p} />
    </>
  ),
  口: (p) => <rect x="24" y="24" width="52" height="52" rx="4" {...p} />,
  月: (p) => <path d="M62 15 Q32 50 62 85 Q45 50 62 15Z" {...p} />,
  水: (p) => (
    <>
      <line x1="50" y1="15" x2="50" y2="85" {...p} />
      <path d="M50 35 Q30 45 20 75" {...p} />
      <path d="M50 35 Q70 45 80 75" {...p} />
      <path d="M50 55 Q40 65 30 85" {...p} />
      <path d="M50 55 Q60 65 70 85" {...p} />
    </>
  ),
  火: (p) => (
    <>
      <path d="M50 15 Q60 35 50 50 Q40 35 50 15Z" {...p} />
      <path d="M50 50 Q25 65 30 85" {...p} />
      <path d="M50 50 Q75 65 70 85" {...p} />
      <line x1="30" y1="85" x2="70" y2="85" {...p} />
    </>
  ),
  门: (p) => (
    <>
      <path d="M22 30 V85 M78 30 V85" {...p} />
      <path d="M15 30 Q50 8 85 30" {...p} />
      <line x1="50" y1="30" x2="50" y2="85" {...p} />
    </>
  ),
  鱼: (p) => (
    <>
      <path d="M20 50 Q35 20 65 50 Q35 80 20 50Z" {...p} />
      <path d="M65 50 L85 35 M65 50 L85 65" {...p} />
      <line x1="35" y1="50" x2="45" y2="50" {...p} />
    </>
  ),
  鸟: (p) => (
    <>
      <path d="M25 60 Q20 30 45 25 Q75 25 80 45 Q80 70 55 75 Q35 78 25 60Z" {...p} />
      <path d="M80 45 L92 40" {...p} />
      <line x1="45" y1="75" x2="40" y2="90" {...p} />
      <line x1="58" y1="76" x2="60" y2="90" {...p} />
    </>
  ),
  马: (p) => (
    <>
      <path d="M20 45 Q35 15 55 25 Q80 30 82 50 Q82 65 65 68" {...p} />
      <path d="M25 45 L15 35 M25 52 L15 48" {...p} />
      <line x1="35" y1="65" x2="30" y2="88" {...p} />
      <line x1="50" y1="68" x2="47" y2="88" {...p} />
      <line x1="65" y1="68" x2="65" y2="88" {...p} />
    </>
  ),
  米: (p) => (
    <>
      <line x1="50" y1="15" x2="50" y2="85" {...p} />
      <line x1="15" y1="50" x2="85" y2="50" {...p} />
      <line x1="25" y1="25" x2="75" y2="75" {...p} />
      <line x1="75" y1="25" x2="25" y2="75" {...p} />
    </>
  ),
  云: (p) => (
    <path
      d="M30 65 Q15 65 15 50 Q15 38 28 38 Q30 22 48 22 Q65 22 68 36 Q85 36 85 52 Q85 65 70 65Z"
      {...p}
    />
  ),
  刀: (p) => (
    <>
      <path d="M25 30 Q70 20 82 42 Q70 55 30 60Z" {...p} />
      <line x1="30" y1="58" x2="22" y2="85" {...p} />
      <line x1="18" y1="80" x2="30" y2="80" {...p} />
    </>
  ),
  本: (p) => (
    <>
      <line x1="50" y1="15" x2="50" y2="85" {...p} />
      <line x1="20" y1="35" x2="80" y2="35" {...p} />
      <path d="M50 55 L25 85 M50 55 L75 85" {...p} />
      <line x1="35" y1="72" x2="65" y2="72" {...p} />
    </>
  ),
  角: (p) => (
    <>
      <path d="M60 15 Q30 30 25 55 Q22 75 40 85" {...p} />
      <line x1="30" y1="45" x2="55" y2="45" {...p} />
      <line x1="27" y1="60" x2="50" y2="63" {...p} />
    </>
  )
}

export const PICTOGRAPH_HINTS = {
  一: 'Một nét ngang - số 1, đơn giản như đếm que.',
  二: 'Hai nét ngang chồng nhau - số 2.',
  三: 'Ba nét ngang - số 3.',
  十: 'Hình chữ thập - số 10 (gốc là 1 vạch đứng, sau thêm vạch ngang).',
  人: 'Hình dáng một người đứng nghiêng, hai chân xoạc như đang bước đi.',
  大: 'Người dang rộng hai tay hai chân - biểu thị "to lớn".',
  小: 'Ba nét nhỏ tí xíu ở giữa - biểu thị vật nhỏ bé.',
  上: 'Một vạch làm mốc, vạch ngắn nằm phía trên - nghĩa là "ở trên".',
  下: 'Một vạch làm mốc, vạch ngắn nằm phía dưới - nghĩa là "ở dưới".',
  口: 'Hình vuông tượng trưng cái miệng đang há ra.',
  月: 'Hình lưỡi liềm - vầng trăng khuyết.',
  水: 'Dòng nước chảy với các nhánh nhỏ hai bên - như một dòng suối.',
  火: 'Ngọn lửa đang bốc cháy với các tia lửa toé ra hai bên.',
  门: 'Hai cánh cửa gỗ khép vào nhau, có mái che phía trên.',
  鱼: 'Đầu, thân và đuôi xoè của một con cá.',
  鸟: 'Hình con chim với đầu, cánh và đôi chân.',
  马: 'Con ngựa với bờm tung bay và bốn chân.',
  米: 'Các hạt gạo rơi rải quanh một dấu thập - hình ảnh hạt lúa/gạo.',
  云: 'Hình đám mây bồng bềnh trên trời.',
  刀: 'Hình lưỡi dao cong với phần cán cầm.',
  本: 'Chữ 木 (cây) có thêm một vạch ở gốc - chỉ vào rễ cây, nghĩa gốc là "gốc, rễ".',
  角: 'Hình chiếc sừng cong nhọn của con vật.'
}

export function hasPictograph(char) {
  return Boolean(SHAPES[char])
}

export default function PictographIcon({ char, className, ...rest }) {
  const shape = SHAPES[char]
  if (!shape) return null
  return (
    <svg viewBox="0 0 100 100" className={className} {...rest}>
      {shape(STROKE)}
    </svg>
  )
}
