import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDialogue } from '../data/dialogues'
import { speakChinese } from '../lib/tts'
import { playFlip } from '../lib/sfx'
import { ArrowLeftIcon, VolumeIcon } from '../components/Icons'

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo dialogueKey
// de remount lai tu dau khi chuyen thang sang hoi thoai khac.
export default function DialogueDetailPage() {
  const { dialogueKey } = useParams()
  return <DialogueDetailPageInner key={dialogueKey} />
}

function DialogueDetailPageInner() {
  const { dialogueKey } = useParams()
  const navigate = useNavigate()
  const dialogue = getDialogue(dialogueKey)
  const [playingAll, setPlayingAll] = useState(false)
  const [activeLine, setActiveLine] = useState(null)

  if (!dialogue) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy hội thoại.</p>
        <Link to="/hoi-thoai" className="text-brand-600">
          Quay lại danh sách hội thoại
        </Link>
      </div>
    )
  }

  function playAll(index = 0) {
    if (index >= dialogue.lines.length) {
      setPlayingAll(false)
      setActiveLine(null)
      return
    }
    if (index === 0) playFlip()
    setPlayingAll(true)
    setActiveLine(index)
    speakChinese(dialogue.lines[index].hanzi, { onEnd: () => setTimeout(() => playAll(index + 1), 250) })
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/hoi-thoai')} className="text-gray-500">
            <ArrowLeftIcon />
          </button>
          <h1 className="text-xl text-brand-800">
            {dialogue.icon} {dialogue.title}
          </h1>
        </div>
      </div>

      <button
        onClick={() => (playingAll ? null : playAll(0))}
        disabled={playingAll}
        className="mb-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {playingAll ? '🔊 Đang phát...' : '🔊 Nghe cả đoạn hội thoại'}
      </button>

      <div className="space-y-3">
        {dialogue.lines.map((line, i) => {
          const isA = line.speaker === 'A'
          const isActive = activeLine === i
          return (
            <div key={i} className={`flex ${isA ? 'justify-start' : 'justify-end'}`}>
              <button
                onClick={() => {
                  playFlip()
                  setActiveLine(i)
                  speakChinese(line.hanzi, { onEnd: () => setActiveLine(null) })
                }}
                className={`max-w-[80%] rounded-2xl p-3 text-left shadow-sm transition ${
                  isA ? 'rounded-tl-sm bg-white' : 'rounded-tr-sm bg-brand-600 text-white'
                } ${isActive ? 'ring-2 ring-candy-400' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${isA ? 'text-gray-800' : 'text-white'}`}>{line.hanzi}</span>
                  <VolumeIcon width={14} height={14} className={isA ? 'text-gray-400' : 'text-white/70'} />
                </div>
                <p className={`mt-0.5 text-xs ${isA ? 'text-brand-600' : 'text-white/80'}`}>{line.pinyin}</p>
                <p className={`mt-0.5 text-xs ${isA ? 'text-gray-500' : 'text-white/70'}`}>{line.meaning}</p>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
