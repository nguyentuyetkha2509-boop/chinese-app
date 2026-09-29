// Sinh 2 file du lieu cho tinh nang Bo thu:
//   src/data/radicalsKangxi.js  - 214 bo thu chuan (ten, nghia, so net, bien the)
//   src/data/charRadicals.js    - chu Han -> so bo thu, cho tu vung HSK1-6 cua app
//
// Chay lai script nay khi them tu vung moi:
//   npm run build-radicals
//
// Du lieu lay tu 2 nguon that, KHONG go tay:
//   - So bo cua tung chu: bang kRSUnicode cua Unicode Unihan (Unihan_IRGSources.txt)
//   - So net cua tung bo: package hanzi-writer-data (cung nguon voi du lieu but thu
//     cua trang Viet chu Han)
// Tai 2 file Unihan ve truoc khi chay (xem huong dan o cuoi file nay):
//   Unihan_IRGSources.txt va Unihan_Variants.txt
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
// Thu muc chua 2 file Unihan da tai ve. Doi bang bien moi truong UNIHAN_DIR.
const unihanDir = process.env.UNIHAN_DIR || '/tmp/unihan'

// ---------------------------------------------------------------------------
// 1. Bang 214 bo thu: so thu tu | chu bo | bien the | pinyin | ten Han-Viet | nghia
// ---------------------------------------------------------------------------
const RADICAL_TABLE = `
1|一||yī|Nhất|số một, nét ngang
2|丨||gǔn|Cổn|nét sổ
3|丶||zhǔ|Chủ|nét chấm
4|丿||piě|Phiệt|nét phẩy
5|乙||yǐ|Ất|vị trí thứ hai (can chi)
6|亅||jué|Quyết|nét móc
7|二||èr|Nhị|số hai
8|亠||tóu|Đầu|nắp, phần trên của chữ
9|人|亻|rén|Nhân|con người
10|儿||ér|Nhi|trẻ con, đôi chân
11|入||rù|Nhập|vào, đi vào
12|八||bā|Bát|số tám, chia ra
13|冂||jiōng|Quynh|vùng biên giới xa
14|冖||mì|Mịch|khăn trùm, che phủ
15|冫||bīng|Băng|băng, giá lạnh
16|几||jī|Kỷ|ghế nhỏ, cái bàn
17|凵||kǎn|Khảm|há miệng, vật chứa
18|刀|刂|dāo|Đao|con dao
19|力||lì|Lực|sức lực
20|勹||bāo|Bao|bao bọc, ôm
21|匕||bǐ|Chuỷ|cái thìa, dao ngắn
22|匚||fāng|Phương|hộp, cái tủ
23|匸||xì|Hệ|che giấu
24|十||shí|Thập|số mười
25|卜||bǔ|Bốc|bói toán
26|卩|㔾|jié|Tiết|con dấu, người quỳ
27|厂||hàn|Hán|sườn núi, vách đá
28|厶||sī|Khư|riêng tư
29|又||yòu|Hựu|lại nữa, bàn tay
30|口||kǒu|Khẩu|miệng
31|囗||wéi|Vi|vây quanh, thành bao
32|土||tǔ|Thổ|đất
33|士||shì|Sĩ|kẻ sĩ, người học
34|夂||zhǐ|Tri|đi chậm, phía sau
35|夊||suī|Tuy|bước đi chậm
36|夕||xī|Tịch|buổi tối
37|大||dà|Đại|to lớn
38|女||nǚ|Nữ|phụ nữ
39|子||zǐ|Tử|con, đứa trẻ
40|宀||mián|Miên|mái nhà
41|寸||cùn|Thốn|tấc (đơn vị đo)
42|小||xiǎo|Tiểu|nhỏ bé
43|尢|尣|wāng|Uông|yếu ớt, què
44|尸||shī|Thi|xác chết, thân thể
45|屮||chè|Triệt|mầm cây
46|山||shān|Sơn|núi
47|巛|川|chuān|Xuyên|dòng sông
48|工||gōng|Công|công việc, thợ
49|己||jǐ|Kỷ|bản thân
50|巾||jīn|Cân|khăn, vải
51|干||gān|Can|can thiệp, khô
52|幺||yāo|Yêu|nhỏ, út
53|广||guǎng|Nghiễm|mái nhà rộng
54|廴||yǐn|Dẫn|bước dài
55|廾||gǒng|Củng|hai tay chắp
56|弋||yì|Dặc|bắn, săn
57|弓||gōng|Cung|cái cung
58|彐|彑|jì|Ký|mõm lợn, đầu con nhím
59|彡||shān|Sam|lông tóc, trang trí
60|彳||chì|Xích|bước chân, đi lại
61|心|忄,㣺|xīn|Tâm|trái tim, tâm trạng
62|戈||gē|Qua|cây giáo
63|戶|户|hù|Hộ|cửa nhà
64|手|扌|shǒu|Thủ|bàn tay
65|支||zhī|Chi|cành, chi nhánh
66|攴|攵|pū|Phộc|đánh nhẹ, gõ
67|文||wén|Văn|văn chương, hoa văn
68|斗||dǒu|Đẩu|cái đấu (đong gạo)
69|斤||jīn|Cân|cái rìu, cân nặng
70|方||fāng|Phương|phương hướng, vuông
71|无||wú|Vô|không có
72|日||rì|Nhật|mặt trời, ngày
73|曰||yuē|Viết|nói rằng
74|月||yuè|Nguyệt|mặt trăng, tháng
75|木||mù|Mộc|cây, gỗ
76|欠||qiàn|Khiếm|thiếu, ngáp
77|止||zhǐ|Chỉ|dừng lại, bàn chân
78|歹|歺|dǎi|Đãi|chết chóc, xấu
79|殳||shū|Thù|vũ khí dài, đánh
80|毋||wú|Vô|chớ, đừng
81|比||bǐ|Tỷ|so sánh
82|毛||máo|Mao|lông, tóc
83|氏||shì|Thị|họ, dòng họ
84|气||qì|Khí|không khí, hơi
85|水|氵,氺|shuǐ|Thuỷ|nước
86|火|灬|huǒ|Hoả|lửa
87|爪|爫|zhǎo|Trảo|móng vuốt
88|父||fù|Phụ|cha
89|爻||yáo|Hào|hào (quẻ), giao nhau
90|爿||pán|Tường|mảnh gỗ, giường
91|片||piàn|Phiến|miếng, tấm
92|牙||yá|Nha|răng nanh
93|牛|牜|niú|Ngưu|con bò
94|犬|犭|quǎn|Khuyển|con chó
95|玄||xuán|Huyền|huyền bí, đen
96|玉|王,玊|yù|Ngọc|ngọc (ghép vào chữ thường viết như 王)
97|瓜||guā|Qua|quả dưa
98|瓦||wǎ|Ngoã|ngói, đồ gốm
99|甘||gān|Cam|ngọt
100|生||shēng|Sinh|sinh ra, sống
101|用||yòng|Dụng|dùng, sử dụng
102|田||tián|Điền|ruộng
103|疋||pǐ|Thất|đơn vị đo vải, bàn chân
104|疒||nè|Nạch|bệnh tật
105|癶||bō|Bát|hai chân dang ra
106|白||bái|Bạch|màu trắng
107|皮||pí|Bì|da
108|皿||mǐn|Mãnh|bát đĩa, đồ đựng
109|目||mù|Mục|con mắt
110|矛||máo|Mâu|cây mâu, giáo
111|矢||shǐ|Thỉ|mũi tên
112|石||shí|Thạch|đá
113|示|礻|shì|Thị|thần linh, chỉ bảo
114|禸||róu|Nhựu|dấu chân thú
115|禾||hé|Hoà|cây lúa
116|穴||xué|Huyệt|hang, lỗ
117|立||lì|Lập|đứng
118|竹|⺮|zhú|Trúc|cây tre
119|米||mǐ|Mễ|gạo
120|糸|纟,糹|mì|Mịch|sợi tơ, chỉ
121|缶||fǒu|Phẫu|đồ gốm, vại
122|网|罒,罓|wǎng|Võng|cái lưới
123|羊|⺶|yáng|Dương|con cừu, con dê
124|羽||yǔ|Vũ|lông vũ
125|老|耂|lǎo|Lão|già
126|而||ér|Nhi|mà, và
127|耒||lěi|Lỗi|cái cày
128|耳||ěr|Nhĩ|tai
129|聿|⺻|yù|Duật|cây bút
130|肉|月,⺼|ròu|Nhục|thịt (ghép vào chữ thường viết tựa như bộ 月)
131|臣||chén|Thần|bề tôi
132|自||zì|Tự|tự mình
133|至||zhì|Chí|đến, tới
134|臼||jiù|Cữu|cối giã
135|舌||shé|Thiệt|cái lưỡi
136|舛||chuǎn|Suyễn|trái ngược, sai
137|舟||zhōu|Chu|thuyền
138|艮||gèn|Cấn|dừng lại, quẻ Cấn
139|色||sè|Sắc|màu sắc
140|艸|艹|cǎo|Thảo|cỏ
141|虍|虎|hū|Hô|vằn hổ
142|虫||chóng|Trùng|côn trùng
143|血||xuè|Huyết|máu
144|行||xíng|Hành|đi, hàng lối
145|衣|衤|yī|Y|quần áo
146|襾|覀|yà|Á|che phủ, bao trùm
147|見|见|jiàn|Kiến|nhìn thấy
148|角||jiǎo|Giác|sừng, góc
149|言|讠,訁|yán|Ngôn|lời nói
150|谷||gǔ|Cốc|thung lũng
151|豆||dòu|Đậu|hạt đậu
152|豕||shǐ|Thỉ|con lợn
153|豸||zhì|Trãi|loài thú có xương sống
154|貝|贝|bèi|Bối|vỏ sò, tiền của
155|赤||chì|Xích|màu đỏ
156|走||zǒu|Tẩu|chạy, đi
157|足|𧾷|zú|Túc|bàn chân
158|身||shēn|Thân|thân thể
159|車|车|chē|Xa|xe
160|辛||xīn|Tân|cay, vất vả
161|辰||chén|Thần|chi Thìn, buổi sớm
162|辵|辶,⻍|chuò|Sước|bước đi, di chuyển
163|邑|阝|yì|Ấp|thành ấp, vùng đất (viết 阝 ở bên phải chữ)
164|酉||yǒu|Dậu|chi Dậu, rượu
165|釆||biàn|Biện|phân biệt
166|里||lǐ|Lý|dặm, làng
167|金|钅,釒|jīn|Kim|vàng, kim loại
168|長|长|cháng|Trường|dài, lớn
169|門|门|mén|Môn|cửa lớn
170|阜|阝|fù|Phụ|gò đất, đồi (viết 阝 ở bên trái chữ)
171|隶||lì|Đãi|nô lệ, kịp
172|隹||zhuī|Truy|chim đuôi ngắn
173|雨||yǔ|Vũ|mưa
174|靑|青|qīng|Thanh|màu xanh
175|非||fēi|Phi|không phải, sai
176|面||miàn|Diện|mặt
177|革||gé|Cách|da thuộc
178|韋|韦|wéi|Vi|da mềm
179|韭||jiǔ|Cửu|củ hẹ
180|音||yīn|Âm|âm thanh
181|頁|页|yè|Hiệt|đầu, trang giấy
182|風|风|fēng|Phong|gió
183|飛|飞|fēi|Phi|bay
184|食|饣,飠|shí|Thực|ăn, thức ăn
185|首||shǒu|Thủ|đầu, cổ
186|香||xiāng|Hương|thơm
187|馬|马|mǎ|Mã|con ngựa
188|骨||gǔ|Cốt|xương
189|高||gāo|Cao|cao
190|髟||biāo|Tiêu|tóc dài
191|鬥||dòu|Đấu|đánh nhau
192|鬯||chàng|Sướng|rượu tế lễ
193|鬲||gé|Cách|cái nồi, bình
194|鬼||guǐ|Quỷ|ma quỷ
195|魚|鱼|yú|Ngư|con cá
196|鳥|鸟|niǎo|Điểu|con chim
197|鹵|卤|lǔ|Lỗ|đất mặn, muối
198|鹿||lù|Lộc|con hươu
199|麥|麦|mài|Mạch|lúa mạch
200|麻||má|Ma|cây gai, tê
201|黃|黄|huáng|Hoàng|màu vàng
202|黍||shǔ|Thử|cây kê
203|黑|黒|hēi|Hắc|màu đen
204|黹||zhǐ|Chỉ|may thêu
205|黽|黾|mǐn|Mãnh|con ếch, con cóc
206|鼎|鼑|dǐng|Đỉnh|cái đỉnh
207|鼓||gǔ|Cổ|cái trống, đánh
208|鼠|鼡|shǔ|Thử|con chuột
209|鼻||bí|Tỵ|cái mũi
210|齊|齐|qí|Tề|đều nhau
211|齒|齿|chǐ|Xỉ|răng
212|龍|龙|lóng|Long|con rồng
213|龜|龟|guī|Quy|con rùa
214|龠||yuè|Dược|sáo, ống nhạc
`.trim()

