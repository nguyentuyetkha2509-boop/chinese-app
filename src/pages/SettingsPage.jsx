import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { exportAllData, importAllData } from '../lib/storage'
import { getDailyNewWordLimit, setDailyNewWordLimit, NEW_WORD_LIMIT_OPTIONS } from '../lib/curriculum'
import { useGistSync } from '../store/GistSyncContext'
import { playCorrect, playWrong } from '../lib/sfx'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

const TOKEN_CREATE_URL =
  'https://github.com/settings/tokens/new?scopes=gist&description=PandaChinese%20Sync'

function formatTime(ts) {
  if (!ts) return null
  return new Date(ts).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
}

function GistSyncSection() {
  const { connected, status, error, lastSyncedAt, connect, disconnect, pushNow, pullNow } = useGistSync()
  const [tokenInput, setTokenInput] = useState('')
  const [connectChoice, setConnectChoice] = useState(null) // { hasRemoteData, remoteUpdatedAt } | null
  const [busy, setBusy] = useState(false)

  async function handleConnect() {
    if (!tokenInput.trim()) return
    setBusy(true)
    try {
      const info = await connect(tokenInput.trim())
      setTokenInput('')
      if (info.hasRemoteData) {
        setConnectChoice(info)
      } else {
        await pushNow()
      }
      playCorrect()
    } catch {
      playWrong()
    } finally {
      setBusy(false)
    }
  }

  async function handleChoicePull() {
    setBusy(true)
    await pullNow().catch(() => playWrong())
    setConnectChoice(null)
    setBusy(false)
  }

  async function handleChoicePush() {
    setBusy(true)
    await pushNow()
    setConnectChoice(null)
    setBusy(false)
    playCorrect()
  }

  async function handleManualSync() {
    setBusy(true)
    await pushNow()
    setBusy(false)
  }

  async function handleManualPull() {
    if (!window.confirm('Tải về sẽ GHI ĐÈ tiến độ hiện tại trên máy này bằng bản trên GitHub. Tiếp tục?')) return
    setBusy(true)
    await pullNow().catch(() => playWrong())
    setBusy(false)
  }

  function handleDisconnect() {
    if (!window.confirm('Ngắt kết nối? App sẽ không còn tự động sao lưu lên GitHub nữa.')) return
    disconnect()
  }

  return (
    <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-base text-gray-800">Đồng bộ qua GitHub (khuyến nghị)</p>
      <p className="mt-1 text-xs text-gray-500">
        Tự động sao lưu tiến độ lên 1 Gist riêng tư của bạn. Mở app trên điện thoại hay máy tính khác đều lấy đúng
        bản mới nhất - không sợ Safari tự xóa dữ liệu hay đổi máy bị mất.
      </p>

      {!connected ? (
        <div className="mt-3">
          <ol className="list-inside list-decimal space-y-1 text-xs text-gray-600">
            <li>
              Mở{' '}
              <a href={TOKEN_CREATE_URL} target="_blank" rel="noreferrer" className="font-semibold text-brand-600 underline">
                trang tạo token GitHub
              </a>{' '}
              (đã điền sẵn quyền "gist")
            </li>
            <li>Bấm "Generate token" ở cuối trang, rồi copy token (dạng ghp_...)</li>
            <li>Dán vào ô bên dưới và bấm Kết nối</li>
          </ol>
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxx"
            className="mt-3 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"
          />
          <button
            onClick={handleConnect}
            disabled={busy || !tokenInput.trim()}
            className="mt-2 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {busy ? 'Đang kết nối...' : 'Kết nối'}
          </button>
          <p className="mt-2 text-[11px] text-gray-400">
            Token chỉ lưu trên máy bạn và chỉ có quyền tạo/sửa gist, không đụng được gì khác trong tài khoản GitHub.
          </p>
        </div>
      ) : connectChoice ? (
        <div className="mt-3 rounded-xl bg-sun-100 p-3">
          <p className="text-xs text-gray-700">
            Tìm thấy bản sao lưu trên GitHub (cập nhật lúc {formatTime(connectChoice.remoteUpdatedAt)}). Bạn muốn
            dùng bản nào?
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleChoicePull}
              disabled={busy}
              className="flex-1 rounded-lg bg-white py-2 text-xs font-semibold text-brand-700"
            >
              Tải về (ghi đè máy này)
            </button>
            <button
              onClick={handleChoicePush}
              disabled={busy}
              className="flex-1 rounded-lg bg-brand-700 py-2 text-xs font-semibold text-white"
            >
              Đẩy lên (ghi đè bản trên mây)
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <p className="text-xs text-gray-500">
            {status === 'syncing' && 'Đang đồng bộ...'}
            {status === 'synced' && lastSyncedAt && `✅ Đã đồng bộ lúc ${formatTime(lastSyncedAt)}`}
            {status === 'error' && `⚠️ ${error || 'Có lỗi khi đồng bộ.'}`}
            {status === 'idle' && lastSyncedAt && `Lần đồng bộ gần nhất: ${formatTime(lastSyncedAt)}`}
            {status === 'idle' && !lastSyncedAt && 'Đã kết nối, sẽ tự đồng bộ khi bạn học.'}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleManualSync}
              disabled={busy}
              className="flex-1 rounded-xl bg-brand-700 py-2.5 text-xs font-semibold text-white disabled:opacity-50"
            >
              Đồng bộ ngay
            </button>
            <button
              onClick={handleManualPull}
              disabled={busy}
              className="flex-1 rounded-xl border border-brand-300 py-2.5 text-xs font-semibold text-brand-700 disabled:opacity-50"
            >
              Tải về từ GitHub
            </button>
          </div>
          <button onClick={handleDisconnect} className="mt-2 w-full text-center text-[11px] text-gray-400 underline">
            Ngắt kết nối
          </button>
        </div>
      )}
    </div>
  )
}

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

      <GistSyncSection />

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-base text-gray-800">Sao lưu & khôi phục tiến độ (thủ công)</p>
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
