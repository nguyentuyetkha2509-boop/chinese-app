// So do chu: mot chu o giua, cac tu ghep chua chu do toa xung quanh (giong kieu
// so do trong sach "Luyen nho tu vung"). Chi soan chu trung tam va am Han Viet;
// tu ghep, pinyin, nghia va cau vi du lay tu dong tu kho tu vung co san
// (src/lib/charWeb.js) de khong phai soan va ra soat them hang tram muc.
//
// pinyin: chi ghi khi cach doc cua chu don trong kho tu khong phai cach doc chinh
// trong tu ghep (vi du 地 la tro tu 'de' nhung trong tu ghep doc 'di').
// prefer: tu ghep muon dat len truoc (vi du tu nghe bat dong san), chi can
// chu Han, tu phai co trong kho tu (HSK hoac topicWords) moi hien.

export const CHAR_WEB_GROUPS = [
  { key: 'realestate', label: 'Bất động sản' },
  { key: 'common', label: 'Chữ thông dụng' }
]

export const CHAR_WEBS = [
  // Bat dong san
  { char: '房', hanviet: 'PHÒNG', meaning: 'nhà, phòng', group: 'realestate', prefer: ['房子', '房间', '房东', '房租', '房价', '房产', '房源', '租房', '买房', '卖房', '二手房', '新房'] },
  { char: '地', pinyin: 'dì', hanviet: 'ĐỊA', meaning: 'đất, nơi', group: 'realestate', prefer: ['土地', '地段', '地铁', '地址', '地方', '地区', '地产', '房地产', '地主', '地图'] },
  { char: '产', hanviet: 'SẢN', meaning: 'sản, của cải', group: 'realestate', prefer: ['房产', '产权', '地产', '房地产', '财产', '资产', '生产', '产品', '房产证', '产业'] },
  { char: '价', hanviet: 'GIÁ', meaning: 'giá', group: 'realestate', prefer: ['价格', '房价', '报价', '还价', '议价', '砍价', '涨价', '降价', '成交价', '评估价', '单价', '总价'] },
  { char: '租', hanviet: 'TÔ', meaning: 'thuê', group: 'realestate', prefer: ['租金', '房租', '出租', '租房', '租客', '租期', '续租', '退租', '租赁合同', '租售比'] },
  { char: '金', hanviet: 'KIM', meaning: 'vàng, tiền', group: 'realestate', prefer: ['租金', '押金', '定金', '佣金', '资金', '现金', '奖金', '违约金', '公积金', '意向金'] },
  { char: '买', hanviet: 'MÃI', meaning: 'mua', group: 'realestate', prefer: ['买房', '买家', '购买', '买卖', '买单', '收买'] },
  { char: '卖', hanviet: 'MẠI', meaning: 'bán', group: 'realestate', prefer: ['卖房', '卖家', '出售', '买卖', '拍卖', '外卖', '卖方', '贩卖'] },
  { char: '客', hanviet: 'KHÁCH', meaning: 'khách', group: 'realestate', prefer: ['客户', '顾客', '租客', '客源', '老客户', '潜在客户', '客厅', '客人', '客气', '游客'] },
  { char: '合', hanviet: 'HỢP', meaning: 'hợp, gộp', group: 'realestate', prefer: ['合同', '购房合同', '租赁合同', '合作', '合适', '合理', '合法', '符合', '综合', '配合'] },
  { char: '市', hanviet: 'THỊ', meaning: 'chợ, thành phố', group: 'realestate', prefer: ['市场', '房地产市场', '市中心', '城市', '超市', '菜市场', '市民', '市长'] },
  { char: '业', pinyin: 'yè', hanviet: 'NGHIỆP', meaning: 'nghề, nghiệp', group: 'realestate', prefer: ['业主', '物业', '物业费', '商业地产', '工业地产', '专业', '职业', '企业', '行业', '产业'] },

  // Chu thong dung
  { char: '人', hanviet: 'NHÂN', meaning: 'người', group: 'common' },
  { char: '大', hanviet: 'ĐẠI', meaning: 'lớn', group: 'common' },
  { char: '小', hanviet: 'TIỂU', meaning: 'nhỏ', group: 'common' },
  { char: '学', hanviet: 'HỌC', meaning: 'học', group: 'common' },
  { char: '生', hanviet: 'SINH', meaning: 'sinh, sống', group: 'common' },
  { char: '中', hanviet: 'TRUNG', meaning: 'giữa, trong', group: 'common' },
  { char: '出', hanviet: 'XUẤT', meaning: 'ra', group: 'common' },
  { char: '上', hanviet: 'THƯỢNG', meaning: 'trên', group: 'common' },
  { char: '下', hanviet: 'HẠ', meaning: 'dưới', group: 'common' },
  { char: '动', hanviet: 'ĐỘNG', meaning: 'động', group: 'common' },
  { char: '心', hanviet: 'TÂM', meaning: 'tim, lòng', group: 'common' },
  { char: '手', hanviet: 'THỦ', meaning: 'tay', group: 'common' },
  { char: '电', hanviet: 'ĐIỆN', meaning: 'điện', group: 'common' },
  { char: '水', hanviet: 'THỦY', meaning: 'nước', group: 'common' },
  { char: '天', hanviet: 'THIÊN', meaning: 'trời, ngày', group: 'common' },
  { char: '年', hanviet: 'NIÊN', meaning: 'năm', group: 'common' },
  { char: '时', hanviet: 'THỜI', meaning: 'thời gian', group: 'common' },
  { char: '家', hanviet: 'GIA', meaning: 'nhà, gia đình', group: 'common' },
  { char: '国', hanviet: 'QUỐC', meaning: 'nước, quốc gia', group: 'common' },
  { char: '发', hanviet: 'PHÁT', meaning: 'phát', group: 'common' },
  { char: '开', hanviet: 'KHAI', meaning: 'mở', group: 'common' },
  { char: '行', hanviet: 'HÀNH', meaning: 'đi, làm', group: 'common' },
  { char: '会', hanviet: 'HỘI', meaning: 'họp, biết', group: 'common' },
  { char: '好', hanviet: 'HẢO', meaning: 'tốt', group: 'common' },
  { char: '气', hanviet: 'KHÍ', meaning: 'khí, hơi', group: 'common' },
  { char: '车', hanviet: 'XA', meaning: 'xe', group: 'common' },
  { char: '面', hanviet: 'DIỆN', meaning: 'mặt', group: 'common' },
  { char: '长', hanviet: 'TRƯỜNG', meaning: 'dài; trưởng', group: 'common' },
  { char: '成', hanviet: 'THÀNH', meaning: 'thành', group: 'common' },
  { char: '分', hanviet: 'PHÂN', meaning: 'chia, phần', group: 'common' },
  { char: '外', hanviet: 'NGOẠI', meaning: 'ngoài', group: 'common' },
  { char: '高', hanviet: 'CAO', meaning: 'cao', group: 'common' },
  { char: '前', hanviet: 'TIỀN', meaning: 'trước', group: 'common' },
  { char: '后', hanviet: 'HẬU', meaning: 'sau', group: 'common' },
  { char: '力', hanviet: 'LỰC', meaning: 'sức', group: 'common' },
  { char: '事', hanviet: 'SỰ', meaning: 'việc', group: 'common' },
  { char: '口', hanviet: 'KHẨU', meaning: 'miệng, cửa', group: 'common' },
  { char: '文', pinyin: 'wén', hanviet: 'VĂN', meaning: 'văn, chữ', group: 'common' },
  { char: '工', hanviet: 'CÔNG', meaning: 'công, làm', group: 'common' },
  { char: '主', hanviet: 'CHỦ', meaning: 'chủ, chính', group: 'common' },
  { char: '公', hanviet: 'CÔNG', meaning: 'chung, công', group: 'common' },
  { char: '新', hanviet: 'TÂN', meaning: 'mới', group: 'common' },
  { char: '同', hanviet: 'ĐỒNG', meaning: 'cùng', group: 'common' },
  { char: '意', hanviet: 'Ý', meaning: 'ý', group: 'common' },
  { char: '理', hanviet: 'LÝ', meaning: 'lý, lẽ', group: 'common' },
  { char: '法', hanviet: 'PHÁP', meaning: 'phép, luật', group: 'common' },
  { char: '信', hanviet: 'TÍN', meaning: 'tin', group: 'common' },
  { char: '通', hanviet: 'THÔNG', meaning: 'thông', group: 'common' },
  { char: '名', hanviet: 'DANH', meaning: 'tên', group: 'common' },
  { char: '关', hanviet: 'QUAN', meaning: 'đóng; liên quan', group: 'common' },
  { char: '道', hanviet: 'ĐẠO', meaning: 'đường, đạo', group: 'common' },
  { char: '见', hanviet: 'KIẾN', meaning: 'thấy', group: 'common' },
  { char: '物', hanviet: 'VẬT', meaning: 'vật', group: 'common' },
  { char: '体', hanviet: 'THỂ', meaning: 'thân thể', group: 'common' },
  { char: '民', hanviet: 'DÂN', meaning: 'dân', group: 'common' }
]

export function getCharWeb(char) {
  return CHAR_WEBS.find((c) => c.char === char) || null
}
