// Tra bo thu cua mot chu Han va liet ke cac chu cung bo co trong tu vung cua
// app - de trang Bo thu lay vi du bang chinh nhung tu nguoi hoc dang gap.
//
// Bang tra chu -> bo thu nam o src/data/charRadicals.js, sinh san tu du lieu
// chuan cua Unicode (xem scripts/build-radicals.mjs). Khong doan bo theo mat chu:
// chu Han trong Unicode la mot ma duy nhat, khong phai phep ghep cac bo, nen
// khong the tim bo bang cach tim chuoi con (河 KHONG chua 氵 nhu mot chuoi con).
import { KANGXI_RADICALS } from '../data/radicalsKangxi'
import { CHAR_RADICAL_N } from '../data/charRadicals'

export const RADICAL_BY_NUMBER = new Map(KANGXI_RADICALS.map((r) => [r.n, r]))

export function getRadical(n) {
  return RADICAL_BY_NUMBER.get(n) || null
}

// Dang viet cua bo khi ghep vao chu (85 水 -> 氵). Day moi la hinh nguoi hoc
// nhin thay trong tu, nen hien dang nay truoc.
export function radicalGlyph(r) {
  return r.variants[0] || r.symbol
}

// Bo thu cua 1 chu. Tra null neu chu ghep (nhieu hon 1 chu) hoac chu khong co
// trong bang (chu ngoai tu vung HSK1-6 cua app).
export function radicalOf(char) {
  if (!char || [...char].length !== 1) return null
  return CHAR_RADICAL_N[char] || null
}

// Nhom cac tu don trong tu vung theo bo thu: Map<so bo, [{hanzi, pinyin, meaning}]>.
// Tu vung dua vao theo thu tu HSK1 -> HSK6 nen vi du cua moi bo luon la nhung
// tu de hoc truoc.
export function groupWordsByRadical(words, limit = 8) {
  const byRadical = new Map()
  for (const w of words) {
    if ([...w.hanzi].length !== 1) continue
    const n = radicalOf(w.hanzi)
    if (!n) continue
    const list = byRadical.get(n)
    if (list) {
      if (list.length >= limit) continue
      if (list.some((e) => e.hanzi === w.hanzi)) continue
      list.push({ hanzi: w.hanzi, pinyin: w.pinyin, meaning: w.meaning })
    } else {
      byRadical.set(n, [{ hanzi: w.hanzi, pinyin: w.pinyin, meaning: w.meaning }])
    }
  }
  return byRadical
}

// Dem so chu RIENG BIET cua tung bo, khong cat bot: Map<so bo, so chu>.
//
// Phai tach khoi groupWordsByRadical vi ham do cat o `limit` de hien thi - lay
// do dai cua danh sach da cat thi moi bo deu toi da `limit` (mac dinh 8), khong
// con phan biet duoc bo nao dung nhieu (bo 手 co 67 chu nhung se hien la 8).
export function countWordsByRadical(words) {
  const seenByRadical = new Map()
  for (const w of words) {
    if ([...w.hanzi].length !== 1) continue
    const n = radicalOf(w.hanzi)
    if (!n) continue
    let seen = seenByRadical.get(n)
    if (!seen) seenByRadical.set(n, (seen = new Set()))
    seen.add(w.hanzi)
  }
  const counts = new Map()
  for (const [n, seen] of seenByRadical) counts.set(n, seen.size)
  return counts
}
