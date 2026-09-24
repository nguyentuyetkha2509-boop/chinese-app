// Minh hoa "meo nho theo nghia" (khong can dung goc tich chu Han) - danh cho
// tu vung cu the, de ve thanh hinh (do vat, con vat, hanh dong...). Khac voi
// PictographIcon (chi ve dung goc tuong hinh) va radicals.js (goi y bang chu),
// component nay tu sang tac hinh anh don gian gan voi NGHIA cua ca tu.
const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const SHAPES = {
  杯子: (p) => (
    <>
      <path d="M25 28 L30 80 Q30 88 40 88 L60 88 Q70 88 70 80 L75 28 Z" {...p} />
      <path d="M75 40 Q92 40 92 55 Q92 70 75 68" {...p} />
    </>
  ),
  电脑: (p) => (
    <>
      <rect x="15" y="22" width="70" height="45" rx="4" {...p} />
      <path d="M10 80 L90 80 L82 90 L18 90 Z" {...p} />
    </>
  ),
  电视: (p) => (
    <>
      <rect x="15" y="18" width="70" height="50" rx="6" {...p} />
      <line x1="40" y1="82" x2="60" y2="82" {...p} />
      <line x1="50" y1="68" x2="50" y2="82" {...p} />
    </>
  ),
  电影: (p) => (
    <>
      <rect x="15" y="40" width="70" height="45" rx="4" {...p} />
      <path d="M12 40 L20 18 L88 18 L80 40 Z" {...p} />
      <line x1="32" y1="18" x2="24" y2="40" {...p} />
      <line x1="52" y1="18" x2="44" y2="40" {...p} />
      <line x1="72" y1="18" x2="64" y2="40" {...p} />
    </>
  ),
  飞机: (p) => (
    <path d="M50 12 L58 42 L90 55 L58 60 L63 85 L50 76 L37 85 L42 60 L10 55 L42 42 Z" {...p} />
  ),
  米饭: (p) => (
    <>
      <path d="M15 45 Q15 80 50 82 Q85 80 85 45 Z" {...p} />
      <line x1="10" y1="45" x2="90" y2="45" {...p} />
      <path d="M35 35 Q50 20 65 35" {...p} />
    </>
  ),
  苹果: (p) => (
    <>
      <path d="M50 35 Q20 30 20 60 Q20 85 50 85 Q80 85 80 60 Q80 30 50 35Z" {...p} />
      <path d="M50 35 Q50 20 45 12" {...p} />
      <path d="M50 20 Q60 15 65 22" {...p} />
    </>
  ),
  商店: (p) => (
    <>
      <path d="M10 40 L50 15 L90 40" {...p} />
      <rect x="18" y="40" width="64" height="45" {...p} />
      <rect x="42" y="60" width="16" height="25" {...p} />
    </>
  ),
  书: (p) => (
    <>
      <rect x="15" y="62" width="70" height="14" rx="2" {...p} />
      <rect x="20" y="47" width="60" height="14" rx="2" {...p} />
      <rect x="25" y="32" width="50" height="14" rx="2" {...p} />
    </>
  ),
  学校: (p) => (
    <>
      <path d="M15 45 L50 20 L85 45" {...p} />
      <rect x="20" y="45" width="60" height="40" {...p} />
      <rect x="42" y="60" width="16" height="25" {...p} />
      <line x1="50" y1="20" x2="50" y2="8" {...p} />
      <path d="M50 8 L68 14 L50 20 Z" {...p} />
    </>
  ),
  衣服: (p) => (
    <path d="M35 20 L20 35 L30 48 L35 40 L35 85 L65 85 L65 40 L70 48 L80 35 L65 20 Q50 30 35 20Z" {...p} />
  ),
  医院: (p) => (
    <>
      <rect x="15" y="35" width="70" height="50" {...p} />
      <path d="M15 35 L50 15 L85 35" {...p} />
      <line x1="50" y1="45" x2="50" y2="65" {...p} />
      <line x1="40" y1="55" x2="60" y2="55" {...p} />
    </>
  ),
  椅子: (p) => (
    <>
      <path d="M30 15 L30 55 L75 55" {...p} />
      <line x1="30" y1="55" x2="30" y2="85" {...p} />
      <line x1="75" y1="55" x2="75" y2="85" {...p} />
    </>
  ),
  桌子: (p) => (
    <>
      <rect x="12" y="28" width="76" height="10" rx="2" {...p} />
      <line x1="22" y1="38" x2="22" y2="85" {...p} />
      <line x1="78" y1="38" x2="78" y2="85" {...p} />
    </>
  ),
  老师: (p) => (
    <>
      <circle cx="50" cy="25" r="12" {...p} />
      <path d="M30 85 Q30 55 50 55 Q70 55 70 85" {...p} />
      <rect x="35" y="64" width="30" height="18" rx="2" {...p} />
    </>
  ),
  出租车: (p) => (
    <>
      <rect x="15" y="45" width="70" height="25" rx="6" {...p} />
      <path d="M25 45 L35 25 L65 25 L75 45" {...p} />
      <circle cx="30" cy="72" r="8" {...p} />
      <circle cx="70" cy="72" r="8" {...p} />
      <rect x="42" y="15" width="16" height="8" rx="2" {...p} />
    </>
  ),
  火车站: (p) => (
    <>
      <rect x="15" y="35" width="70" height="35" rx="8" {...p} />
      <circle cx="30" cy="80" r="8" {...p} />
      <circle cx="70" cy="80" r="8" {...p} />
      <rect x="25" y="42" width="20" height="12" rx="2" {...p} />
      <rect x="55" y="42" width="20" height="12" rx="2" {...p} />
    </>
  ),
  打电话: (p) => (
    <path d="M20 25 Q30 15 40 25 L33 40 Q45 55 60 65 L75 58 Q85 68 75 78 Q60 90 40 70 Q15 45 20 25Z" {...p} />
  ),
  水果: (p) => (
    <>
      <circle cx="35" cy="55" r="22" {...p} />
      <circle cx="70" cy="60" r="15" {...p} />
      <path d="M35 33 Q35 20 28 15" {...p} />
      <path d="M70 45 Q70 36 64 32" {...p} />
    </>
  ),
  下雨: (p) => (
    <>
      <path d="M30 45 Q18 45 18 33 Q18 22 30 22 Q33 10 49 10 Q65 10 68 24 Q83 24 83 38 Q83 45 71 45Z" {...p} />
      <line x1="32" y1="55" x2="27" y2="75" {...p} />
      <line x1="52" y1="55" x2="47" y2="75" {...p} />
      <line x1="72" y1="55" x2="67" y2="75" {...p} />
    </>
  ),
  星期: (p) => (
    <>
      <rect x="15" y="20" width="70" height="65" rx="6" {...p} />
      <line x1="15" y1="38" x2="85" y2="38" {...p} />
      <line x1="32" y1="12" x2="32" y2="28" {...p} />
      <line x1="68" y1="12" x2="68" y2="28" {...p} />
      <line x1="30" y1="55" x2="40" y2="55" {...p} />
      <line x1="50" y1="55" x2="60" y2="55" {...p} />
      <line x1="30" y1="70" x2="40" y2="70" {...p} />
      <line x1="50" y1="70" x2="60" y2="70" {...p} />
    </>
  ),
  咖啡: (p) => (
    <>
      <path d="M25 40 L30 80 Q30 88 40 88 L58 88 Q68 88 68 80 L73 40Z" {...p} />
      <path d="M73 48 Q90 48 90 60 Q90 72 73 70" {...p} />
      <path d="M40 28 Q40 20 35 15" {...p} />
      <path d="M55 28 Q55 20 60 15" {...p} />
    </>
  ),
  鸡蛋: (p) => <path d="M50 15 Q75 30 75 60 Q75 88 50 88 Q25 88 25 60 Q25 30 50 15Z" {...p} />,
  西瓜: (p) => (
    <>
      <path d="M15 70 A35 35 0 0 1 85 70" {...p} />
      <line x1="15" y1="70" x2="85" y2="70" {...p} />
      <path d="M25 65 A25 25 0 0 1 75 65" {...p} />
      <line x1="40" y1="55" x2="42" y2="58" {...p} />
      <line x1="55" y1="53" x2="57" y2="56" {...p} />
    </>
  ),
  报纸: (p) => (
    <>
      <rect x="15" y="20" width="70" height="60" rx="2" {...p} />
      <line x1="25" y1="35" x2="75" y2="35" {...p} />
      <line x1="25" y1="48" x2="75" y2="48" {...p} />
      <line x1="25" y1="58" x2="60" y2="58" {...p} />
      <line x1="25" y1="68" x2="70" y2="68" {...p} />
    </>
  ),
  手机: (p) => (
    <>
      <rect x="30" y="12" width="40" height="76" rx="8" {...p} />
      <line x1="45" y1="80" x2="55" y2="80" {...p} />
      <line x1="40" y1="24" x2="60" y2="24" {...p} />
    </>
  ),
  手表: (p) => (
    <>
      <circle cx="50" cy="50" r="25" {...p} />
      <line x1="50" y1="50" x2="50" y2="32" {...p} />
      <line x1="50" y1="50" x2="63" y2="55" {...p} />
      <path d="M40 25 L40 12 L60 12 L60 25" {...p} />
      <path d="M40 75 L40 88 L60 88 L60 75" {...p} />
    </>
  ),
  自行车: (p) => (
    <>
      <circle cx="25" cy="70" r="15" {...p} />
      <circle cx="75" cy="70" r="15" {...p} />
      <path d="M25 70 L45 40 L65 40 L75 70 M45 40 L35 70 M45 40 L60 25" {...p} />
      <line x1="55" y1="25" x2="68" y2="25" {...p} />
    </>
  ),
  公共汽车: (p) => (
    <>
      <rect x="10" y="30" width="80" height="40" rx="8" {...p} />
      <line x1="25" y1="30" x2="25" y2="70" {...p} />
      <line x1="45" y1="30" x2="45" y2="55" {...p} />
      <line x1="65" y1="30" x2="65" y2="55" {...p} />
      <circle cx="28" cy="78" r="8" {...p} />
      <circle cx="72" cy="78" r="8" {...p} />
    </>
  ),
  船: (p) => (
    <>
      <path d="M15 60 Q50 85 85 60 L75 75 Q50 90 25 75Z" {...p} />
      <line x1="50" y1="60" x2="50" y2="15" {...p} />
      <path d="M50 20 L78 45 L50 50Z" {...p} />
    </>
  ),
  眼睛: (p) => (
    <>
      <path d="M10 50 Q50 15 90 50 Q50 85 10 50Z" {...p} />
      <circle cx="50" cy="50" r="14" {...p} />
    </>
  ),
  牛奶: (p) => (
    <>
      <path d="M25 30 L25 85 L75 85 L75 30 L50 12 L25 30Z" {...p} />
      <line x1="25" y1="32" x2="75" y2="32" {...p} />
    </>
  ),
  生日: (p) => (
    <>
      <rect x="20" y="55" width="60" height="30" rx="4" {...p} />
      <line x1="20" y1="70" x2="80" y2="70" {...p} />
      <line x1="50" y1="55" x2="50" y2="35" {...p} />
      <path d="M50 35 Q45 25 50 18 Q55 25 50 35Z" {...p} />
    </>
  ),
  教室: (p) => (
    <>
      <rect x="15" y="15" width="70" height="35" rx="3" {...p} />
      <line x1="25" y1="30" x2="50" y2="30" {...p} />
      <rect x="20" y="65" width="25" height="15" {...p} />
      <rect x="55" y="65" width="25" height="15" {...p} />
    </>
  ),
  药: (p) => (
    <>
      <rect x="35" y="30" width="30" height="55" rx="6" {...p} />
      <rect x="42" y="15" width="16" height="18" rx="2" {...p} />
      <line x1="50" y1="45" x2="50" y2="65" {...p} />
      <line x1="40" y1="55" x2="60" y2="55" {...p} />
    </>
  ),
  公司: (p) => (
    <>
      <rect x="20" y="15" width="60" height="70" {...p} />
      <line x1="32" y1="28" x2="42" y2="28" {...p} />
      <line x1="58" y1="28" x2="68" y2="28" {...p} />
      <line x1="32" y1="45" x2="42" y2="45" {...p} />
      <line x1="58" y1="45" x2="68" y2="45" {...p} />
      <line x1="32" y1="62" x2="42" y2="62" {...p} />
      <line x1="58" y1="62" x2="68" y2="62" {...p} />
      <rect x="42" y="70" width="16" height="15" {...p} />
    </>
  ),
  跳舞: (p) => (
    <>
      <circle cx="50" cy="20" r="10" {...p} />
      <line x1="50" y1="30" x2="50" y2="55" {...p} />
      <path d="M50 35 L25 20 M50 35 L75 50" {...p} />
      <path d="M50 55 L30 85 M50 55 L70 80" {...p} />
    </>
  ),
  唱歌: (p) => (
    <>
      <circle cx="35" cy="70" r="10" {...p} />
      <line x1="45" y1="70" x2="45" y2="20" {...p} />
      <path d="M45 20 Q65 15 65 35" {...p} />
      <path d="M18 50 Q28 60 18 70" {...p} />
    </>
  ),
  打篮球: (p) => (
    <>
      <circle cx="50" cy="50" r="35" {...p} />
      <line x1="50" y1="15" x2="50" y2="85" {...p} />
      <line x1="15" y1="50" x2="85" y2="50" {...p} />
      <path d="M20 25 Q50 45 20 75" {...p} />
      <path d="M80 25 Q50 45 80 75" {...p} />
    </>
  ),
  游泳: (p) => (
    <>
      <path d="M8 70 Q22 60 36 70 Q50 80 64 70 Q78 60 92 70" {...p} />
      <circle cx="45" cy="35" r="10" {...p} />
      <path d="M45 45 L70 55 M45 45 L20 40" {...p} />
    </>
  ),
  跑步: (p) => (
    <>
      <circle cx="55" cy="18" r="10" {...p} />
      <path d="M55 28 L45 55" {...p} />
      <path d="M45 55 L25 70 M45 55 L65 45" {...p} />
      <path d="M52 33 L75 25 M48 38 L25 48" {...p} />
    </>
  )
}