// ---------------------------------------------------------------------------
// Doc du lieu Unihan
// ---------------------------------------------------------------------------
function readUnihanFields(fileName, wantedKey) {
  const path = join(unihanDir, fileName)
  if (!existsSync(path)) {
    throw new Error(
      `Khong tim thay ${path}\n` +
        'Tai ve truoc:\n' +
        '  curl -L -o /tmp/unihan.zip https://www.unicode.org/Public/15.1.0/ucd/Unihan.zip\n' +
        '  mkdir -p /tmp/unihan && unzip -o -j /tmp/unihan.zip "Unihan_IRGSources.txt" "Unihan_Variants.txt" -d /tmp/unihan'
    )
  }
  const out = new Map()
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    if (!line || line[0] === '#') continue
    const [cp, key, value] = line.split('\t')
    if (key !== wantedKey) continue
    out.set(cp, value.trim())
  }
  return out
}

const cpOf = (ch) => 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')

// Chu -> so bo thu (1..214)
const radicalByCp = new Map()
for (const [cp, value] of readUnihanFields('Unihan_IRGSources.txt', 'kRSUnicode')) {
  const m = /^(-?\d+)\./.exec(value.split(/\s+/)[0])
  const n = m ? Number(m[1]) : 0
  if (n >= 1 && n <= 214) radicalByCp.set(cp, n)
}

