import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { getDialogue } from '../data/dialogues'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { useSequencePlayer } from '../lib/useSequencePlayer'
import { playFlip } from '../lib/sfx'
import { CheckIcon, VolumeIcon } from '../components/Icons'

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo dialogueKey
// de remount lai tu dau khi chuyen thang sang hoi thoai khac.
export default function DialogueDetailPage() {
  const { dialogueKey } = useParams()
  return <DialogueDetailPageInner key={dialogueKey} />
}

function DialogueDetailPageInner() {
  const { dialogueKey } = useParams()
  const dialogue = getDialogue(dialogueKey)
  const { completedDialogues, markDialogueComplete } = useProgress()
  const done = dialogue ? completedDialogues.includes(dialogue.key) : false

  const { playingAll, activeLine, failed, playAll, stop, setActiveLine } = useSequencePlayer({
    lines: dialogue?.lines,
    // Chi ghi "da nghe" khi chuoi phat di het that su. Neu may khong doc duoc thi
    // hook dung lai va khong goi onFinish, nen hoi thoai khong bi danh dau oan.
    onFinish: () => markDialogueComplete(dialogue.key),
    onFirstLine: () => playFlip()
  })

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

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-xl text-brand-800">
            {dialogue.icon} {dialogue.title}
          </h1>
        </div>
        {done && (
          <span className="flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
            <CheckIcon width={16} height={16} /> Đã nghe
          </span>
        )}
      </div>

      <button
        onClick={() => (playingAll ? null : playAll(0))}
        disabled={playingAll}
        className="mb-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {playingAll ? '🔊 Đang phát...' : done ? '🔊 Nghe lại cả đoạn' : '🔊 Nghe cả đoạn hội thoại'}
      </button>

      {failed && (
        <p className="mb-4 rounded-xl bg-amber-100 p-3 text-xs text-amber-800">
          ⚠️ Máy này chưa đọc được tiếng Trung nên không phát cả đoạn được. Bạn vẫn xem được toàn bộ
          nội dung bên dưới; muốn có tiếng thì vào Cài đặt máy → Ngôn ngữ &amp; giọng nói → thêm giọng
          “Chinese (Mandarin)”.
        </p>
      )}

      <div className="space-y-3">
        {dialogue.lines.map((line, i) => {
          const isA = line.speaker === 'A'
          const isActive = activeLine === i
          return (
            <div key={i} className={`flex ${isA ? 'justify-start' : 'justify-end'}`}>
              <button
                onClick={() => {
                  // Phai dung chuoi "nghe ca doan" truoc. Giua hai cau co khoang
                  // nghi 250ms, bam dung luc do thi khong co tieng nao bi huy, nen
                  // chuoi cu van chay tiep va doc de len cau vua bam.
                  stop()
                  playFlip()
                  setActiveLine(i)
                  // Phai co onError: neu may khong doc duoc thi onEnd khong chay
                  // va vien sang bo quanh cau se mac mai o do.
                  speakChinese(line.hanzi, {
                    onEnd: () => setActiveLine(null),
                    onError: () => setActiveLine(null)
                  })
                }}
                className={`max-w-[80%] rounded-2xl p-3 text-left shadow-sm transition ${
                  isA ? 'rounded-tl-sm bg-white' : 'rounded-tr-sm bg-brand-600 text-white'
                } ${isActive ? 'ring-2 ring-candy-400' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${isA ? 'text-gray-800' : 'text-white'}`}>{line.hanzi}</span>
                  <VolumeIcon width={18} height={18} className={isA ? 'text-gray-500' : 'text-white/70'} />
                </div>
                <p className={`mt-0.5 text-xs ${isA ? 'text-brand-600' : 'text-white/80'}`}>{line.pinyin}</p>
                <p className={`mt-0.5 text-xs ${isA ? 'text-gray-500' : 'text-white/70'}`}>{line.meaning}</p>
              </button>
            </div>
          )
        })}
      </div>

      {done && (
        <div className="mt-5 flex gap-3 text-center text-xs">
          <Link to="/hoi-thoai" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700 shadow-sm">
            Hội thoại khác
          </Link>
          <Link to="/hoc-hom-nay" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700 shadow-sm">
            Về Học hôm nay
          </Link>
        </div>
      )}
    </div>
  )
}
