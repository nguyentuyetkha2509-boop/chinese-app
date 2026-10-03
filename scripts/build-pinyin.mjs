// Sinh file du lieu phien am tung chu Han:
//   src/data/charPinyin.js - chu Han -> pinyin, cho MOI chu co trong tu vung HSK1-6
//
// Chay lai script nay khi them tu vung moi:
//   npm run build-pinyin
//
// Du lieu lay tu 2 nguon that, KHONG go tay:
//   - Cac tu MOT chu trong chinh du lieu tu vung cua app (uu tien - xem vi sao o duoi)
//   - kMandarin cua Unicode Unihan (Unihan_Readings.txt) cho cac chu con lai.
//     Cung ho Unihan voi scripts/build-radicals.mjs.
// Tai file Unihan ve truoc khi chay (xem huong dan o cuoi file nay).
//
// Vi sao can file nay: pinyin trong du lieu tu vung la pinyin cua CA TU, khong
// phai cua tung chu (tu 爸爸 co pinyin "bàba", mang tones [4, 0] ung voi tung
// chu nhung chuoi pinyin khong tach roi ra duoc). Trang Viet chu lai hien tung
// chu mot, nen phai co am doc rieng cua chu do.
//
// Vi sao UU TIEN du lieu cua app: kMandarin la am doc PHO BIEN NHAT cua chu, ma
// chu da am thi am pho bien nhat khong nhat thiet la am dang dung voi nghia cua
// tu. Vi du 长: kMandarin tra "zhǎng" (moc lon len) trong khi tu cua app la 长
// nghia "dài", doc "cháng" - lay kMandarin thi phien am mau thuan voi chinh
// nghia hien ngay ben canh. Tu MOT chu cua app thi duoc soan dung theo nghia
// cua chinh tu do, nen khi chu do co san trong tu vung thi lay am cua app.
// kMandarin chi dung cho cac chu chi xuat hien trong tu ghep (爸 trong 爸爸).
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
// Thu muc chua cac file Unihan da tai ve. Doi bang bien moi truong UNIHAN_DIR.
const unihanDir = process.env.UNIHAN_DIR || '/tmp/unihan'

const isHan = (ch) => /[一-鿿]/.test(ch)
const cpOf = (ch) => 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')

