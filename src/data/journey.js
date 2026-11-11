// Ban do hanh trinh "Mot ngay lam moi gioi o Thuong Hai".
// Moi ga chi tro toi noi dung DA CO (chu de, bai so va tien, hoi thoai) chu khong
// soan noi dung moi, de tien do hoc cu van duoc tinh va khong phai sua du lieu goc.
// Nhiem vu bat buoc (tasks) quyet dinh ga da xong hay chua; nhap vai AI la phan
// thuong them vi can API key DeepSeek, khong bat buoc de nguoi chua co key khong bi ket.
//
// type: 'topic' -> /chu-de/:ref, 'number' -> /so-va-tien/:ref (ca hai luu o completedTopics),
// 'dialogue' -> /hoi-thoai/:ref (luu o completedDialogues).

export const JOURNEY_TITLE = 'Một ngày làm môi giới ở Thượng Hải'

export const JOURNEY_STATIONS = [
  {
    key: 'van-phong',
    icon: '🏢',
    time: '8:00',
    name: 'Văn phòng môi giới',
    hanziName: '房产中介公司',
    story:
      'Buổi sáng đầu tiên ở văn phòng. Trưởng phòng Trương đưa bạn danh sách căn hộ mới. Muốn giới thiệu cho khách, trước hết phải đọc được diện tích, số phòng và tầng.',
    phrase: { hanzi: '早上好！今天有新房源吗？', pinyin: 'Zǎoshang hǎo! Jīntiān yǒu xīn fángyuán ma?', meaning: 'Chào buổi sáng! Hôm nay có nguồn nhà mới không?' },
    tasks: [
      { type: 'number', ref: 'dien-tich-can-ho', label: 'Số & tiền: Diện tích, căn hộ' },
      { type: 'topic', ref: 'realestate-property', label: 'Từ vựng: Loại hình & thông số nhà' }
    ],
    sticker: { icon: '📋', label: '房源 · Nguồn nhà' },
    roleplay: {
      role: 'Bạn đóng vai 张经理 (trưởng phòng Trương) ở một công ty môi giới bất động sản tại Thượng Hải. Người dùng là nhân viên môi giới mới, hôm nay là buổi sáng đầu tiên. Hãy giao việc: giới thiệu vài căn hộ mới (diện tích, số phòng, tầng, hướng), hỏi người dùng muốn nhận căn nào để tìm khách.',
      mission: 'Chào trưởng phòng, hỏi về căn hộ mới và nhận một căn để đi tìm khách.',
      opening: { hanzi: '早上好！今天我们有三套新房源，你想先听哪一套？', pinyin: 'Zǎoshang hǎo! Jīntiān wǒmen yǒu sān tào xīn fángyuán, nǐ xiǎng xiān tīng nǎ yí tào?', meaning: 'Chào buổi sáng! Hôm nay chúng ta có ba căn mới, em muốn nghe căn nào trước?' }
    }
  },
  {
    key: 'quan-ca-phe',
    icon: '☕',
    time: '10:00',
    name: 'Quán cà phê gặp khách',
    hanziName: '咖啡馆',
    story:
      'Bạn gọi điện hẹn anh Vương, một khách đang tìm mua căn hộ cho gia đình. Ngồi ở quán cà phê, bạn đưa danh thiếp, hỏi nhu cầu và ngân sách của anh ấy.',
    phrase: { hanzi: '您好，这是我的名片。', pinyin: 'Nín hǎo, zhè shì wǒ de míngpiàn.', meaning: 'Chào anh, đây là danh thiếp của tôi.' },
    tasks: [
      { type: 'dialogue', ref: 'phone', label: 'Hội thoại: Gọi điện thoại' },
      { type: 'topic', ref: 'realestate-client', label: 'Từ vựng: Đàm phán & chăm sóc khách' }
    ],
    sticker: { icon: '📇', label: '名片 · Danh thiếp' },
    roleplay: {
      role: 'Bạn đóng vai 王先生 (anh Vương), khách hàng lần đầu gặp nhân viên môi giới (người dùng) ở quán cà phê tại Thượng Hải. Anh muốn mua căn hộ 2-3 phòng ngủ gần trường học cho con, ngân sách khoảng 400 vạn tệ, còn đang phân vân. Chỉ tiết lộ nhu cầu khi người dùng hỏi.',
      mission: 'Giới thiệu bản thân, hỏi khách cần căn thế nào và ngân sách bao nhiêu.',
      opening: { hanzi: '你好，你就是小李吧？我想买房，但是还不太清楚。', pinyin: 'Nǐ hǎo, nǐ jiù shì Xiǎo Lǐ ba? Wǒ xiǎng mǎi fáng, dànshì hái bú tài qīngchu.', meaning: 'Chào em, em là Tiểu Lý phải không? Anh muốn mua nhà nhưng vẫn chưa rõ lắm.' }
    }
  },
  {
    key: 'can-ho-mau',
    icon: '🏠',
    time: '14:00',
    name: 'Dẫn khách xem căn hộ',
    hanziName: '看房',
    story:
      'Buổi chiều bạn dẫn anh Vương đi xem một căn ở khu dân cư gần ga tàu điện. Anh ấy hỏi về hướng nhà, ánh sáng, tiện ích xung quanh, rồi bắt đầu trả giá.',
    phrase: { hanzi: '这套房子南北通透，采光很好。', pinyin: 'Zhè tào fángzi nánběi tōngtòu, cǎiguāng hěn hǎo.', meaning: 'Căn này thông thoáng hai hướng Nam Bắc, lấy sáng rất tốt.' },
    tasks: [
      { type: 'topic', ref: 'realestate-location', label: 'Từ vựng: Khu dân cư & vị trí' },
      { type: 'dialogue', ref: 'hsk9-xem-can-ho', label: 'Hội thoại: Xem căn hộ, thương lượng giá' }
    ],
    sticker: { icon: '🔑', label: '钥匙 · Chìa khóa' },
    roleplay: {
      role: 'Bạn đóng vai 王先生 (anh Vương), khách hàng đang được nhân viên môi giới (người dùng) dẫn đi xem một căn hộ 3 phòng ngủ, 100 mét vuông, tầng 15, giá niêm yết 380 vạn tệ, ở Thượng Hải. Hãy hỏi về hướng, ánh sáng, trường học, tàu điện, phí quản lý, và trả giá xuống. Đừng đồng ý quá nhanh.',
      mission: 'Giới thiệu ưu điểm căn hộ, trả lời câu hỏi của khách và giữ giá tốt nhất có thể.',
      opening: { hanzi: '这套房子看起来不错，是朝南的吗？', pinyin: 'Zhè tào fángzi kànqǐlái búcuò, shì cháo nán de ma?', meaning: 'Căn này trông được đấy, có phải hướng nam không?' }
    }
  },
  {
    key: 'ngan-hang',
    icon: '🏦',
    time: '16:00',
    name: 'Ngân hàng',
    hanziName: '银行',
    story:
      'Anh Vương ưng căn hộ nhưng cần vay. Bạn đi cùng anh ấy tới ngân hàng hỏi về trả trước, lãi suất và số tiền phải trả mỗi tháng.',
    phrase: { hanzi: '首付百分之三十，月供大概多少？', pinyin: 'Shǒufù bǎifēnzhī sānshí, yuègōng dàgài duōshao?', meaning: 'Trả trước 30%, mỗi tháng trả góp khoảng bao nhiêu?' },
    tasks: [
      { type: 'number', ref: 'gia-nha', label: 'Số & tiền: Giá nhà, thanh toán' },
      { type: 'dialogue', ref: 'hsk9-phap-ly-so-do', label: 'Hội thoại: Pháp lý sổ đỏ, vay thế chấp' }
    ],
    sticker: { icon: '💰', label: '贷款 · Khoản vay' },
    roleplay: {
      role: 'Bạn đóng vai 陈经理 (giám đốc Trần), nhân viên tín dụng nhà ở của một ngân hàng tại Thượng Hải. Người dùng là nhân viên môi giới đi cùng khách tới hỏi vay mua nhà 365 vạn tệ. Hãy giải thích trả trước tối thiểu, lãi suất, thời hạn vay, giấy tờ cần chuẩn bị (身份证, 银行流水, 征信...). Đưa số liệu cụ thể nhưng ghi rõ chỉ là ví dụ.',
      mission: 'Hỏi trả trước bao nhiêu, lãi suất, mỗi tháng trả bao nhiêu và cần giấy tờ gì.',
      opening: { hanzi: '您好，请坐。您想办理房贷，对吗？', pinyin: 'Nín hǎo, qǐng zuò. Nín xiǎng bànlǐ fángdài, duì ma?', meaning: 'Chào anh, mời ngồi. Anh muốn làm thủ tục vay mua nhà phải không?' }
    }
  },
  {
    key: 'ky-hop-dong',
    icon: '✍️',
    time: '18:00',
    name: 'Đặt cọc & ký hợp đồng',
    hanziName: '签约',
    story:
      'Cuối ngày, chủ nhà và anh Vương ngồi lại ở văn phòng. Bạn đọc lại hợp đồng, nói rõ tiền đặt cọc, ngày sang tên, rồi mời hai bên ký.',
    phrase: { hanzi: '合同没问题的话，我们今天就签约吧。', pinyin: 'Hétong méi wèntí dehuà, wǒmen jīntiān jiù qiānyuē ba.', meaning: 'Nếu hợp đồng không có vấn đề, hôm nay chúng ta ký luôn nhé.' },
    tasks: [
      { type: 'topic', ref: 'realestate-legal', label: 'Từ vựng: Hợp đồng & pháp lý' },
      { type: 'dialogue', ref: 'hsk9-dat-coc-hop-dong', label: 'Hội thoại: Đặt cọc, đọc hợp đồng' }
    ],
    sticker: { icon: '🏆', label: '成交 · Chốt giao dịch' },
    roleplay: {
      role: 'Bạn đóng vai 刘女士 (chị Lưu), chủ nhà đang chuẩn bị ký hợp đồng bán căn hộ cho khách qua nhân viên môi giới (người dùng) tại Thượng Hải. Hãy hỏi kỹ về tiền đặt cọc, thời gian khách thanh toán đủ, ngày sang tên, ai chịu thuế phí, xử lý nếu bên mua vi phạm. Hơi cẩn thận, muốn mọi điều ghi rõ trong hợp đồng.',
      mission: 'Giải thích tiền cọc, ngày sang tên, thuế phí và thuyết phục chủ nhà ký.',
      opening: { hanzi: '小李，定金是多少？什么时候可以过户？', pinyin: 'Xiǎo Lǐ, dìngjīn shì duōshao? Shénme shíhou kěyǐ guòhù?', meaning: 'Tiểu Lý, tiền đặt cọc là bao nhiêu? Khi nào có thể sang tên?' }
    }
  }
]

export function getStation(key) {
  return JOURNEY_STATIONS.find((s) => s.key === key) || null
}

export function taskPath(task) {
  if (task.type === 'dialogue') return `/hoi-thoai/${task.ref}`
  if (task.type === 'number') return `/so-va-tien/${task.ref}`
  return `/chu-de/${task.ref}`
}
