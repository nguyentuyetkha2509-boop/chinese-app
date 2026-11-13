// Lang 3D (ban thu): moi dao la mot ga cua Hanh trinh, tren dao co 2 nhan vat
// noi chuyen voi nhau. Cau thoai ngan, tu vung HSK1-4 cong vai tu nghe BDS,
// de nguoi moi hoc nghe va doc theo duoc. Nguoi hoc dong vai 小李 (Tieu Ly).
//
// npcs: look quyet dinh mau ao/toc khi dung hinh 3D (xem src/lib/village3d.js).

export const VILLAGE_ISLANDS = [
  {
    station: 'van-phong',
    label: '8:00 · Văn phòng',
    npcs: [
      { id: 'zhang', name: '张经理', look: 'suit' },
      { id: 'li', name: '小李', look: 'staff' }
    ],
    lines: [
      { npc: 'zhang', hanzi: '小李，早上好！今天有三套新房源。', pinyin: 'Xiǎo Lǐ, zǎoshang hǎo! Jīntiān yǒu sān tào xīn fángyuán.', meaning: 'Tiểu Lý, chào buổi sáng! Hôm nay có ba căn mới.' },
      { npc: 'li', hanzi: '张经理，早上好！房子在哪儿？', pinyin: 'Zhāng jīnglǐ, zǎoshang hǎo! Fángzi zài nǎr?', meaning: 'Chào trưởng phòng Trương! Nhà ở đâu ạ?' },
      { npc: 'zhang', hanzi: '都在地铁站附近，交通很方便。', pinyin: 'Dōu zài dìtiězhàn fùjìn, jiāotōng hěn fāngbiàn.', meaning: 'Đều gần ga tàu điện ngầm, đi lại rất tiện.' },
      { npc: 'li', hanzi: '面积多大？几室几厅？', pinyin: 'Miànjī duō dà? Jǐ shì jǐ tīng?', meaning: 'Diện tích bao nhiêu? Mấy phòng ngủ, mấy phòng khách?' },
      { npc: 'zhang', hanzi: '一套是两室一厅，八十平米，在十五楼。', pinyin: 'Yí tào shì liǎng shì yì tīng, bāshí píngmǐ, zài shíwǔ lóu.', meaning: 'Một căn hai phòng ngủ một phòng khách, 80 m², ở tầng 15.' },
      { npc: 'li', hanzi: '太好了！我下午就带客户去看房。', pinyin: 'Tài hǎo le! Wǒ xiàwǔ jiù dài kèhù qù kàn fáng.', meaning: 'Tốt quá! Chiều nay em dẫn khách đi xem nhà luôn.' }
    ]
  },
  {
    station: 'quan-ca-phe',
    label: '10:00 · Quán cà phê',
    npcs: [
      { id: 'li', name: '小李', look: 'staff' },
      { id: 'wang', name: '王先生', look: 'client' }
    ],
    lines: [
      { npc: 'li', hanzi: '王先生，您好！这是我的名片。', pinyin: 'Wáng xiānsheng, nín hǎo! Zhè shì wǒ de míngpiàn.', meaning: 'Chào anh Vương! Đây là danh thiếp của tôi.' },
      { npc: 'wang', hanzi: '你好！你想喝点儿什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng hē diǎnr shénme?', meaning: 'Chào em! Em muốn uống gì?' },
      { npc: 'li', hanzi: '一杯咖啡就好，谢谢。您想买什么样的房子？', pinyin: 'Yì bēi kāfēi jiù hǎo, xièxie. Nín xiǎng mǎi shénmeyàng de fángzi?', meaning: 'Một cốc cà phê là được, cảm ơn. Anh muốn mua nhà thế nào ạ?' },
      { npc: 'wang', hanzi: '我想要三室，离学校近一点儿。', pinyin: 'Wǒ xiǎng yào sān shì, lí xuéxiào jìn yìdiǎnr.', meaning: 'Tôi muốn ba phòng ngủ, gần trường học một chút.' },
      { npc: 'li', hanzi: '您的预算大概是多少？', pinyin: 'Nín de yùsuàn dàgài shì duōshao?', meaning: 'Ngân sách của anh khoảng bao nhiêu?' },
      { npc: 'wang', hanzi: '四百万左右，不能太贵。', pinyin: 'Sìbǎi wàn zuǒyòu, bù néng tài guì.', meaning: 'Khoảng 4 triệu tệ, không được đắt quá.' },
      { npc: 'li', hanzi: '没问题，我明天给您发几套房源。', pinyin: 'Méi wèntí, wǒ míngtiān gěi nín fā jǐ tào fángyuán.', meaning: 'Không vấn đề gì, ngày mai tôi gửi anh vài căn.' }
    ]
  }
]
