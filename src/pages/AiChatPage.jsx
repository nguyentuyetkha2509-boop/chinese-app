import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import MarkdownLite from '../components/MarkdownLite'
import { VolumeIcon, RecordIcon } from '../components/Icons'
import { askDeepseek, hasDeepseekKey, DeepseekError } from '../lib/deepseek'
import { loadJSON, saveJSON } from '../lib/storage'
import { speakChinese, stopSpeaking } from '../lib/tts'
import { playFlip } from '../lib/sfx'

const HISTORY_KEY = 'aiChatHistory'
const HISTORY_LIMIT = 40
const HAN_RE = /[一-鿿]/
// Thoi gian im lang truoc khi tu dung ghi am (ms).
const NO_SPEECH_MS = 8000
const AFTER_SPEECH_MS = 3000

// Nhan dien giong noi co san cua trinh duyet (Chrome/Android tot, Safari/iOS han che).
// Khong co thi trang tu chuyen sang o go chu de van dung duoc.
const SpeechRecognitionCtor =
  typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null

const SYSTEM_PROMPT = `Bạn là một người bạn Trung Quốc thân thiện tên Gấu Trúc, đang trò chuyện bằng LỜI NÓI để giúp một người Việt Nam luyện hội thoại tiếng Trung (trình độ HSK1-HSK9). Tin nhắn của người dùng là văn bản do máy nhận dạng giọng nói chuyển ra, nên có thể sai chữ đồng âm hoặc thiếu dấu câu - hãy đoán ý theo ngữ cảnh, đừng bắt lỗi chính tả.
Quy tắc trả lời, đúng định dạng 3 dòng:
- Dòng 1: toàn bộ câu trả lời bằng tiếng Trung giản thể, tự nhiên, tối đa 2 câu ngắn viết liền trên CÙNG một dòng (dòng này sẽ được đọc thành tiếng, không dùng ký hiệu markdown, emoji hay pinyin trong dòng này).
- Dòng 2: pinyin của toàn bộ dòng 1.
- Dòng 3: nghĩa tiếng Việt của toàn bộ dòng 1.
- Chỉ viết đúng 3 dòng đó, không lặp lại khối khác.
- Ưu tiên từ vựng thông dụng HSK1-HSK3 trừ khi người dùng chủ động dùng từ khó hơn.
- Nếu người dùng nói sai ngữ pháp hoặc dùng từ không chính xác, thêm một dòng cuối bắt đầu bằng "💡" (tiếng Việt) chỉ ra chỗ sai và câu đúng, rồi vẫn tiếp tục hội thoại.
- Nếu người dùng nói tiếng Việt, vẫn trả lời bằng tiếng Trung đơn giản để họ tập nói lại.
- Giữ không khí vui vẻ, khích lệ, luôn kết thúc bằng một câu hỏi ngắn để người dùng nói tiếp.`