function readUnihanFields(fileName, wantedKey) {
  const path = join(unihanDir, fileName)
  if (!existsSync(path)) {
    throw new Error(
      `Khong tim thay ${path}\n` +
        'Tai ve truoc:\n' +
        '  curl -L -o /tmp/unihan.zip https://www.unicode.org/Public/15.1.0/ucd/Unihan.zip\n' +
        '  mkdir -p /tmp/unihan && unzip -o -j /tmp/unihan.zip "Unihan_Readings.txt" "Unihan_Variants.txt" -d /tmp/unihan'
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

// kMandarin cua mot so chu co nhieu am doc cach nhau bang dau cach (chu da am:
// 和 -> "hé hè huó huò hú"). Lay am dau tien - am thong dung nhat.
const mandarinByCp = new Map()
for (const [cp, value] of readUnihanFields('Unihan_Readings.txt', 'kMandarin')) {
  mandarinByCp.set(cp, value.split(/\s+/)[0])
}

// Chu gian the chua co kMandarin rieng thi tra qua chu phong the tuong ung
// (vi du 门 -> 門). Cung cach xu ly nhu scripts/build-radicals.mjs.
const traditionalOf = new Map()
for (const [cp, value] of readUnihanFields('Unihan_Variants.txt', 'kTraditionalVariant')) {
  const first = value.split(/\s+/)[0]
  if (/^U\+[0-9A-F]+$/.test(first)) traditionalOf.set(cp, first)
}

// ---------------------------------------------------------------------------
// Chu Han co trong tu vung HSK1-6
// ---------------------------------------------------------------------------
const words = []
for (const lv of [1, 2, 3, 4, 5, 6, 7]) {
  const mod = await import(`${rootDir}/src/data/hsk${lv}.js`)
  words.push(...mod[`HSK${lv}_WORDS`])
}

// Tat ca chu Han xuat hien trong tu vung, ke ca chu nam trong tu ghep: trang
// Viet chu tach tung chu cua tu ra de luyen, nen chu nao cung can phien am.
const allChars = [...new Set(words.flatMap((w) => [...w.hanzi].filter(isHan)))]

// Pinyin cua cac tu MOT chu trong chinh du lieu cua app - nguon uu tien (xem
// giai thich o dau file). Chi 693/2632 chu co mat o dang nay.
const appReading = new Map()
for (const w of words) {
  if ([...w.hanzi].length === 1 && isHan(w.hanzi)) appReading.set(w.hanzi, w.pinyin)
}

const entries = []
const unresolved = []
const fromApp = []
const polyphone = []
for (const ch of allChars) {
  const app = appReading.get(ch)
  let pinyin = app
  if (!pinyin) {
    const cp = cpOf(ch)
    pinyin = mandarinByCp.get(cp)
    if (!pinyin) {
      const trad = traditionalOf.get(cp)
      if (trad) pinyin = mandarinByCp.get(trad)
    }
  } else {
    fromApp.push(ch)
    const dict = mandarinByCp.get(cpOf(ch))
    if (dict && dict !== app) polyphone.push(`${ch}: app "${app}" / tu dien "${dict}"`)
  }
  if (!pinyin) {
    unresolved.push(ch)
    continue
  }
  entries.push([ch, pinyin])
}

// Sap theo ma Unicode de file on dinh giua cac lan chay (thu tu chen phu thuoc
// thu tu doc tu vung, doi tu vung la doi thu tu - khong nen).
entries.sort((a, b) => a[0].codePointAt(0) - b[0].codePointAt(0))

const file = [
  '// Chu Han (1 chu) -> phien am (pinyin co dau thanh).',
  '// Gom MOI chu Han co trong tu vung HSK1-9 cua app, ke ca chu nam trong tu ghep.',
  '//',
  '// Sinh tu scripts/build-pinyin.mjs - dung sua tay.',
  '// Nguon: tu MOT chu trong tu vung cua app (uu tien, vi duoc soan theo dung nghia',
  '// cua tu), con lai lay tu bang kMandarin cua Unicode Unihan.',
  `// Phu ${entries.length}/${allChars.length} chu cua app.`,
  'export const CHAR_PINYIN = {',
  ...entries.map(([ch, pinyin]) => `  '${ch}': '${pinyin}',`),
  '}',
  ''
].join('\n')

writeFileSync(join(rootDir, 'src/data/charPinyin.js'), file)

console.log(`Da ghi ${entries.length}/${allChars.length} chu vao src/data/charPinyin.js`)
console.log(`  lay tu tu MOT chu cua app: ${fromApp.length} | lay tu Unihan: ${entries.length - fromApp.length}`)
if (unresolved.length) console.log(`Chua tra duoc phien am cho ${unresolved.length} chu: ${unresolved.join(' ')}`)
if (polyphone.length) {
  console.log(`Chu da am: app doc khac tu dien (${polyphone.length} chu, da lay theo app):`)
  console.log('  ' + polyphone.join('\n  '))
}

// ---------------------------------------------------------------------------
// Cach tai du lieu Unihan (giong scripts/build-radicals.mjs):
//   curl -L -o /tmp/unihan.zip https://www.unicode.org/Public/15.1.0/ucd/Unihan.zip
//   mkdir -p /tmp/unihan
//   unzip -o -j /tmp/unihan.zip "Unihan_Readings.txt" "Unihan_Variants.txt" \
//     "Unihan_IRGSources.txt" -d /tmp/unihan
// ---------------------------------------------------------------------------
