import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import MarkdownLite from '../components/MarkdownLite'
import { askDeepseek, hasDeepseekKey, DeepseekError } from '../lib/deepseek'

const SYSTEM_PROMPT = `Bạn là giáo viên tiếng Trung chấm bài viết cho người Việt Nam học tiếng Trung. Khi nhận một câu hoặc đoạn văn tiếng Trung của học viên, hãy trả lời bằng tiếng Việt theo đúng cấu trúc sau:
1. "Nhận xét chung": 1-2 câu đánh giá tổng quan (đúng ngữ pháp chưa, tự nhiên chưa).
2. "Lỗi cần sửa": liệt kê từng lỗi cụ thể (nếu không có lỗi thì ghi "Không có lỗi nào 🎉"), mỗi lỗi giải thích ngắn gọn tại sao sai.
3. "Câu đã sửa": viết lại câu/đoạn hoàn chỉnh, đúng, tự nhiên bằng tiếng Trung, kèm pinyin.
Giữ giọng văn khích lệ, dễ hiểu cho người mới học.`

// Phong chu co chan cho giao dien co phong cua trang nay.
const SERIF = '"Noto Serif SC", "Songti SC", "STSong", "SimSun", "Noto Serif", serif'

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

  // Xoa ca bai viet lan ket qua de bat dau bai moi; chi hien khi da co ket qua nen
  // khong bao gio xoa giua luc dang cho AI tra loi.
  function handleClear() {
    setText('')
    setResult('')
    setError('')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">Chấm bài viết AI</h1>
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
          {/* Khung giay Tuyen phong cach co phong: vien do son kep, mau giay nga,
              dong ke mo (o to lan) de chu viet tay nhin nhu tren giay thu phap.
              Khong de padding doc de dong ke khop dung voi tung dong chu.
              Dung CSS thuan, khong tai phong chu ngoai de khong cham trang. */}
          <div
            className="rounded-lg p-1.5 shadow-md"
            style={{ background: '#a8321f', boxShadow: '0 4px 14px rgba(120, 40, 20, 0.25)' }}
          >
            <div className="rounded-md border border-[#e9d9b0] p-1" style={{ background: '#f6ecd0' }}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}
                placeholder="Ví dụ: 我昨天去学校学习汉语了。"
                className="block w-full resize-none rounded border border-[#c9b27c] px-3 py-0 text-lg text-[#2b211a] placeholder:text-[#a8967a] focus:outline-none"
                style={{
                  fontFamily: SERIF,
                  lineHeight: '2rem',
                  backgroundColor: '#fbf4de',
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, transparent 0, transparent calc(2rem - 1px), rgba(168, 50, 31, 0.28) calc(2rem - 1px), rgba(168, 50, 31, 0.28) 2rem)',
                  backgroundAttachment: 'local'
                }}
              />
            </div>
          </div>
          <button
            onClick={handleCheck}
            disabled={loading || !text.trim()}
            className="mt-3 w-full rounded-lg border-2 border-[#e9c9b8] py-3 text-lg tracking-widest text-[#fbf4de] shadow-md disabled:opacity-50"
            style={{ background: '#a8321f', fontFamily: SERIF }}
          >
            {loading ? 'Đang chấm...' : 'Chấm bài'}
          </button>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          {result && (
            <div className="mt-4 rounded-lg p-1.5 shadow-md" style={{ background: '#a8321f' }}>
              <div
                className="whitespace-pre-wrap rounded-md border border-[#e9d9b0] p-4 text-sm leading-relaxed text-[#2b211a]"
                style={{ background: '#f6ecd0', fontFamily: SERIF }}
              >
                <MarkdownLite text={result} />
              </div>
            </div>
          )}

          {result && (
            <button
              onClick={handleClear}
              className="mt-3 w-full rounded-lg border border-[#c9b27c] bg-[#fbf4de] py-2.5 text-sm font-semibold text-[#6b5a3e]"
            >
              🗑 Xóa bài và kết quả
            </button>
          )}
        </>
      )}
    </div>
  )
}
