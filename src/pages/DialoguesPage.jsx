import { Link } from 'react-router-dom'
import { DIALOGUES } from '../data/dialogues'
import { useProgress } from '../store/ProgressContext'
import { accentFor } from '../lib/colors'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

export default function DialoguesPage() {
  const { completedDialogues } = useProgress()
  const doneCount = DIALOGUES.filter((d) => completedDialogues.includes(d.key)).length
  // Cac hoi thoai deu dung tu vung co ban muc do tuong duong (da kiem tra tu
  // du lieu thuc), khong co gradient de-kho ro ret de sap xep - nhung van
  // danh so + danh dau "Tiep theo" de biet dang nghe den dau, khong con cam
  // giac roi rac, khong bam thu tu lung tung.
  const nextKey = DIALOGUES.find((d) => !completedDialogues.includes(d.key))?.key

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <Link to="/" className="text-gray-500">
          <ArrowLeftIcon />
        </Link>
        <h1 className="text-2xl text-brand-800">Hội thoại</h1>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Xem tiếng Trung được dùng thế nào trong tình huống thật. Đã nghe {doneCount}/{DIALOGUES.length}.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {DIALOGUES.map((d, i) => {
          const accent = accentFor(i)
          const done = completedDialogues.includes(d.key)
          const isNext = !done && d.key === nextKey
          return (
            <Link
              key={d.key}
              to={`/hoi-thoai/${d.key}`}
              className={`animate-card-in relative rounded-2xl border bg-white p-4 shadow-sm ${
                isNext ? 'border-2 border-brand-500' : accent.border
              }`}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <span className="absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-500">
                {i + 1}
              </span>
              {done && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white">
                  <CheckIcon width={12} height={12} />
                </span>
              )}
              <span className="mt-4 block text-3xl">{d.icon}</span>
              <p className="mt-2 text-base text-gray-800">{d.title}</p>
              <div className="flex items-center justify-between">
                <p className={`text-xs ${accent.text}`}>{d.lines.length} câu</p>
                {isNext && <span className="text-[10px] font-semibold text-brand-600">👉 Tiếp theo</span>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
