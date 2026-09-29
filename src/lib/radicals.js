// Goi y theo BO THU (部首) cho chu ghep hinh thanh - khac voi chu tuong hinh
// (PictographIcon.jsx) o cho: ca chu khong "giong hinh" gi ca, nhung mot
// phan cua no (bo thu) mang y nghia lien quan, giup doan/nho nghia.
// Chi ap dung cho tu don 1 chu (giong nguyen tac cua chu tuong hinh).
//
// Truoc day file nay giu mot bang go tay ~90 chu / 19 bo. Nay lay tu du lieu
// chuan 214 bo (xem src/lib/radicalIndex.js va scripts/build-radicals.mjs), nen
// goi y hien ra duoc cho ca 693 chu don trong tu vung HSK1-6.
import { getRadical, radicalGlyph, radicalOf } from './radicalIndex'

export function getRadicalHint(char) {
  const n = radicalOf(char)
  if (!n) return null
  const r = getRadical(n)
  return `Có bộ ${radicalGlyph(r)} (Bộ ${r.name}) - ${r.meaning}.`
}

export function hasRadicalHint(char) {
  return radicalOf(char) !== null
}

export function getRadicalSymbol(char) {
  const n = radicalOf(char)
  if (!n) return null
  return radicalGlyph(getRadical(n))
}
