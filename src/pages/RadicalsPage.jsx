import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { ArrowRightIcon, VolumeIcon } from '../components/Icons'
import { KANGXI_RADICALS } from '../data/radicalsKangxi'
import { groupWordsByRadical, radicalGlyph } from '../lib/radicalIndex'
import { ALL_WORDS } from '../data/levels'
import { speakChinese, stopSpeaking } from '../lib/tts'
import { useScrollRestoration } from '../lib/useScrollRestoration'

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

export default function RadicalsPage() {
  useScrollRestoration('radicals')
  const [query, setQuery] = useState('')
  const [onlyWithWords, setOnlyWithWords] = useState(false)

  // Dung tieng dang doc khi roi trang, giong cac trang hoc khac.
  useEffect(() => stopSpeaking, [])

  const examplesByRadical = useMemo(() => groupWordsByRadical(ALL_WORDS, 8), [])

  const withWordsCount = useMemo(
    () => KANGXI_RADICALS.filter((r) => examplesByRadical.has(r.n)).length,
    [examplesByRadical]
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return KANGXI_RADICALS.filter((r) => {
      if (onlyWithWords && !examplesByRadical.has(r.n)) return false
      if (!q) return true
      if (String(r.n) === q) return true
      return (
        r.symbol === query.trim() ||
        r.variants.some((v) => v === query.trim()) ||
        normalize(r.pinyin).includes(q) ||
        normalize(r.name).includes(q) ||
        normalize(r.meaning).includes(q)
      )
    })
  }, [query, onlyWithWords, examplesByRadical])

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">🀄 Bộ thủ</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        214 bộ thủ dựng nên chữ Hán. Nhận ra bộ thủ giúp đoán được nghĩa và nhớ chữ lâu hơn. Trong
        đó {withWordsCount} bộ đang xuất hiện trong từ vựng của bạn.
      </p>

      <Link
        to="/bo-thu/tro-choi"
        className="mb-4 flex items-center justify-between rounded-2xl bg-gradient-to-br from-teal-500 to-brand-600 p-4 text-white shadow-sm"
      >
        <div>
          <p className="text-base">🧩 Đố bộ thủ</p>
          <p className="text-xs text-white/80">Nhìn chữ đoán bộ — 10 câu một lượt</p>
        </div>
        <ArrowRightIcon width={28} height={28} />
      </Link>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm theo chữ bộ, tên (thuy), pinyin (shui) hoặc nghĩa (nước)..."
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-400 focus:border-brand-500"
      />

      <div className="mb-4 mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => setOnlyWithWords(false)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            onlyWithWords ? 'bg-gray-100 text-gray-500' : 'bg-brand-700 text-white'
          }`}
        >
          Tất cả ({KANGXI_RADICALS.length})
        </button>
        <button
          onClick={() => setOnlyWithWords(true)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            onlyWithWords ? 'bg-brand-700 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          Có trong bài học ({withWordsCount})
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl bg-white p-4 text-center text-sm text-gray-500 shadow-sm">
          Không tìm thấy bộ thủ nào khớp với &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="space-y-2">
          {filtered.map((r, i) => {
            const examples = examplesByRadical.get(r.n) || []
            const glyph = radicalGlyph(r)
            return (
              <div
                key={r.n}
                className="animate-card-in rounded-2xl border-l-4 border-l-teal-400 bg-white p-3 shadow-sm"
                style={{ animationDelay: `${Math.min(i, 10) * 25}ms` }}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => speakChinese(r.symbol)}
                    title={`Nghe đọc ${r.pinyin}`}
                    className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-teal-100 text-teal-700"
                  >
                    <span className="text-3xl leading-none">{glyph}</span>
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="text-base text-gray-800">Bộ {r.name}</p>
                      <span className="text-[11px] text-gray-400">#{r.n}</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {r.pinyin} · {r.strokes} nét
                      {glyph !== r.symbol && ` · bộ gốc là ${r.symbol}`}
                    </p>
                    <p className="text-sm text-gray-600">{r.meaning}</p>

                    {examples.length > 0 ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {examples.map((e) => (
                          <button
                            key={e.hanzi}
                            onClick={() => speakChinese(e.hanzi)}
                            title={`${e.pinyin} - ${e.meaning}`}
                            className="flex items-baseline gap-1 rounded-lg bg-gray-50 px-2 py-1"
                          >
                            <span className="text-sm text-gray-800">{e.hanzi}</span>
                            <span className="text-[11px] text-gray-500">{e.meaning}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-xs text-gray-400">
                        Chưa có từ nào trong bài học dùng bộ này.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <VolumeIcon width={16} height={16} /> Bấm vào chữ bộ hoặc từ ví dụ để nghe đọc
      </p>
    </div>
  )
}
