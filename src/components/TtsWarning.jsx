import { useEffect, useState } from 'react'
import { hasChineseVoice, isTtsSupported, speakChinese } from '../lib/tts'

export default function TtsWarning() {
  const [status, setStatus] = useState('checking') // checking | ok | missing-voice | unsupported
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!isTtsSupported()) {
      setStatus('unsupported')
      return
    }
    // Danh sach giong doc co the tai bat dong bo, cho mot chut roi kiem tra lai.
    const timer = setTimeout(() => {
      setStatus(hasChineseVoice() ? 'ok' : 'missing-voice')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed || status === 'checking' || status === 'ok') return null

  return (
    <div className="mx-4 mt-3 rounded-xl bg-amber-100 p-3 text-xs text-amber-800">
      <div className="flex items-start justify-between gap-2">
        <p className="flex-1">
          {status === 'unsupported'
            ? '⚠️ Trình duyệt này không hỗ trợ đọc giọng tiếng Trung. Hãy thử mở app bằng Chrome hoặc Safari.'
            : '⚠️ Máy của bạn có thể chưa cài giọng đọc tiếng Trung nên nút 🔊 sẽ không phát ra tiếng. Vào Cài đặt máy → Ngôn ngữ & giọng nói (Text-to-speech) → thêm giọng "Chinese (Mandarin)" rồi quay lại thử.'}
        </p>
        <button onClick={() => setDismissed(true)} className="shrink-0 text-amber-600">
          ✕
        </button>
      </div>
      <button
        onClick={() => speakChinese('你好', { onEnd: () => setStatus(hasChineseVoice() ? 'ok' : status) })}
        className="mt-2 rounded-lg bg-amber-600 px-3 py-1 font-semibold text-white"
      >
        🔊 Thử phát âm lại
      </button>
    </div>
  )
}
