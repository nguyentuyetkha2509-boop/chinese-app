import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../components/Icons'
import { askDeepseek, hasDeepseekKey, DeepseekError } from '../lib/deepseek'

const SYSTEM_PROMPT = `Bạn là giáo viên tiếng Trung chấm bài viết cho người Việt Nam học tiếng Trung. Khi nhận một câu hoặc đoạn văn tiếng Trung của học viên, hãy trả lời bằng tiếng Việt theo đúng cấu trúc sau:
1. "Nhận xét chung": 1-2 câu đánh giá tổng quan (đúng ngữ pháp chưa, tự nhiên chưa).
2. "Lỗi cần sửa": liệt kê từng lỗi cụ thể (nếu không có lỗi thì ghi "Không có lỗi nào 🎉"), mỗi lỗi giải thích ngắn gọn tại sao sai.
3. "Câu đã sửa": viết lại câu/đoạn hoàn chỉnh, đúng, tự nhiên bằng tiếng Trung, kèm pinyin.
Giữ giọng văn khích lệ, dễ hiểu cho người mới học.`

export default function WritingCheckPage() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const keyReady = hasDeepseekKey()

  async function handleCheck() {
    const content = text.trim()
    if (!content || loading) return
    setLoading(true)
    setError('')
    setResult('')
    try {
      const reply = await askDeepseek([
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content }
      ])
      setResult(reply)
    } catch (e) {
      setError(e instanceof DeepseekError ? e.message : 'Có lỗi xảy ra, thử lại sau.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Chấm bài viết AI ✍️</h1>
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
          <p className="mb-2 text-sm text-gray-500">
            Viết một câu hoặc đoạn văn tiếng Trung, AI sẽ chấm và sửa lỗi giúp bạn.
          </p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder="Ví dụ: 我昨天去学校学习汉语了。"
            className="w-full rounded-2xl border border-gray-200 p-3 text-base shadow-sm"
          />
          <button
            onClick={handleCheck}
            disabled={loading || !text.trim()}
            className="mt-3 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white disabled:opacity-50"
          >
            {loading ? 'Đang chấm...' : 'Chấm bài'}
          </button>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          {result && (
            <div className="mt-4 whitespace-pre-wrap rounded-2xl bg-white p-4 text-sm leading-relaxed text-gray-800 shadow-sm">
              {result}
            </div>
          )}
        </>
      )}
    </div>
  )
}
