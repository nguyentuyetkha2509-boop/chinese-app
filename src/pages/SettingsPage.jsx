import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { exportAllData, importAllData } from '../lib/storage'
import { getDailyNewWordLimit, setDailyNewWordLimit, NEW_WORD_LIMIT_OPTIONS } from '../lib/curriculum'
import { playCorrect, playWrong } from '../lib/sfx'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

function download(filename, text) {
  const blob = new Blob([text], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export default function SettingsPage() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [message, setMessage] = useState(null)
  const [newWordLimit, setNewWordLimit] = useState(() => getDailyNewWordLimit())

  function handleLimitChange(n) {
    setNewWordLimit(n)
    setDailyNewWordLimit(n)
  }

  function handleExport() {
    const data = exportAllData()
    const today = new Date().toISOString().slice(0, 10)
    download(`pandachinese-sao-luu-${today}.json`, JSON.stringify(data, null, 2))
    setMessage({ type: 'ok', text: 'Đã tải file sao lưu về máy.' })
    playCorrect()
  }

  function handleImportClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result)
        importAllData(data)
        setMessage({ type: 'ok', text: 'Đã khôi phục dữ liệu! Đang tải lại trang...' })
        playCorrect()
        setTimeout(() => window.location.reload(), 1000)
      } catch {
        setMessage({ type: 'error', text: 'File không hợp lệ, không thể khôi phục.' })
        playWrong()
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Cài đặt</h1>
      </div>

      <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-base text-gray-800">Giới hạn từ mới mỗi ngày</p>
        <p className="mt-1 text-xs text-gray-500">
          Học ít từ mới mỗi ngày nhưng đều đặn giúp nhớ lâu hơn và tránh dồn ứ ôn tập. Chỉ áp dụng cho mục "Học hôm
          nay" ở trang chủ, không khóa các bài học khác.
        </p>
        <div className="mt-3 flex gap-2">
          {NEW_WORD_LIMIT_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => handleLimitChange(n)}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                newWordLimit === n ? 'bg-brand-700 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {n} từ
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-base text-gray-800">Sao lưu & khôi phục tiến độ</p>
        <p className="mt-1 text-xs text-gray-500">
          Toàn bộ tiến độ học (từ đã học, XP, streak, huy hiệu...) chỉ lưu trên trình duyệt này. Xóa cache hoặc đổi
          điện thoại sẽ mất hết nếu chưa sao lưu.
        </p>

        <button onClick={handleExport} className="mt-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white">
          ⬇️ Tải file sao lưu
        </button>

        <button
          onClick={handleImportClick}
          className="mt-2 w-full rounded-xl border border-brand-300 py-2.5 text-sm font-semibold text-brand-700"
        >
          ⬆️ Khôi phục từ file sao lưu
        </button>
        <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={handleFileChange} />

        <p className="mt-3 text-xs text-gray-400">
          Khôi phục sẽ ghi đè tiến độ hiện tại trên máy này bằng dữ liệu trong file.
        </p>

        {message && (
          <div
            className={`mt-3 flex items-center gap-2 rounded-xl p-2.5 text-xs font-semibold ${
              message.type === 'ok' ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-600'
            }`}
          >
            {message.type === 'ok' && <CheckIcon width={16} height={16} />}
            {message.text}
          </div>
        )}
      </div>
    </div>
  )
}
