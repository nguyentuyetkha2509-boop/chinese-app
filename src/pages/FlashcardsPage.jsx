import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_WORDS, LEVELS, getWordById } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getDueWordIds, getLeechWordIds, isDue } from '../lib/srs'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate, playFlip } from '../lib/sfx'
import { accentFor } from '../lib/colors'
import { XP_REWARDS } from '../lib/gamification'
import CelebrationBadge from '../components/CelebrationBadge'
import SessionBar from '../components/SessionBar'
import SessionNextButton from '../components/SessionNextButton'
import { useSessionSteps } from '../lib/sessionPlan'
import flashcardPanda from '../assets/panda/flashcard_panda.webp'

// Khung the gau truc: vung trang nam o 33%-79% ngang, 18%-82% doc. Gau truc de
// len goc duoi ben trai o vung trang, nen ca chu Han, phien am va nghia xep
// thanh mot cot can giua o nua tren (ben tren dau gau).
function PandaFrame({ hanzi, pinyin, meaning, pinyinClass = '', small = false, onClick }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      onClick={onClick}
      className={`relative mx-auto block w-full text-center ${small ? 'max-w-[15rem]' : 'max-w-md'}`}
    >
      <img src={flashcardPanda} alt="Gấu trúc cầm thẻ từ vựng" className="w-full select-none" draggable="false" />
      <div className="absolute left-[33.5%] right-[21%] top-[18.5%] flex h-[35%] flex-col items-center justify-center overflow-hidden">
        <p className={`leading-tight text-gray-800 ${small ? 'text-2xl' : 'text-4xl'}`}>{hanzi}</p>
        {pinyin && <p className={`mt-1 leading-tight ${small ? 'text-xs' : 'text-lg'} ${pinyinClass}`}>{pinyin}</p>}
        {meaning && <p className={`mt-1 leading-snug text-gray-700 ${small ? 'text-[10px]' : 'text-sm'}`}>{meaning}</p>}
      </div>
    </Tag>
  )
}

// The den han thi on HET trong mot luot (truoc day cat o 20 the nen 200 the den
// han phai bam "On them" 10 lan). Muc "Tu kho" van gioi han vi no cho mo lai
// the chua den han, khong gioi han thi se on lai ca danh sach dai.
const SESSION_SIZE = Infinity
const LEECH_SESSION_SIZE = 20

const RATINGS = [
  { value: 0, label: 'Quên rồi', hint: 'gặp lại ngay', className: 'bg-red-500' },
  { value: 1, label: 'Khó nhớ', hint: 'gặp lại sớm', className: 'bg-sun-500' },
  { value: 2, label: 'Nhớ được', hint: 'vài ngày sau', className: 'bg-sky-500' },
  { value: 3, label: 'Nhớ rõ', hint: 'lâu mới gặp lại', className: 'bg-teal-500' }
]

// Chi tra ve nhung tu DA duoc gioi thieu qua Bai hoc (co san trong SRS) -
// On tap la noi rev on lai tu da hoc, khong phai noi am tham day them tu
// moi ngoai gioi han moi ngay, keo lam sai lech thong ke "da hoc".
function wordIdsForScope(scope, srsState) {
  const ids = scope === 'all' ? ALL_WORDS.map((w) => w.id) : LEVELS.find((l) => l.id === scope)?.words.map((w) => w.id) || []
  return ids.filter((id) => srsState[id])
}

