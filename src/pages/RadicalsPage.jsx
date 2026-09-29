import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { VolumeIcon } from '../components/Icons'
import { KANGXI_RADICALS } from '../data/radicalsKangxi'
import { countWordsByRadical, groupWordsByRadical, radicalGlyph } from '../lib/radicalIndex'
import { ALL_WORDS } from '../data/levels'
import { accentFor } from '../lib/colors'
import { speakChinese, stopSpeaking } from '../lib/tts'
import { useScrollRestoration } from '../lib/useScrollRestoration'

// Chia 214 bo theo muc do gap trong chinh tu vung cua nguoi hoc, thay vi de lan
// mot danh sach 214 dong. Con so that: 18 bo dau tien da dung trong 363/693 chu
// don - biet may bo nay la doc duoc qua nua so chu dang hoc.
const TIERS = [
  {
    key: 'core',
    label: 'Rất hay gặp',
    min: 10,
    chip: 'bg-candy-500 text-white',
    chipIdle: 'bg-candy-100 text-candy-700',
    dot: 'bg-candy-500'
  },
  {
    key: 'common',
    label: 'Hay gặp',
    min: 4,
    chip: 'bg-teal-500 text-white',
    chipIdle: 'bg-teal-100 text-teal-700',
    dot: 'bg-teal-500'
  },
  {
    key: 'rare',
    label: 'Ít gặp',
    min: 1,
    chip: 'bg-sun-500 text-white',
    chipIdle: 'bg-sun-100 text-sun-700',
    dot: 'bg-sun-500'
  },
  {
    key: 'none',
    label: 'Chưa gặp',
    min: 0,
    chip: 'bg-gray-500 text-white',
    chipIdle: 'bg-gray-100 text-gray-600',
    dot: 'bg-gray-300'
  }
]

const tierOfCount = (count) => TIERS.find((t) => count >= t.min)

// Bo dau tieng Viet + bo dau thanh cua pinyin de go tim de hon: go "thuy" ra
// "Thuỷ", go "shui" ra "shuǐ".
function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
}