// Chu gian the -> chu phong the, de tra bo cho cac chu gian the ma Unihan
// chi danh so theo chu phong the (vi du 请 -> 請 -> bo 149 Ngon).
const traditionalOf = new Map()
for (const [cp, value] of readUnihanFields('Unihan_Variants.txt', 'kTraditionalVariant')) {
  const first = value.split(/\s+/)[0]
  if (/^U\+[0-9A-F]+$/.test(first)) traditionalOf.set(cp, first)
}

// ---------------------------------------------------------------------------
// 1. src/data/radicalsKangxi.js
// ---------------------------------------------------------------------------
const strokeCount = (ch) => JSON.parse(readFileSync(join(rootDir, 'node_modules/hanzi-writer-data', `${ch}.json`), 'utf8')).strokes.length

const radicals = RADICAL_TABLE.split('\n').map((line, i) => {
  const [n, symbol, variants, pinyin, name, meaning] = line.split('|')
  if (Number(n) !== i + 1) throw new Error(`So thu tu sai o dong ${i + 1}: ${n}`)
  if ([...symbol].length !== 1) throw new Error(`Chu bo khong phai 1 chu: ${symbol}`)
  return {
    n: Number(n),
    symbol,
    variants: variants ? variants.split(',') : [],
    pinyin,
    name,
    meaning,
    strokes: strokeCount(symbol)
  }
})
if (radicals.length !== 214) throw new Error(`So bo thu khong phai 214: ${radicals.length}`)

