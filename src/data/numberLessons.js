// Bai hoc "So va tien": doc so, tien te, dien tich, gia nha. KHONG nam trong HSK1-6
// nen khong anh huong bai hoc, flashcard hay so lieu tien do. id bat dau tu 910001
// (topicWords.js dung 900001...) de khong trung voi tu HSK hay tu chu de.
//
// Cach tinh dung cho nguoi lam bat dong san: 1 ty dong = 十亿 (10 x 100 trieu),
// 亿 la 100 trieu chu KHONG phai ty. Nhieu nguoi hoc nham cho nay nen bai 3 va 6
// co vi du ro rang.
//
// Phien am ghi theo cach doc thuc te cua 一 (yì/yí/yī) nhu quy uoc chung cua du an.
const RAW_LESSONS = [
  {
    key: 'so-0-10',
    icon: '🔢',
    title: 'Số từ 0 đến 10',
    desc: 'Nền tảng để đếm mọi thứ',
    words: [
      ['零', 'líng', 'số 0 (không)'],
      ['一', 'yī', 'số 1 (một)'],
      ['二', 'èr', 'số 2 (hai), dùng khi đếm số'],
      ['三', 'sān', 'số 3 (ba)'],
      ['四', 'sì', 'số 4 (bốn)'],
      ['五', 'wǔ', 'số 5 (năm)'],
      ['六', 'liù', 'số 6 (sáu)'],
      ['七', 'qī', 'số 7 (bảy)'],
      ['八', 'bā', 'số 8 (tám), người Hoa coi là con số may mắn'],
      ['九', 'jiǔ', 'số 9 (chín)'],
      ['十', 'shí', 'số 10 (mười)'],
      ['两', 'liǎng', 'hai, dùng trước lượng từ (两个人: hai người)']
    ]
  },
  {
    key: 'so-11-99',
    icon: '🔟',
    title: 'Số từ 11 đến 99',
    desc: 'Ghép chục và đơn vị',
    words: [
      ['十一', 'shíyī', '11 (mười một)'],
      ['十二', 'shíèr', '12 (mười hai)'],
      ['十五', 'shíwǔ', '15 (mười lăm)'],
      ['二十', 'èrshí', '20 (hai mươi)'],
      ['二十一', 'èrshíyī', '21 (hai mươi mốt)'],
      ['三十五', 'sānshíwǔ', '35 (ba mươi lăm)'],
      ['四十', 'sìshí', '40 (bốn mươi)'],
      ['五十六', 'wǔshíliù', '56 (năm mươi sáu)'],
      ['六十八', 'liùshíbā', '68 (sáu mươi tám)'],
      ['七十八', 'qīshíbā', '78 (bảy mươi tám)'],
      ['八十', 'bāshí', '80 (tám mươi)'],
      ['九十九', 'jiǔshíjiǔ', '99 (chín mươi chín)']
    ]
  },
  {
    key: 'tram-nghin-van',
    icon: '💯',
    title: 'Trăm, nghìn, vạn, trăm triệu',
    desc: 'Đơn vị lớn: 百 千 万 亿',
    words: [
      ['一百', 'yìbǎi', '100 (một trăm)'],
      ['一百零五', 'yìbǎilíngwǔ', '105 (một trăm linh năm), thêm 零 khi nhảy qua hàng chục'],
      ['一百一十', 'yìbǎiyīshí', '110 (một trăm mười)'],
      ['两百', 'liǎngbǎi', '200 (hai trăm)'],
      ['三百五十', 'sānbǎiwǔshí', '350 (ba trăm năm mươi)'],
      ['一千', 'yìqiān', '1.000 (một nghìn)'],
      ['两千', 'liǎngqiān', '2.000 (hai nghìn)'],
      ['一千零五十', 'yìqiānlíngwǔshí', '1.050 (một nghìn không trăm năm mươi)'],
      ['一万', 'yíwàn', '10.000 (một vạn = mười nghìn)'],
      ['十万', 'shíwàn', '100.000 (mười vạn = một trăm nghìn)'],
      ['一百万', 'yìbǎiwàn', '1.000.000 (một triệu)'],
      ['一千万', 'yìqiānwàn', '10.000.000 (mười triệu)'],
      ['一亿', 'yíyì', '100.000.000 (một trăm triệu)'],
      ['十亿', 'shíyì', '1.000.000.000 (một tỷ)']
    ]
  },
  {
    key: 'tien-te',
    icon: '💴',
    title: 'Tiền tệ & hỏi giá',
    desc: 'Nhân dân tệ, đồng, đô la',
    words: [
      ['钱', 'qián', 'tiền'],
      ['多少钱', 'duōshaoqián', 'bao nhiêu tiền?'],
      ['元', 'yuán', 'nguyên, đồng (văn viết)'],
      ['块', 'kuài', 'đồng, tệ (khẩu ngữ)'],
      ['角', 'jiǎo', 'hào (1/10 đồng, văn viết)'],
      ['毛', 'máo', 'hào (khẩu ngữ)'],
      ['分', 'fēn', 'xu (1/100 đồng)'],
      ['五块钱', 'wǔkuàiqián', '5 tệ'],
      ['一百块', 'yìbǎikuài', '100 tệ'],
      ['人民币', 'rénmínbì', 'Nhân dân tệ'],
      ['越南盾', 'Yuènándùn', 'đồng Việt Nam'],
      ['美元', 'měiyuán', 'đô la Mỹ'],
      ['便宜', 'piányi', 'rẻ'],
      ['贵', 'guì', 'đắt'],
      ['打折', 'dǎzhé', 'giảm giá']
    ]
  },
  {
    key: 'dien-tich-can-ho',
    icon: '🏠',
    title: 'Diện tích & căn hộ',
    desc: 'Mét vuông, số phòng, tầng',
    words: [
      ['面积', 'miànjī', 'diện tích'],
      ['平方米', 'píngfāngmǐ', 'mét vuông'],
      ['平米', 'píngmǐ', 'mét vuông (khẩu ngữ)'],
      ['八十平米', 'bāshípíngmǐ', '80 mét vuông'],
      ['一室一厅', 'yíshìyìtīng', 'một phòng ngủ một phòng khách'],
      ['两室一厅', 'liǎngshìyìtīng', 'hai phòng ngủ một phòng khách'],
      ['三室两厅', 'sānshìliǎngtīng', 'ba phòng ngủ hai phòng khách'],
      ['楼层', 'lóucéng', 'tầng lầu'],
      ['第五层', 'dìwǔcéng', 'tầng 5'],
      ['二十层', 'èrshícéng', 'tầng 20'],
      ['每平米', 'měipíngmǐ', 'mỗi mét vuông'],
      ['房间号', 'fángjiānhào', 'số phòng']
    ]
  },
  {
    key: 'gia-nha',
    icon: '🏦',
    title: 'Giá nhà & thanh toán',
    desc: 'Nói giá tỷ, trả trước, trả góp',
    words: [
      ['价格', 'jiàgé', 'giá cả'],
      ['总价', 'zǒngjià', 'tổng giá'],
      ['单价', 'dānjià', 'đơn giá (giá mỗi mét vuông)'],
      ['二十亿', 'èrshíyì', '2 tỷ'],
      ['三十五亿', 'sānshíwǔyì', '3,5 tỷ (35 x 100 triệu)'],
      ['首付', 'shǒufù', 'trả trước'],
      ['月供', 'yuègōng', 'tiền trả góp hàng tháng'],
      ['百分之三十', 'bǎifēnzhīsānshí', '30%'],
      ['租金', 'zūjīn', 'tiền thuê'],
      ['每月', 'měiyuè', 'mỗi tháng'],
      ['一年', 'yìnián', 'một năm'],
      ['可以便宜点吗', 'kěyǐpiányidiǎnma', 'giảm giá chút được không?']
    ]
  },
  {
    key: 'dien-thoai-ngay-gio',
    icon: '📞',
    title: 'Điện thoại, ngày, giờ',
    desc: 'Đọc số điện thoại, ngày tháng',
    words: [
      ['幺', 'yāo', 'số 1 khi đọc số điện thoại hay số phòng (tránh nhầm với 七)'],
      ['号码', 'hàomǎ', 'số, con số'],
      ['电话号码', 'diànhuàhàomǎ', 'số điện thoại'],
      ['幺零零幺', 'yāolínglíngyāo', 'phòng 1001'],
      ['一月', 'yīyuè', 'tháng 1'],
      ['十二月', 'shíèryuè', 'tháng 12'],
      ['一号', 'yīhào', 'ngày mùng 1'],
      ['三十一号', 'sānshíyīhào', 'ngày 31'],
      ['几点', 'jǐdiǎn', 'mấy giờ?'],
      ['两点', 'liǎngdiǎn', '2 giờ (dùng 两, không dùng 二)'],
      ['三点半', 'sāndiǎnbàn', '3 giờ rưỡi'],
      ['二〇二五年', 'èrlíngèrwǔnián', 'năm 2025, đọc từng chữ số']
    ]
  },
  {
    key: 'thu-tu-phan-tram',
    icon: '📊',
    title: 'Thứ tự, phần trăm, ước chừng',
    desc: 'Thứ nhất, một nửa, khoảng chừng',
    words: [
      ['第一', 'dìyī', 'thứ nhất'],
      ['第三', 'dìsān', 'thứ ba'],
      ['半', 'bàn', 'nửa'],
      ['一半', 'yíbàn', 'một nửa'],
      ['几', 'jǐ', 'mấy (hỏi số nhỏ)'],
      ['多少', 'duōshao', 'bao nhiêu'],
      ['左右', 'zuǒyòu', 'khoảng chừng'],
      ['大约', 'dàyuē', 'ước chừng, khoảng'],
      ['百分之五十', 'bǎifēnzhīwǔshí', '50%'],
      ['三分之一', 'sānfēnzhīyī', 'một phần ba'],
      ['倍', 'bèi', 'lần, gấp'],
      ['两倍', 'liǎngbèi', 'gấp đôi']
    ]
  }
]

// Cung mot chu Han o nhieu bai thi dung chung 1 id (nhu tu HSK dung chung giua cac chu de).
const idByHanzi = new Map()
function idFor(hanzi) {
  if (!idByHanzi.has(hanzi)) idByHanzi.set(hanzi, 910001 + idByHanzi.size)
  return idByHanzi.get(hanzi)
}

export const NUMBER_LESSONS = RAW_LESSONS.map((lesson) => ({
  ...lesson,
  words: lesson.words.map(([hanzi, pinyin, meaning]) => ({ id: idFor(hanzi), hanzi, pinyin, meaning }))
}))

export function getNumberLesson(key) {
  return NUMBER_LESSONS.find((l) => l.key === key)
}

export function getNumberLessonWords(key) {
  return getNumberLesson(key)?.words ?? []
}

// Dap an nhieu chi lay trong cac tu so/tien de cau hoi sat chu de (khong tron voi
// tu HSK), va khong trung nghia nhau nho loc theo meaning trong quiz.js.
const seenPoolIds = new Set()
export const NUMBER_QUIZ_POOL = NUMBER_LESSONS.flatMap((l) => l.words).filter((w) => {
  if (seenPoolIds.has(w.id)) return false
  seenPoolIds.add(w.id)
  return true
})
