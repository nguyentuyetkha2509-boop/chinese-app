import { useState } from 'react'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { playCorrect, playWrong } from '../lib/sfx'

// Hien mot lop phu toan man khi da dang nhap nhung chua dat bi danh, de bi
// danh (khong phai ten/anh Google that) hien tren bang xep hang cong khai.
export default function NicknamePrompt() {
  const { needsNickname, submitNickname } = useFirebaseSync()
  const [value, setValue] = useState('')
  const [busy, setBusy] = useState(false)

  if (!needsNickname) return null

  async function handleSubmit() {
    const nickname = value.trim()
    if (!nickname) return
    setBusy(true)
    try {
      await submitNickname(nickname)
      playCorrect()
    } catch {
      playWrong()
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-lg text-brand-800">🏆 Đặt biệt danh</p>
        <p className="mt-1 text-sm text-gray-500">
          Biệt danh này sẽ hiện trên bảng xếp hạng thay vì tên/ảnh Google thật của bạn.
        </p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={20}
          placeholder="Ví dụ: Gấu trúc chăm chỉ"
          className="mt-4 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm"
          autoFocus
        />
        <button
          onClick={handleSubmit}
          disabled={busy || !value.trim()}
          className="mt-3 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          {busy ? 'Đang lưu...' : 'Xác nhận'}
        </button>
      </div>
    </div>
  )
}