const radicalsFile = [
  '// 214 bo thu chuan theo danh sach Khang Hy (Kangxi radicals).',
  '// Ten goi dung am Han-Viet quen thuoc voi nguoi hoc o Viet Nam, kem nghia tieng Viet',
  '// de de nho. variants la cac dang viet khac cua bo khi ghep vao chu (vi du bo 85',
  '// 水 khi nam ben trai thi viet thanh 氵 nhu trong 河 汗 洗).',
  '//',
  '// File nay sinh tu scripts/build-radicals.mjs - dung sua tay.',
  '// So net (strokes) lay tu du lieu but thu hanzi-writer-data, khong go tay.',
  'export const KANGXI_RADICALS = [',
  ...radicals.map(
    (r) =>
      `  { n: ${r.n}, symbol: '${r.symbol}', variants: [${r.variants.map((v) => `'${v}'`).join(', ')}], ` +
      `pinyin: '${r.pinyin}', name: '${r.name}', meaning: '${r.meaning}', strokes: ${r.strokes} },`
  ),
  ']',
  ''
].join('\n')

// ---------------------------------------------------------------------------
// 2. src/data/charRadicals.js
// ---------------------------------------------------------------------------
const words = []
for (const lv of [1, 2, 3, 4, 5, 6]) {
  const mod = await import(`${rootDir}/src/data/hsk${lv}.js`)
  words.push(...mod[`HSK${lv}_WORDS`])
}
const singleChars = [...new Set(words.filter((w) => [...w.hanzi].length === 1).map((w) => w.hanzi))]