// Chi doc cac dong tieng Trung, bo pinyin va nghia tieng Viet (khong co chu Han) vi bo
// doc tieng Trung doc chung rat te. AI doi khi tra loi thanh nhieu khoi 3 dong thay vi
// 1 khoi, nen phai gom MOI dong co chu Han chu khong chi dong dau. Dong nhac loi
// bat dau bang "💡" la loi giai thich tieng Viet, khong doc.
function extractSpokenLine(reply) {
  return reply
    .split('\n')
    .filter((l) => HAN_RE.test(l) && !l.trim().startsWith('💡'))
    .map((l) => l.replace(/[*_#`>~-]/g, '').trim())
    .join(' ')
}

const STATUS_TEXT = {
  idle: 'Bấm vào mic và nói',
  listening: 'Đang nghe... nói xong bấm lần nữa',
  thinking: 'Gấu Trúc đang nghĩ...',
  speaking: 'Gấu Trúc đang nói...'
}

export default function AiChatPage() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState(() => loadJSON(HISTORY_KEY, []))
  const [phase, setPhase] = useState('idle') // idle | listening | thinking | speaking
  const [interim, setInterim] = useState('')
  const [error, setError] = useState('')
  const [lang, setLang] = useState('zh-CN') // ngon ngu nguoi hoc dang noi
  const [showText, setShowText] = useState(true)
  const [typed, setTyped] = useState('')
  const listRef = useRef(null)
  const recognitionRef = useRef(null)
  const messagesRef = useRef(messages)
  const keyReady = hasDeepseekKey()

  useEffect(() => {
    messagesRef.current = messages
    saveJSON(HISTORY_KEY, messages.slice(-HISTORY_LIMIT))
  }, [messages])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, phase, interim])

  // Roi trang giua chung thi phai tha mic va im tieng, neu khong mic van mo ngam
  // va giong doc van chay o trang khac.
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort()
      stopSpeaking()
    }
  }, [])

  function speak(text) {
    const line = extractSpokenLine(text)
    if (!line) {
      setPhase('idle')
      return
    }
    setPhase('speaking')
    const started = speakChinese(line, {
      rate: 0.85,
      onEnd: () => setPhase('idle'),
      onError: () => setPhase('idle')
    })
    if (!started) setPhase('idle')
  }

  async function sendText(text) {
    const content = text.trim()
    if (!content) {
      setPhase('idle')
      return
    }
    setError('')
    const next = [...messagesRef.current, { role: 'user', content }]
    setMessages(next)
    setPhase('thinking')
    try {
      const reply = await askDeepseek([{ role: 'system', content: SYSTEM_PROMPT }, ...next])
      setMessages((cur) => [...cur, { role: 'assistant', content: reply }])
      speak(reply)
    } catch (e) {
      setError(e instanceof DeepseekError ? e.message : 'Có lỗi xảy ra, thử lại sau.')
      setPhase('idle')
    }
  }

  function startListening() {
    if (!SpeechRecognitionCtor || phase === 'listening') return
    // Dung giong doc truoc khi mo mic, neu khong mic se thu luon tieng loa.
    stopSpeaking()
    setError('')
    setInterim('')

    const recognition = new SpeechRecognitionCtor()
    recognition.lang = lang
    // Che do nghe lien tuc: neu de mac dinh (1 cau) thi engine tu ngat ngay khi nguoi
    // hoc ngung lay hoi vai giay de nghi cau tiep, chua noi het da bi cat.
    recognition.continuous = true
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    let heard = ''
    let silenceTimer = null

    // Tu dung khi nguoi hoc im lang du lau: cho lau hon luc chua noi gi (con ngap
    // ngung, nghi cau), ngan hon sau khi da noi xong de AI tra loi nhanh.
    const armSilence = (ms) => {
      clearTimeout(silenceTimer)
      silenceTimer = setTimeout(() => recognition.stop(), ms)
    }
    armSilence(NO_SPEECH_MS)

    recognition.onresult = (e) => {
      // Ghep lai tu DAU moi lan thay vi cong don theo resultIndex: che do lien tuc co
      // the dieu chinh lai ket qua cu, va phan chua chot (interim) van duoc gui di
      // neu nguoi hoc bam dung truoc khi engine kip chot.
      heard = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join('')
      setInterim(heard)
      armSilence(AFTER_SPEECH_MS)
    }
    recognition.onerror = (e) => {
      const code = e?.error
      if (code === 'not-allowed' || code === 'service-not-allowed') {
        setError('Chưa cho phép dùng micro. Hãy cấp quyền micro cho trang web trong cài đặt trình duyệt rồi thử lại.')
      } else if (code === 'network') {
        setError('Nhận dạng giọng nói cần kết nối mạng. Kiểm tra mạng rồi thử lại.')
      } else if (code === 'no-speech') {
        setError('Chưa nghe thấy giọng bạn, thử nói lại gần micro hơn nhé.')
      } else if (code !== 'aborted') {
        setError('Chưa nghe rõ, bạn thử nói lại gần micro hơn nhé.')
      }
    }
    recognition.onend = () => {
      clearTimeout(silenceTimer)
      recognitionRef.current = null
      setInterim('')
      if (heard.trim()) sendText(heard)
      else setPhase('idle')
    }

    try {
      recognition.start()
      recognitionRef.current = recognition
      setPhase('listening')
      playFlip()
    } catch {
      setError('Không mở được micro, thử lại sau.')
      setPhase('idle')
    }
  }

  function stopListening() {
    // stop() (khong phai abort) de engine van tra ket qua cho phan da noi.
    recognitionRef.current?.stop()
  }

  function handleMic() {
    if (phase === 'listening') stopListening()
    else if (phase === 'idle') startListening()
    else if (phase === 'speaking') {
      stopSpeaking()
      setPhase('idle')
    }
  }

  function handleClear() {
    stopSpeaking()
    setMessages([])
    saveJSON(HISTORY_KEY, [])
    setPhase('idle')
  }

  const busy = phase === 'thinking'

  return (
    <div className="flex h-[calc(100dvh-290px)] min-h-[380px] flex-col px-4 pt-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-xl text-brand-800">Trò chuyện với AI</h1>
        </div>
        {messages.length > 0 && (
          <button onClick={handleClear} className="text-xs text-gray-500 underline">
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
                Bấm vào mic và nói một câu tiếng Trung (hoặc tiếng Việt) để bắt đầu. Gấu Trúc sẽ trả lời bằng giọng nói
                tiếng Trung, đồng thời nhắc bạn nếu nói sai. Chữ chỉ hiện làm phụ đề, bạn có thể ẩn đi để luyện nghe.
              </p>
            )}
            {messages.map((m, i) => {
              const isUser = m.role === 'user'
              // Khi an phu de van chua lai nut nghe lai de nguoi hoc khong mat tin nhan.
              return (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    isUser ? 'ml-auto bg-brand-700 text-white' : 'bg-white text-gray-800'
                  }`}
                >
                  {showText ? (
                    <div className="whitespace-pre-wrap">
                      <MarkdownLite text={m.content} />
                    </div>
                  ) : (
                    <span className="italic opacity-70">{isUser ? 'Bạn đã nói' : 'Gấu Trúc đã trả lời'}</span>
                  )}
                  {!isUser && (
                    <button
                      onClick={() => speak(m.content)}
                      className="mt-2 flex items-center gap-1 text-xs font-semibold text-brand-700"
                    >
                      <VolumeIcon width={24} height={24} alt="" /> Nghe lại
                    </button>
                  )}
                </div>
              )
            })}
            {interim && (
              <div className="ml-auto max-w-[85%] rounded-2xl bg-brand-700/70 p-3 text-sm text-white">{interim}</div>
            )}
          </div>

          {error && <p className="mb-2 text-xs text-red-500">{error}</p>}

          <div className="border-t border-gray-100 pt-3">
            {SpeechRecognitionCtor ? (
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setLang(lang === 'zh-CN' ? 'vi-VN' : 'zh-CN')}
                    disabled={phase !== 'idle'}
                    className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700 disabled:opacity-50"
                  >
                    Tôi nói: {lang === 'zh-CN' ? '中文 (tiếng Trung)' : 'Tiếng Việt'}
                  </button>
                  <button
                    onClick={() => setShowText((v) => !v)}
                    className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700"
                  >
                    {showText ? 'Ẩn phụ đề' : 'Hiện phụ đề'}
                  </button>
                </div>
                <button
                  onClick={handleMic}
                  disabled={busy}
                  aria-label={phase === 'listening' ? 'Dừng nói' : 'Bắt đầu nói'}
                  className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl shadow-lg disabled:opacity-50 ${
                    phase === 'listening'
                      ? 'animate-pulse bg-red-100 ring-4 ring-red-400'
                      : phase === 'speaking'
                        ? 'bg-brand-700 text-white'
                        : 'bg-white ring-2 ring-brand-200'
                  }`}
                >
                  {phase === 'speaking' ? '⏹' : <RecordIcon width={64} height={64} />}
                </button>
                <p className="text-xs text-gray-500">{STATUS_TEXT[phase]}</p>
              </div>
            ) : (
              // Trinh duyet khong co nhan dien giong noi (thuong la Safari/iOS, Firefox):
              // van cho go chu, AI van doc tra loi bang giong noi.
              <div>
                <p className="mb-2 text-xs text-gray-500">
                  Trình duyệt này chưa hỗ trợ nhận dạng giọng nói nên bạn tạm gõ chữ. Mở app bằng Chrome để nói chuyện
                  bằng micro.
                </p>
                <div className="flex gap-2">
                  <textarea
                    value={typed}
                    onChange={(e) => setTyped(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        if (!busy && typed.trim()) {
                          sendText(typed)
                          setTyped('')
                        }
                      }
                    }}
                    placeholder="Nhập tin nhắn..."
                    rows={1}
                    className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm"
                  />
                  <button
                    onClick={() => {
                      sendText(typed)
                      setTyped('')
                    }}
                    disabled={busy || !typed.trim()}
                    className="rounded-xl bg-brand-700 px-4 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