export const MNEMONIC_HINTS = {
  杯子: 'Vẽ một cái cốc có quai cầm - đúng hình ảnh của "cốc, ly".',
  电脑: 'Vẽ một cái laptop có màn hình và bàn phím - "máy tính".',
  电视: 'Vẽ một cái ti vi màn hình có chân đế.',
  电影: 'Vẽ tấm bảng clapperboard (bảng gõ khi quay phim) - biểu tượng "phim".',
  飞机: 'Vẽ hình dáng một chiếc máy bay với hai cánh và đuôi.',
  米饭: 'Vẽ một bát cơm nóng hổi đang bốc khói.',
  苹果: 'Vẽ một quả táo có cuống và lá.',
  商店: 'Vẽ một căn nhà có mái và cửa ra vào - "cửa hàng".',
  书: 'Vẽ một chồng sách xếp lên nhau.',
  学校: 'Vẽ một toà nhà có cờ trên nóc - "trường học".',
  衣服: 'Vẽ hình dáng một chiếc áo phông.',
  医院: 'Vẽ một toà nhà có dấu cộng đỏ - biểu tượng "bệnh viện".',
  椅子: 'Vẽ một cái ghế nhìn nghiêng, có lưng tựa và chân.',
  桌子: 'Vẽ mặt bàn phẳng với hai chân bàn.',
  老师: 'Vẽ một người đang cầm sách đứng giảng bài.',
  出租车: 'Vẽ một chiếc xe hơi có đèn taxi trên nóc.',
  火车站: 'Vẽ một toa tàu có bánh xe và cửa sổ.',
  打电话: 'Vẽ hình dáng ống nghe điện thoại cong cong quen thuộc.',
  水果: 'Vẽ hai quả có cuống lá - "hoa quả" nói chung.',
  下雨: 'Vẽ đám mây với các giọt mưa rơi xuống.',
  星期: 'Vẽ một cuốn lịch treo tường có các ô ngày - "tuần".',
  咖啡: 'Vẽ một cốc cà phê có quai và khói bốc lên.',
  鸡蛋: 'Vẽ hình quả trứng - "trứng gà".',
  西瓜: 'Vẽ một lát dưa hấu hình bán nguyệt có hạt.',
  报纸: 'Vẽ một tờ báo có các dòng chữ tin tức.',
  手机: 'Vẽ hình chữ nhật bo góc như một chiếc điện thoại di động.',
  手表: 'Vẽ mặt đồng hồ tròn có kim và dây đeo hai bên.',
  自行车: 'Vẽ hai bánh xe nối với khung xe đạp.',
  公共汽车: 'Vẽ một chiếc xe thân dài có nhiều cửa sổ - "xe buýt".',
  船: 'Vẽ thân thuyền cong với cột buồm và cánh buồm.',
  眼睛: 'Vẽ hình con mắt với tròng mắt ở giữa.',
  牛奶: 'Vẽ hộp sữa có đỉnh gấp hình tam giác quen thuộc.',
  生日: 'Vẽ một chiếc bánh kem có nến đang cháy - "sinh nhật".',
  教室: 'Vẽ bảng đen phía trên và các bàn học phía dưới.',
  药: 'Vẽ một lọ thuốc có nắp và dấu cộng - "thuốc".',
  公司: 'Vẽ một toà nhà cao tầng có nhiều cửa sổ - "công ty".',
  跳舞: 'Vẽ dáng người đang dang tay múa - "nhảy múa".',
  唱歌: 'Vẽ một nốt nhạc bay ra cùng sóng âm thanh - "hát".',
  打篮球: 'Vẽ quả bóng rổ với các đường cong đặc trưng.',
  游泳: 'Vẽ dáng người đang sải tay bơi trên mặt nước gợn sóng.',
  跑步: 'Vẽ dáng người đang sải chân chạy về phía trước.'
}

export function hasMnemonic(word) {
  return Boolean(SHAPES[word])
}

export default function MnemonicIcon({ word, className, ...rest }) {
  const shape = SHAPES[word]
  if (!shape) return null
  return (
    <svg viewBox="0 0 100 100" className={className} {...rest}>
      {shape(STROKE)}
    </svg>
  )
}