// Danh sach chip cuon ngang (Tat ca, HSK1-6, Tu kho...) - co dau mo o mep phai
// goi y "con nua, vuot tiep" vi truoc day khong co dau hieu gi, de nham tuong
// HSK5/HSK6 "khong co" trong khi chi la chua vuot toi.
function ScopeChips({ chips, scope, onChange }) {
  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto">
        {chips.map((c) => (
          <button
            key={c.key}
            onClick={() => onChange(c.key)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm ${
              scope === c.key ? 'bg-brand-700 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  )
}

export default function FlashcardsPage() {
  const { srsState, rateCard, addXp } = useProgress()
  // Trang nay khong co cap do/bai tren URL, nen bai muc tieu cua phien duoc
  // giai tu &bai= tren link "Tiep theo" hoac tu bai da khoa cho hom nay.
  const { active: inSession, steps } = useSessionSteps()
  const allIds = useMemo(() => ALL_WORDS.map((w) => w.id), [])
  const leechIds = useMemo(() => getLeechWordIds(allIds, srsState), [allIds, srsState])

  const [scope, setScope] = useState('all')
  const [queue, setQueue] = useState(() => getDueWordIds(wordIdsForScope('all', srsState), srsState, SESSION_SIZE))
  const [sessionTotal, setSessionTotal] = useState(queue.length)
  const [ratingCounts, setRatingCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 })
  const [sessionXp, setSessionXp] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const currentId = queue[0]
  const currentWord = currentId ? getWordById(currentId) : null
  const reviewed = sessionTotal - queue.length
  const accent = accentFor(reviewed)

  // keepSummary: dung khi bam "On them" - neu khong con the nao thi GIU NGUYEN
  // bang tong ket cua phien vua roi. Truoc day ham nay xoa ratingCounts va
  // sessionXp TRUOC khi biet hang doi moi co gi, nen bam "On them" luc het the
  // lam bien mat bang "Da on xong N the!", bieu do 4 muc va "+X XP" - ket qua
  // phien vua hoc khong xem lai duoc nua.
  function buildQueueForScope(nextScope, { keepSummary = false } = {}) {
    const ids = nextScope === 'leech' ? leechIds : wordIdsForScope(nextScope, srsState)
    const nextQueue =
      nextScope === 'leech' ? ids.slice(0, LEECH_SESSION_SIZE) : getDueWordIds(ids, srsState, SESSION_SIZE)
    if (!keepSummary || nextQueue.length > 0) {
      setRatingCounts({ 0: 0, 1: 0, 2: 0, 3: 0 })
      setSessionXp(0)
    }
    setQueue(nextQueue)
    setSessionTotal(nextQueue.length)
    setFlipped(false)
  }

  function handleScopeChange(nextScope) {
    setScope(nextScope)
    buildQueueForScope(nextScope)
  }

  function handleRate(rating) {
    // Chi cong XP cho the THUC SU toi han. The chua toi han chi co o muc "Tu
    // kho" (muc nay co tinh cho mo lai the bat cu luc nao), va nut "On them"
    // dung lai dung 20 the do - nen truoc day bam vong lien tuc la an XP khong
    // co tran. Luyen them thi khong mat gi, chi la khong tinh diem.
    const wasDue = isDue(srsState[currentId])
    rateCard(currentId, rating)
    if (rating === 0) playWrong()
    else playCorrect()
    if (wasDue) {
      addXp(XP_REWARDS.flashcardReview)
      setSessionXp((n) => n + XP_REWARDS.flashcardReview)
    }
    setRatingCounts((c) => ({ ...c, [rating]: c[rating] + 1 }))
    if (queue.length === 1) setTimeout(playCelebrate, 350)
    setFlipped(false)
    setQueue((q) => q.slice(1))
  }

  function handleFlip() {
    if (!flipped) playFlip()
    // Moi lan cham khung deu doc lai, vi khong con nut loa rieng
    speakChinese(currentWord.hanzi)
    setFlipped((f) => !f)
  }

  const SCOPE_CHIPS = [
    { key: 'all', label: 'Tất cả' },
    ...LEVELS.map((l) => ({ key: l.id, label: l.label })),
    ...(leechIds.length > 0 ? [{ key: 'leech', label: `⚠️ Từ khó (${leechIds.length})` }] : [])
  ]

  if (!currentWord) {
    const totalRated = ratingCounts[0] + ratingCounts[1] + ratingCounts[2] + ratingCounts[3]
    return (
      <div className="px-4 pt-6">
        {inSession && <SessionBar steps={steps} currentKey="review" />}
        <h1 className="mb-2 text-2xl text-brand-800">Ôn tập</h1>

        {/* Trong phien hoc hom nay chi on het the den han, khong can loc theo cap do */}
        {!inSession && (
          <div className="mb-4">
            <ScopeChips chips={SCOPE_CHIPS} scope={scope} onChange={handleScopeChange} />
          </div>
        )}

        <div className="mb-4">
          <PandaFrame small hanzi="复习" pinyin="fùxí" meaning="ôn tập" pinyinClass="text-brand-600" />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          {totalRated > 0 && <CelebrationBadge />}
          <p className="text-lg">
            {totalRated > 0 ? `🎉 Đã ôn xong ${totalRated} thẻ!` : 'Không có thẻ nào cần ôn ở mục này.'}
          </p>
          {totalRated > 0 ? (
            <>
              <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
                {RATINGS.map((r) => (
                  <div key={r.value} className="rounded-lg bg-white/15 py-1.5">
                    <p className="text-base font-semibold">{ratingCounts[r.value]}</p>
                    <p className="text-white/80">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/90">+{sessionXp} XP</p>
            </>
          ) : (
            // Truoc day cho nay chi co mot cau "Hoc bai moi hoac chon muc khac
            // de on.". Mot khoi huong dan day du hon co viet ra nhung KHONG BAO
            // GIO hien duoc: no nam trong nhanh render chi chay khi hang doi co
            // the, ma co the thi tuc la da co the SRS roi. Nguoi hoc tu "Chu
            // de"/"Ngu phap"/"Truyen" ma khong bao gio mo "Bai hoc" se thay
            // trang nay trong mai mai ma khong hieu vi sao - vi the on tap chi
            // sinh ra tu "Bai hoc" (markUnitComplete -> seedNewCards).
            <p className="mt-1 text-sm text-white/90">
              Thẻ ôn tập chỉ được tạo khi bạn học xong một bài ở mục <b>Bài học</b>. Học theo Chủ đề, Ngữ pháp hay
              Truyện thì chưa có thẻ nào để ôn ở đây.
            </p>
          )}
          {inSession ? (
            // Trong phien: mot nut chinh dan sang buoc sau, cac loi tat cu ha
            // xuong thanh chu nho ben duoi - khong con phai doan buoc ke tiep.
            <>
              <SessionNextButton steps={steps} currentKey="review" variant="onGradient" />
              <div className="mt-3 flex justify-center gap-4 text-xs text-white/80">
                {totalRated > 0 && (
                  <button
                    onClick={() => buildQueueForScope(scope, { keepSummary: true })}
                    className="underline"
                  >
                    Ôn thêm
                  </button>
                )}
                <Link to="/bai-hoc" className="underline">
                  Danh sách bài
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-4 flex gap-2">
              {/* Chi hien "On them" khi vua on xong mot phien - luc trang con
                  trong thi khong con the nao de on, bam vao cung khong co gi. */}
              {totalRated > 0 && (
                <button
                  onClick={() => buildQueueForScope(scope, { keepSummary: true })}
                  className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white"
                >
                  Ôn thêm
                </button>
              )}
              <Link to="/bai-hoc" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
                Học bài mới
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      {inSession && <SessionBar steps={steps} currentKey="review" />}
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-2xl text-brand-800">Ôn tập</h1>
        <span className="text-sm text-gray-500">
          Thẻ {reviewed + 1}/{sessionTotal}
        </span>
      </div>

      {!inSession && (
        <div className="mb-3">
          <ScopeChips chips={SCOPE_CHIPS} scope={scope} onChange={handleScopeChange} />
        </div>
      )}

      <PandaFrame
        onClick={handleFlip}
        hanzi={currentWord.hanzi}
        pinyin={flipped ? currentWord.pinyin : null}
        meaning={flipped ? currentWord.meaning : null}
        pinyinClass={accent.text}
      />

      {flipped && (
        <div className="mt-2 flex flex-col gap-3">
          {currentWord.example && (
            <div className={`w-full rounded-xl ${accent.bg} p-3 text-center`}>
              <p className="text-base text-gray-800">{currentWord.example.hanzi}</p>
              <p className={`text-xs ${accent.text}`}>{currentWord.example.pinyin}</p>
              <p className="text-xs text-gray-600">{currentWord.example.meaning}</p>
            </div>
          )}
        </div>
      )}

      {flipped && (
        <>
          <p className="mt-5 text-center text-xs text-gray-500">Bạn nhớ từ này đến mức nào?</p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {RATINGS.map((r) => (
              <button
                key={r.value}
                onClick={() => handleRate(r.value)}
                className={`rounded-xl py-2.5 text-center text-white ${r.className}`}
              >
                <p className="text-xs font-semibold leading-tight">{r.label}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-white/80">{r.hint}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
