import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../components/Icons'
import { askDeepseek, hasDeepseekKey, DeepseekError } from '../lib/deepseek'
import { loadJSON, saveJSON } from '../lib/storage'

const HISTORY_KEY = 'aiChatHistory'
const HISTORY_LIMIT = 40

const SYSTEM_PROMPT = `Bạn là một người bạn Trung Quốc thân thiện tên Gấu Trúc, đang trò chuyện để giúp một người Việt Nam luyện hội thoại tiếng Trung (trình độ HSK1-HSK6).
Quy tắc trả lời:
- Luôn trả lời bằng tiếng Trung giản thể trước, sau đó xuống dòng ghi pinyin, rồi xuống dòng ghi nghĩa tiếng Việt.
- Câu tiếng Trung ngắn gọn, tự nhiên, ưu tiên từ vựng thông dụng HSK1-HSK3 trừ khi người dùng chủ động dùng từ khó hơn.
- Nếu người dùng viết sai ngữ pháp hoặc dùng từ tiếng Trung không chính xác, nhẹ nhàng chỉ ra chỗ sai và đưa câu đúng, rồi mới tiếp tục hội thoại.
- Giữ không khí vui vẻ, khích lệ.`

export default function AiChatPage() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState(() => loadJSON(HISTORY_KEY, []))
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef(null)
  const keyReady = hasDeepseekKey()

  useEffect(() => {
    saveJSON(HISTORY_KEY, messages.slice(-HISTORY_LIMIT))
  }, [messages])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return
    setError('')
    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const reply = await askDeepseek([{ role: 'system', content: SYSTEM_PROMPT }, ...next])
      setMessages((cur) => [...cur, { role: 'assistant', content: reply }])
    } catch (e) {
      setError(e instanceof DeepseekError ? e.message : 'Có lỗi xảy ra, thử lại sau.')
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setMessages([])
    saveJSON(HISTORY_KEY, [])
  }

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col px-4 pt-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-gray-500">
            <ArrowLeftIcon />
          </button>
          <h1 className="text-xl text-brand-800">Trò chuyện với AI 🐼</h1>
        </div>
        {messages.length > 0 && (
          <button onClick={handleClear} className="text-xs text-gray-400 underline">
            Xóa hội thoại
          </button>
        )}
      </div>

      {!keyReady ? (
        <div className="rounded-2xl bg-sun-100 p-4 text-sm text-gray-700">
          Cần thêm API key DeepSeek trước khi dùng tính năng này.{' '}
          <button onClick={() => navigate('/cai-dat')} className="font-semibold text-brand-700 underline">
            Vào Cài đặt
          </button>
        </div>
      ) : (
        <>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto pb-3">
            {messages.length === 0 && (
              <p className="rounded-2xl bg-white p-4 text-sm text-gray-500 shadow-sm">
                Gõ một câu tiếng Trung hoặc tiếng Việt để bắt đầu trò chuyện. AI sẽ trả lời bằng tiếng Trung kèm pinyin
                và nghĩa tiếng Việt, đồng thời sửa lỗi nếu bạn viết sai.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl p-3 text-sm shadow-sm ${
                  m.role === 'user' ? 'ml-auto bg-brand-700 text-white' : 'bg-white text-gray-800'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-white p-3 text-sm text-gray-400 shadow-sm">Đang trả lời...</div>
            )}
          </div>

          {error && <p className="mb-2 text-xs text-red-500">{error}</p>}

          <div className="flex gap-2 border-t border-gray-100 pt-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
              placeholder="Nhập tin nhắn..."
              rows={1}
              className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="rounded-xl bg-brand-700 px-4 text-sm font-semibold text-white disabled:opacity-50"
            >
              Gửi
            </button>
          </div>
        </>
      )}
    </div>
  )
}
