import { Link, useSearchParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { CHAR_WEBS, CHAR_WEB_GROUPS } from '../data/charWebs'

// Danh sach chu co so do, loc theo nhom (luu o ?nhom= de quay lai van dung nhom).
export default function CharWebsPage() {
  const [params, setParams] = useSearchParams()
  const group = CHAR_WEB_GROUPS.some((g) => g.key === params.get('nhom')) ? params.get('nhom') : CHAR_WEB_GROUPS[0].key
  const list = CHAR_WEBS.filter((c) => c.group === group)

  return (
    <div className="px-4 pt-6 pb-10">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">Sơ đồ chữ</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Nhớ một chữ, mở ra cả chục từ. Chọn một chữ để xem các từ ghép xoay quanh nó.
      </p>

      <div className="mb-4 flex gap-2">
        {CHAR_WEB_GROUPS.map((g) => (
          <button
            key={g.key}
            onClick={() => setParams({ nhom: g.key }, { replace: true })}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              g.key === group ? 'bg-brand-700 text-white' : 'bg-white text-gray-600 shadow-sm'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {list.map((c) => (
          <Link
            key={c.char}
            to={`/so-do-chu/${encodeURIComponent(c.char)}`}
            className="flex flex-col items-center rounded-2xl bg-white p-3 shadow-sm active:bg-brand-50"
          >
            <span className="text-3xl text-gray-900">{c.char}</span>
            <span className="mt-1 text-xs font-semibold text-brand-700">{c.hanviet}</span>
            <span className="text-center text-xs text-gray-500">{c.meaning}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
