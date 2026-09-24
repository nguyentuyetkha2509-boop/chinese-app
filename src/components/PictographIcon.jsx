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
  ),
  // Cac chu hoi y (会意字) duoi day khong "giong hinh" mot vat the nhu chu
  // tuong hinh, ma duoc GHEP tu 2-3 chu tuong hinh don gian de tao nghia moi
  // (dung nguyen tac tao chu that cua nguoi xua) - nen minh hoa bang cach ve
  // lai chinh cac thanh phan tuong hinh do dat canh nhau, dung nguon goc that.
  好: (p) => (
    <>
      <circle cx="28" cy="22" r="9" {...p} />
      <path d="M28 31 L14 48 M28 31 L42 48 M14 48 L28 62 M42 48 L28 62 M28 62 L12 88 M28 62 L44 88" {...p} />
      <circle cx="72" cy="28" r="13" {...p} />
      <path d="M72 41 L72 62 M72 48 L54 38 M72 48 L90 38 M72 62 L58 88 M72 62 L86 88" {...p} />
    </>
  ),
  看: (p) => (
    <>
      <path d="M50 30 L50 10 M50 16 L32 38 M42 12 L36 34 M58 12 L66 34 M50 18 L68 42" {...p} />
      <path d="M12 65 Q50 42 88 65 Q50 88 12 65Z" {...p} />
      <circle cx="50" cy="65" r="9" {...p} />
    </>
  ),
  坐: (p) => (
    <>
      <path d="M30 25 L14 45 M30 25 L46 45 M14 45 L30 62 M46 45 L30 62 M30 62 L18 78" {...p} />
      <path d="M70 25 L54 45 M70 25 L86 45 M54 45 L70 62 M86 45 L70 62 M70 62 L82 78" {...p} />
      <line x1="10" y1="80" x2="90" y2="80" {...p} />
    </>
  ),
  休: (p) => (
    <>
      <line x1="30" y1="12" x2="30" y2="88" {...p} />
      <path d="M30 28 L12 14 M30 28 L48 14 M30 60 L14 82 M30 60 L46 82" {...p} />
      <circle cx="70" cy="26" r="10" {...p} />
      <path d="M70 36 L70 60 M70 44 L54 55 M70 60 L58 88 M70 60 L82 88" {...p} />
    </>
  ),
  从: (p) => (
    <>
      <path d="M35 25 L18 48 M35 25 L52 48 M18 48 L35 65 M52 48 L35 65 M35 65 L20 88 M35 65 L50 88" {...p} />
      <path d="M65 32 L52 52 M65 32 L78 52 M52 52 L65 68 M78 52 L65 68 M65 68 L54 88 M65 68 L76 88" {...p} />
    </>
  ),
  明: (p) => (
    <>
      <circle cx="28" cy="50" r="24" {...p} />
      <line x1="28" y1="42" x2="28" y2="58" {...p} />
      <path d="M78 15 Q52 50 78 85 Q64 50 78 15Z" {...p} />
    </>
  ),
  林: (p) => (
    <>
      <line x1="25" y1="15" x2="25" y2="85" {...p} />
      <path d="M25 30 L10 15 M25 30 L40 15 M25 60 L12 80 M25 60 L38 80" {...p} />
      <line x1="72" y1="15" x2="72" y2="85" {...p} />
      <path d="M72 30 L57 15 M72 30 L87 15 M72 60 L59 80 M72 60 L85 80" {...p} />
    </>
  ),
  森: (p) => (
    <>
      <line x1="50" y1="8" x2="50" y2="45" {...p} />
      <path d="M50 20 L36 8 M50 20 L64 8 M50 40 L38 55 M50 40 L62 55" {...p} />
      <line x1="18" y1="50" x2="18" y2="92" {...p} />
      <path d="M18 62 L6 50 M18 62 L30 50 M18 85 L8 92 M18 85 L28 92" {...p} />
      <line x1="82" y1="50" x2="82" y2="92" {...p} />
      <path d="M82 62 L70 50 M82 62 L94 50 M82 85 L72 92 M82 85 L92 92" {...p} />
    </>
  ),
  众: (p) => (
    <>
      <path d="M50 10 L35 32 M50 10 L65 32 M35 32 L50 48 M65 32 L50 48 M50 48 L38 70 M50 48 L62 70" {...p} />
      <path d="M20 45 L8 65 M20 45 L32 65 M8 65 L20 80 M32 65 L20 80 M20 80 L10 95 M20 80 L28 95" {...p} />
      <path d="M80 45 L68 65 M80 45 L92 65 M68 65 L80 80 M92 65 L80 80 M80 80 L72 95 M80 80 L90 95" {...p} />
    </>
  ),
  男: (p) => (
    <>
      <rect x="20" y="10" width="60" height="42" {...p} />
      <line x1="50" y1="10" x2="50" y2="52" {...p} />
      <line x1="20" y1="31" x2="80" y2="31" {...p} />
      <path d="M35 62 Q35 85 55 88 Q78 90 82 68" {...p} />
      <line x1="55" y1="70" x2="42" y2="82" {...p} />
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
  角: 'Hình chiếc sừng cong nhọn của con vật.',
  好: 'Chữ hội ý: bên trái là 女 (người phụ nữ), bên phải là 子 (đứa trẻ) - người mẹ bên con là hình ảnh của điều "tốt lành".',
  看: 'Chữ hội ý: phía trên là 手 (bàn tay) che lên phía trên 目 (con mắt) - lấy tay che mắt để nhìn xa, nghĩa là "xem, nhìn".',
  坐: 'Chữ hội ý: hai người (从) ngồi trên mặt đất (土) - đúng nghĩa "ngồi".',
  休: 'Chữ hội ý: bên trái là 人 (người), bên phải là 木 (cây) - người dựa vào gốc cây để nghỉ ngơi.',
  从: 'Chữ hội ý: hai người xếp hàng nối đuôi nhau - người này theo sau người kia, nghĩa là "đi theo, từ".',
  明: 'Chữ hội ý: bên trái là 日 (mặt trời), bên phải là 月 (mặt trăng) - có cả mặt trời và mặt trăng thì "sáng".',
  林: 'Chữ hội ý: hai chữ 木 (cây) đứng cạnh nhau - hai cây gộp lại thành "rừng nhỏ".',
  森: 'Chữ hội ý: ba chữ 木 (cây) xếp chồng - nhiều cây tạo thành "rừng rậm".',
  众: 'Chữ hội ý: ba người đứng cùng nhau - nhiều người tạo thành "đám đông".',
  男: 'Chữ hội ý: phía trên là 田 (ruộng), phía dưới là 力 (sức lực, cái cày) - người dùng sức cày ruộng, chỉ "đàn ông" thời xưa.'
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
