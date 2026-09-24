// Bang mau xoay vong, dung de "tra" mau cho tung the/badge trong danh sach
// (bai hoc, tu vung, chu Han...) de giao dien do nham chan hon.
export const ACCENTS = [
  { bg: 'bg-sky-100', border: 'border-sky-200', text: 'text-sky-700', solid: 'bg-sky-500', leftBorder: 'border-l-sky-400', topBorder: 'border-t-sky-400' },
  { bg: 'bg-sun-100', border: 'border-sun-200', text: 'text-sun-700', solid: 'bg-sun-500', leftBorder: 'border-l-sun-400', topBorder: 'border-t-sun-400' },
  { bg: 'bg-candy-100', border: 'border-candy-200', text: 'text-candy-700', solid: 'bg-candy-500', leftBorder: 'border-l-candy-400', topBorder: 'border-t-candy-400' },
  { bg: 'bg-teal-100', border: 'border-teal-200', text: 'text-teal-700', solid: 'bg-teal-500', leftBorder: 'border-l-teal-400', topBorder: 'border-t-teal-400' },
  { bg: 'bg-brand-100', border: 'border-brand-200', text: 'text-brand-700', solid: 'bg-brand-500', leftBorder: 'border-l-brand-400', topBorder: 'border-t-brand-400' },
  { bg: 'bg-gold-100', border: 'border-gold-100', text: 'text-gold-600', solid: 'bg-gold-500', leftBorder: 'border-l-gold-400', topBorder: 'border-t-gold-400' }
]

export function accentFor(index) {
  return ACCENTS[index % ACCENTS.length]
}