const entries = []
const unresolved = []
for (const ch of singleChars) {
  const cp = cpOf(ch)
  let n = radicalByCp.get(cp)
  const trad = traditionalOf.get(cp)
  if (!n && trad) n = radicalByCp.get(trad)
  if (!n) {
    unresolved.push(ch)
    continue
  }
  entries.push([ch, n])
}

const charRadicalsFile = [
  '// Chu Han (1 chu) -> so bo thu trong danh sach 214 bo Khang Hy.',
  '// Chi gom nhung chu co trong tu vung HSK1-6 cua app.',
  '//',
  '// Sinh tu scripts/build-radicals.mjs - dung sua tay.',
  '// Nguon: bang kRSUnicode cua Unicode Unihan (chu gian the tra qua chu phong the',
  '// tuong ung, vi Unihan danh so bo theo chu phong the).',
  `// Phu ${entries.length}/${singleChars.length} chu don cua app.`,
  'export const CHAR_RADICAL_N = {',
  ...entries.map(([ch, n]) => `  '${ch}': ${n},`),
  '}',
  ''
].join('\n')

writeFileSync(join(rootDir, 'src/data/radicalsKangxi.js'), radicalsFile)
writeFileSync(join(rootDir, 'src/data/charRadicals.js'), charRadicalsFile)

console.log(`Da ghi ${radicals.length} bo thu vao src/data/radicalsKangxi.js`)
console.log(`Da ghi ${entries.length}/${singleChars.length} chu vao src/data/charRadicals.js`)
if (unresolved.length) console.log(`Chua tra duoc bo cho ${unresolved.length} chu: ${unresolved.join(' ')}`)
