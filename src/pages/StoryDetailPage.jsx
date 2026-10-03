import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { getStory } from '../data/stories'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { useSequencePlayer } from '../lib/useSequencePlayer'
import { playCelebrate, playWrong } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { QUIZ_PASS_THRESHOLD, quizPassed } from '../lib/quizResult'
import { CheckIcon, VolumeIcon } from '../components/Icons'
import MiniQuiz from '../components/MiniQuiz'
import CelebrationBadge from '../components/CelebrationBadge'
import { StoryIcon } from '../components/PandaIcon'

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo storyKey de
// remount lai tu dau khi chuyen thang sang truyen khac, tranh giu nham
// phase/ket qua cua truyen truoc.
export default function StoryDetailPage() {
  const { storyKey } = useParams()
  return <StoryDetailPageInner key={storyKey} />
}

function StoryDetailPageInner() {
  const { storyKey } = useParams()
  const story = getStory(storyKey)
  const { addXp, markStoryComplete, completedStories } = useProgress()

  const [phase, setPhase] = useState('reading') // reading | quiz | done
  const [chapterIndex, setChapterIndex] = useState(0)
  const [result, setResult] = useState({ correct: 0, total: 0 })
  const [passed, setPassed] = useState(true)
  const [quizAttempt, setQuizAttempt] = useState(0)

  const chapter = story?.chapters?.[chapterIndex]
  const isLastChapter = story ? chapterIndex === story.chapters.length - 1 : false
  const done = story ? completedStories.includes(story.key) : false

  // Xem ghi chu o TopicDetailPage: bai da hoan thanh thi khong cong XP nua.
  const awardXp = done ? () => {} : addXp

  const { playingAll, activeLine, failed, playAll, stop, setActiveLine } = useSequencePlayer({
    lines: chapter?.lines,
    // Chi ghi "da doc xong" khi chuoi phat di het that su. Neu may khong doc
    // duoc thi hook dung lai va khong goi onFinish, nen truyen khong bi danh dau
    // oan la da nghe.
    onFinish: () => {
      if (isLastChapter) markStoryComplete(story.key)
    }
  })

  if (!story) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy truyện.</p>
        <Link to="/truyen" className="text-brand-600">
          Quay lại danh sách truyện
        </Link>
      </div>
    )
  }

  // Doi phan thi phai dung chuoi phat cua phan cu truoc. Neu khong, tieng cua
  // phan cu van doc tiep trong khi man hinh da sang phan moi, va vien sang chay
  // theo chi so cua danh sach cu nen nhay sai cau.
  function goToChapter(next) {
    stop()
    setChapterIndex(next)
  }

  function goToQuiz() {
    stop()
    setPhase('quiz')
  }

  function handleQuizDone(correct, total) {
    setResult({ correct, total })
    const didPass = quizPassed(correct, total)
    setPassed(didPass)
    if (didPass) {
      // Chi cong XP cho lan hoan thanh DAU TIEN. markStoryComplete chay lai khong
      // sao (no chi ghi de), nhung addXp thi CONG DON - nen truoc day cu bam "Doc
      // lai" roi lam lai bai doc hieu la lai kiem duoc XP mai khong gioi han, va
      // bang xep hang (co that, moi nguoi xem duoc) mat het y nghia.
      awardXp(XP_REWARDS.storyComplete)
      markStoryComplete(story.key)
      playCelebrate()
    } else {
      playWrong()
    }
    setPhase('done')
  }

  function retryQuiz() {
    setQuizAttempt((a) => a + 1)
    setPhase('quiz')
  }

  function restart() {
    stop()
    setChapterIndex(0)
    setPhase('reading')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">
          <StoryIcon icon={story.icon} size={26} /> {story.title}
        </h1>
        {done && (
          <span className="flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
            <CheckIcon width={16} height={16} /> Đã hoàn thành
          </span>
        )}
      </div>

      {phase === 'reading' && (
        <>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {/* chapter.title da co san "Phần 1: ..." trong du lieu, nen truoc
                  day dong nay bi lap thanh "Phần 1: ... · Phần 1/3". Chi giu lai
                  phan dem so phan. */}
              {chapter.title} · {chapterIndex + 1}/{story.chapters.length}
            </p>
            <div className="flex gap-1">
              {story.chapters.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-5 rounded-full ${i === chapterIndex ? 'bg-brand-600' : 'bg-brand-100'}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => (playingAll ? null : playAll(0))}
            disabled={playingAll}
            className="mb-4 w-full rounded-xl bg-brand-700 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            <span className="inline-flex items-center justify-center gap-2"><VolumeIcon width={24} height={24} alt="" />{playingAll ? 'Đang phát...' : 'Nghe cả phần này'}</span>
          </button>

          {failed && (
            <p className="mb-4 rounded-xl bg-amber-100 p-3 text-xs text-amber-800">
              ⚠️ Máy này chưa đọc được tiếng Trung nên không phát cả phần được. Bạn vẫn đọc được toàn
              bộ nội dung bên dưới; muốn có tiếng thì vào Cài đặt máy → Ngôn ngữ &amp; giọng nói →
              thêm giọng “Chinese (Mandarin)”.
            </p>
          )}

          <div className="space-y-2">
            {chapter.lines.map((line, i) => {
              const isActive = activeLine === i
              return (
                <button
                  key={i}
                  onClick={() => {
                    // Phai dung chuoi "nghe ca phan" truoc. Giua hai cau co khoang
                    // nghi 250ms, bam dung luc do thi khong co tieng nao bi huy, nen
                    // chuoi cu van chay tiep va doc de len cau vua bam.
                    stop()
                    setActiveLine(i)
                    // Phai co onError: neu may khong doc duoc thi onEnd khong
                    // chay va vien sang quanh cau se mac mai o do.
                    speakChinese(line.hanzi, {
                      onEnd: () => setActiveLine(null),
                      onError: () => setActiveLine(null)
                    })
                  }}
                  className={`w-full rounded-2xl bg-white p-3.5 text-left shadow-sm transition ${
                    isActive ? 'ring-2 ring-candy-400' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-800">{line.hanzi}</span>
                    <VolumeIcon width={18} height={18} className="text-gray-500" />
                  </div>
                  <p className="mt-0.5 text-xs text-brand-600">{line.pinyin}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{line.meaning}</p>
                </button>
              )
            })}
          </div>

          <div className="mt-5 flex gap-2">
            {chapterIndex > 0 && (
              <button
                onClick={() => goToChapter(chapterIndex - 1)}
                disabled={playingAll}
                className="flex-1 rounded-2xl bg-white py-3 text-sm font-semibold text-gray-600 shadow-sm disabled:opacity-50"
              >
                ← Phần trước
              </button>
            )}
            <button
              onClick={() => (isLastChapter ? goToQuiz() : goToChapter(chapterIndex + 1))}
              disabled={playingAll}
              className="flex-1 rounded-2xl bg-brand-700 py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              {isLastChapter ? 'Làm bài đọc hiểu →' : 'Phần tiếp theo →'}
            </button>
          </div>
        </>
      )}

      {phase === 'quiz' && (
        <>
          <p className="mb-2 text-sm text-gray-500">Đọc hiểu:</p>
          <MiniQuiz
            key={quizAttempt}
            items={story.quiz}
            onDone={handleQuizDone}
            xpPerCorrect={XP_REWARDS.storyQuizCorrect}
            addXp={awardXp}
          />
        </>
      )}

      {phase === 'done' && passed && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
          <p className="text-xl">🎉 Hoàn thành truyện!</p>
          <p className="mt-1 text-white/90">
            Đọc hiểu đúng {result.correct}/{result.total} câu
          </p>
          <div className="mt-4 flex gap-2">
            <button onClick={restart} className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Đọc lại
            </button>
            <Link to="/truyen" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Truyện khác
            </Link>
          </div>
          <Link to="/hoc-hom-nay" className="mt-3 block text-center text-xs text-white/80 underline">
            Về Học hôm nay
          </Link>
        </div>
      )}

      {phase === 'done' && !passed && (
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <p className="text-xl">😅 Chưa đạt</p>
          <p className="mt-1 text-gray-600">
            Đọc hiểu đúng {result.correct}/{result.total} câu - cần đúng từ {Math.round(QUIZ_PASS_THRESHOLD * 100)}% trở lên mới qua bài.
          </p>
          <button onClick={retryQuiz} className="mt-4 w-full rounded-xl bg-brand-700 py-2.5 font-semibold text-white">
            Làm lại bài đọc hiểu
          </button>
          <Link to="/truyen" className="mt-2 block rounded-xl bg-gray-100 py-2.5 text-sm font-semibold text-gray-700">
            Truyện khác
          </Link>
        </div>
      )}
    </div>
  )
}