// Danh sach day du cac chu dung mot bo. Xuat ra de kiem tra duoc bang script
// (phan mo ra chi hien khi bam nen khong thay duoc trong HTML render lan dau).
export function RadicalWordList({ words, accent }) {
  if (words.length === 0) {
    return (
      <p className="border-t border-gray-100 px-3 pb-2 pt-2 text-xs text-gray-400">
        Chưa có từ nào trong bài học dùng bộ này.
      </p>
    )
  }
  return (
    <ul className="border-t border-gray-100 px-2 pb-2 pt-1">
      {words.map((w) => (
        <li key={w.hanzi}>
          <button
            onClick={() => speakChinese(w.hanzi)}
            title={`Nghe đọc ${w.pinyin}`}
            className="flex w-full items-baseline gap-2 rounded-lg px-2 py-1 text-left active:bg-gray-50"
          >
            <span className="w-9 shrink-0 text-lg text-gray-800">{w.hanzi}</span>
            <span className={`w-20 shrink-0 text-xs ${accent.text}`}>{w.pinyin}</span>
            <span className="min-w-0 flex-1 text-xs text-gray-500">{w.meaning}</span>
            <VolumeIcon width={15} height={15} className="shrink-0 text-gray-300" />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function RadicalsPage() {
  useScrollRestoration('radicals')
  const [query, setQuery] = useState('')
  const [tierKey, setTierKey] = useState('core')
  // Mo mot bo thi dong bo dang mo - danh sach 214 bo da dai, mo nhieu bo cung
  // luc thi khong con gon nua.
  const [openN, setOpenN] = useState(null)

  // Dung tieng dang doc khi roi trang, giong cac trang hoc khac.
  useEffect(() => stopSpeaking, [])

  // Lay HET chu cua tung bo (khong cat bot) de bam vao la xem duoc ca danh sach.
  const wordsByRadical = useMemo(() => groupWordsByRadical(ALL_WORDS, Infinity), [])
  // So chu THAT, tinh rieng theo tung bo.
  const countsByRadical = useMemo(() => countWordsByRadical(ALL_WORDS), [])

  const withTier = useMemo(() => {
    const rows = KANGXI_RADICALS.map((r) => {
      const words = wordsByRadical.get(r.n) || []
      const count = countsByRadical.get(r.n) || 0
      return { r, words, count, tier: tierOfCount(count) }
    })
    // Mac dinh xep bo hay gap len truoc de mo trang la thay ngay phan quan
    // trong; trong cung mot muc van giu thu tu 1-214 chuan.
    return rows.sort((a, b) => b.count - a.count || a.r.n - b.r.n)
  }, [wordsByRadical, countsByRadical])

  const tierCounts = useMemo(() => {
    const counts = {}
    for (const row of withTier) counts[row.tier.key] = (counts[row.tier.key] || 0) + 1
    return counts
  }, [withTier])

  const searching = query.trim().length > 0

  // Khi go tim thi tim trong CA 214 bo (bo qua tab dang mo) - nguoi dung go ten
  // mot bo bat ky thi khong phai doan no nam o muc nao.
  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return withTier.filter((row) => {
      if (!q) return row.tier.key === tierKey
      const { r } = row
      if (String(r.n) === q) return true
      return (
        r.symbol === query.trim() ||
        r.variants.some((v) => v === query.trim()) ||
        normalize(r.pinyin).includes(q) ||
        normalize(r.name).includes(q) ||
        normalize(r.meaning).includes(q)
      )
    })
  }, [withTier, query, tierKey])

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">🀄 Bộ thủ</h1>
        <Link
          to="/bo-thu/tro-choi"
          className="ml-auto shrink-0 rounded-full bg-gradient-to-br from-teal-500 to-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
        >
          🧩 Đố bộ thủ
        </Link>
      </div>
      <p className="mb-3 text-xs text-gray-400">
        214 bộ dựng nên chữ Hán · số # là thứ tự của bộ trong bảng Khang Hy, dùng để tra từ điển
      </p>

      <div className="relative mb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm bộ: chữ, tên (thuy), pinyin (shui), nghĩa (nước)..."
          className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-3 pr-9 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-400 focus:border-brand-500"
        />
        {searching && (
          <button
            onClick={() => setQuery('')}
            aria-label="Xoá tìm kiếm"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-sm text-gray-400"
          >
            ✕
          </button>
        )}
      </div>

      {searching ? (
        <p className="mb-2 text-xs text-gray-500">Tìm thấy {filtered.length} bộ trong cả 214 bộ</p>
      ) : (
        <div className="mb-3 flex gap-1.5 overflow-x-auto pb-0.5">
          {TIERS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTierKey(t.key)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                tierKey === t.key ? t.chip : t.chipIdle
              }`}
            >
              {t.label} {tierCounts[t.key] || 0}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="rounded-xl bg-white p-4 text-center text-sm text-gray-500 shadow-sm">
          Không tìm thấy bộ thủ nào khớp với &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-1.5">
          {filtered.map(({ r, words, count, tier }, i) => {
            // Mau xoay vong theo VI TRI trong danh sach dang hien, khong theo so
            // thu tu bo. Danh sach sap theo muc do gap chu khong theo so thu tu,
            // nen to mau theo so thu tu thi hai the canh nhau de trung mau: rieng
            // 18 bo dau da co 3 cap lien ke trung (人 #9 voi 木 #75, 土 #32 voi
            // 火 #86, 心 #61 voi 目 #109).
            const accent = accentFor(i)
            const glyph = radicalGlyph(r)
            const open = openN === r.n
            // Dang viet trong chu (氵) khac bo goc (水) thi moi can noi them.
            const origin = glyph !== r.symbol ? ` · gốc là ${r.symbol}` : ''
            return (
              <div
                key={r.n}
                className={`animate-card-in rounded-xl border-l-4 bg-white shadow-sm ${accent.leftBorder}`}
              >
                <div className="flex items-start gap-1 px-3 py-2">
                  <button
                    onClick={() => setOpenN(open ? null : r.n)}
                    className="flex min-w-0 flex-1 items-start gap-3 text-left"
                  >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl ${accent.bg} ${accent.text}`}
                  >
                    {glyph}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-1.5">
                      <span className={`h-2 w-2 shrink-0 self-center rounded-full ${tier.dot}`} />
                      <span className="text-base text-gray-800">{r.name}</span>
                      <span className="ml-auto shrink-0 text-xs text-gray-400">
                        #{r.n} · {r.pinyin} · {r.strokes} nét
                      </span>
                    </span>
                    <span className="block text-xs text-gray-500">
                      {r.meaning}
                      {origin}
                      {count > 0 && ` · ${count} chữ`}
                    </span>
                  </span>
                  </button>

                  {/* Nghe doc rieng bo nay. Truoc day bam vao o chu bo la nghe,
                      nhung tu khi ca the thanh nut mo danh sach thi khong con
                      cho nao phat am cho bo ca. */}
                  <button
                    onClick={() => speakChinese(r.symbol)}
                    title={`Nghe đọc ${r.symbol} (${r.pinyin})`}
                    aria-label={`Nghe đọc bộ ${r.name}`}
                    className={`shrink-0 self-center p-1 ${accent.text}`}
                  >
                    <VolumeIcon width={18} height={18} />
                  </button>

                  <button
                    onClick={() => setOpenN(open ? null : r.n)}
                    aria-label={open ? `Đóng bộ ${r.name}` : `Xem các chữ dùng bộ ${r.name}`}
                    className={`shrink-0 self-center p-1 text-xs text-gray-400 ${
                      open ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </button>
                </div>

                {open && <RadicalWordList words={words} accent={accent} />}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
