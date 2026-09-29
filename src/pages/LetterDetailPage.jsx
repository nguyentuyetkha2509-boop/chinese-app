import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { getLetter } from '../data/letters'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { useSequencePlayer } from '../lib/useSequencePlayer'
import { playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { loadJSON, saveJSON } from '../lib/storage'
import { CheckIcon, VolumeIcon } from '../components/Icons'

// Bat buoc go it nhat chung nay moi cho xem dap an, de khong the bam xac nhan
// khi chua thu dich. Khong cham dung sai vi mot la thu dich duoc nhieu cach.
const MIN_TRANSLATION_CHARS = 20

// key theo letterKey de chuyen sang thu khac thi remount, khong giu nham ban
// dich va trang thai da xem dap an cua thu truoc (xem ghi chu o StoryDetailPage).
export default function LetterDetailPage() {
  const { letterKey } = useParams()
  return <LetterDetailPageInner key={letterKey} />
}

function LetterDetailPageInner() {
  const { letterKey } = useParams()
  const letter = getLetter(letterKey)
  const { addXp, markLetterComplete, completedLetters } = useProgress()
  const done = letter ? completedLetters.includes(letter.key) : false

  // Ban dich cua nguoi hoc duoc luu theo tung thu de xem lai sau. Chi luu tren
  // may nay (khong nam trong SYNCED_KEYS): la ban nhap ca nhan, khong phai tien do.
  const [draft, setDraft] = useState(() => (letter ? loadJSON('letterDrafts', {})[letter.key] || '' : ''))
  const [revealed, setRevealed] = useState(done)

  const { playingAll, activeLine, failed, playAll, stop, setActiveLine } = useSequencePlayer({
    lines: letter?.paragraphs
  })

  if (!letter) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy thư.</p>
        <Link to="/thu" className="text-brand-600">
          Quay lại danh sách thư
        </Link>
      </div>
    )
  }

  function handleDraftChange(e) {
    const value = e.target.value
    setDraft(value)
    saveJSON('letterDrafts', { ...loadJSON('letterDrafts', {}), [letter.key]: value })
  }

  function handleReveal() {
    stop()
    setRevealed(true)
    // Chi cong XP lan dau (xem ghi chu o StoryDetailPage: addXp cong don).
    if (!done) {
      addXp(XP_REWARDS.letterComplete)
      markLetterComplete(letter.key)
      playCelebrate()
    }
  }

  const canReveal = draft.trim().length >= MIN_TRANSLATION_CHARS

  return (
    <div className="px-4 pt-6 pb-4">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">
          {letter.icon} {letter.title}
        </h1>
        {done && (
          <span className="flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
            <CheckIcon width={16} height={16} /> Đã xong
          </span>
        )}
      </div>

      <button
        onClick={() => (playingAll ? null : playAll(0))}
        disabled={playingAll}
        className="mb-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {playingAll ? '🔊 Đang phát...' : '🔊 Nghe cả lá thư'}
      </button>

      {failed && (
        <p className="mb-4 rounded-xl bg-amber-100 p-3 text-xs text-amber-800">
          ⚠️ Máy này chưa đọc được tiếng Trung nên không phát được. Bạn vẫn đọc được thư bên dưới; muốn có tiếng thì
          vào Cài đặt máy → Ngôn ngữ &amp; giọng nói → thêm giọng “Chinese (Mandarin)”.
        </p>
      )}

      <div className="space-y-2">
        {letter.paragraphs.map((p, i) => {
          const isActive = activeLine === i
          return (
            <button
              key={i}
              onClick={() => {
                stop()
                setActiveLine(i)
                speakChinese(p.hanzi, {
                  onEnd: () => setActiveLine(null),
                  onError: () => setActiveLine(null)
                })
              }}
              className={`w-full rounded-2xl bg-white p-3.5 text-left shadow-sm transition ${
                isActive ? 'ring-2 ring-candy-400' : ''
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="flex-1 text-lg leading-relaxed text-gray-800">{p.hanzi}</span>
                <VolumeIcon width={18} height={18} className="mt-1.5 shrink-0 text-gray-500" />
              </div>
              {/* Phien am va nghia chi hien SAU khi nguoi hoc da tu dich va xac nhan */}
              {revealed && (
                <>
                  <p className="mt-1 text-xs text-brand-600">{p.pinyin}</p>
                  <p className="mt-1 text-sm text-gray-600">{p.meaning}</p>
                </>
              )}
            </button>
          )
        })}
      </div>

      {!revealed ? (
        <div className="mt-5">
          <label htmlFor="letter-translation" className="mb-1 block text-sm font-semibold text-gray-700">
            ✍️ Bản dịch của bạn
          </label>
          <textarea
            id="letter-translation"
            value={draft}
            onChange={handleDraftChange}
            rows={8}
            placeholder="Đọc thư ở trên rồi gõ bản dịch tiếng Việt của bạn vào đây..."
            className="w-full rounded-2xl border border-brand-100 bg-white p-3 text-sm text-gray-800 outline-none focus:border-brand-400"
          />
          <button
            onClick={handleReveal}
            disabled={!canReveal}
            className="mt-2 w-full rounded-xl bg-candy-500 py-3 text-sm font-semibold text-white disabled:opacity-50"
          >
            Xác nhận, xem phiên âm và nghĩa
          </button>
          {!canReveal && (
            <p className="mt-1 text-center text-xs text-gray-500">
              Hãy gõ ít nhất {MIN_TRANSLATION_CHARS} ký tự bản dịch để mở đáp án.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {draft.trim() && (
            <div className="rounded-2xl bg-brand-50 p-3.5">
              <p className="mb-1 text-xs font-semibold text-brand-700">✍️ Bản dịch của bạn</p>
              <p className="whitespace-pre-wrap text-sm text-gray-700">{draft}</p>
            </div>
          )}
          <p className="text-center text-xs text-gray-500">
            Đối chiếu bản dịch của bạn với nghĩa ở từng đoạn phía trên. Dịch khác cách vẫn có thể đúng.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setRevealed(false)}
              className="flex-1 rounded-xl bg-white py-2.5 text-sm font-semibold text-gray-600 shadow-sm"
            >
              Dịch lại
            </button>
            <Link to="/thu" className="flex-1 rounded-xl bg-brand-700 py-2.5 text-center text-sm font-semibold text-white">
              Thư khác
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
