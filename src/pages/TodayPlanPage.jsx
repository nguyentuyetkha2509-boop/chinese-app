import { Link, useNavigate } from 'react-router-dom'
import { ALL_WORDS, getNextUnit, getLastCompletedUnit } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { getCardStats } from '../lib/srs'
import { getDailyNewWordLimit, getRelatedGrammarForUnit } from '../lib/curriculum'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CardsIcon,
  BookIcon,
  GrammarIcon,
  PencilIcon,
  MicIcon,
  CheckIcon
} from '../components/Icons'

export default function TodayPlanPage() {
  const navigate = useNavigate()
  const { srsState, completedUnits, newWordsToday, writingStats } = useProgress()
  const allIds = ALL_WORDS.map((w) => w.id)
  const dueCount = getCardStats(allIds, srsState).due
  const dailyLimit = getDailyNewWordLimit()
  const learnedToday = newWordsToday.count
  const capReached = learnedToday >= dailyLimit
  const nextUnit = getNextUnit(completedUnits)
  const relatedGrammar = nextUnit ? getRelatedGrammarForUnit(nextUnit.levelLabel, nextUnit.unit) : null
  const lastUnit = getLastCompletedUnit(completedUnits)

  const reviewDone = dueCount === 0
  const newStepDone = capReached || !nextUnit

  const lastUnitChars = lastUnit
    ? [...new Set(lastUnit.unit.words.flatMap((w) => [...w.hanzi]).filter((ch) => /[一-鿿]/.test(ch)))]
    : []
  const writingDone = lastUnit ? lastUnitChars.every((ch) => writingStats.practiced.includes(ch)) : true

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Học hôm nay</h1>
      </div>
      <p className="mb-5 text-sm text-gray-500">
        Ôn trước - học mới - củng cố bằng ngữ pháp, viết và phát âm. Theo đúng thứ tự này giúp nhớ lâu nhất.
      </p>

      <div className={`mb-4 rounded-2xl p-4 shadow-sm ${reviewDone ? 'bg-teal-100' : 'bg-white'}`}>
        <div className="flex items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              reviewDone ? 'bg-teal-500 text-white' : 'bg-brand-100 text-brand-700'
            }`}
          >
            {reviewDone ? <CheckIcon width={20} height={20} /> : <CardsIcon width={20} height={20} />}
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500">Bước 1 · Ôn tập</p>
            <p className="text-base text-gray-800">
              {reviewDone ? 'Đã ôn xong, không còn thẻ đến hạn 🎉' : `${dueCount} thẻ cần ôn lại hôm nay`}
            </p>
          </div>
        </div>
        {!reviewDone && (
          <Link
            to="/on-tap"
            className="mt-3 block w-full rounded-xl bg-brand-700 py-2.5 text-center text-sm font-semibold text-white"
          >
            Ôn tập ngay
          </Link>
        )}
      </div>

      <div className={`mb-4 rounded-2xl p-4 shadow-sm ${newStepDone && capReached ? 'bg-teal-100' : 'bg-white'}`}>
        <div className="flex items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              newStepDone ? 'bg-teal-500 text-white' : 'bg-sky-100 text-sky-700'
            }`}
          >
            {newStepDone ? <CheckIcon width={20} height={20} /> : <BookIcon width={20} height={20} />}
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500">Bước 2 · Học từ mới</p>
            {!nextUnit ? (
              <p className="text-base text-gray-800">Bạn đã học hết toàn bộ giáo trình! 🎉</p>
            ) : capReached ? (
              <p className="text-base text-gray-800">
                Đã đạt giới hạn hôm nay ({learnedToday}/{dailyLimit} từ) - mai học tiếp nhé!
              </p>
            ) : (
              <p className="text-base text-gray-800">
                {nextUnit.levelLabel} · {nextUnit.unit.title}
              </p>
            )}
            {nextUnit && !capReached && (
              <p className="mt-0.5 text-xs text-gray-400">
                Đã học {learnedToday}/{dailyLimit} từ mới hôm nay
              </p>
            )}
          </div>
        </div>
        {nextUnit && !capReached && (
          <Link
            to={`/bai-hoc/${nextUnit.levelId}/${nextUnit.unit.id}`}
            className="mt-3 flex items-center justify-center gap-1 rounded-xl bg-sky-600 py-2.5 text-center text-sm font-semibold text-white"
          >
            Học ngay <ArrowRightIcon width={16} height={16} />
          </Link>
        )}
        {capReached && (
          <Link to="/bai-hoc" className="mt-3 block text-center text-xs text-gray-400 underline">
            Vẫn muốn học thêm? Xem toàn bộ bài học
          </Link>
        )}
      </div>

      {relatedGrammar && !capReached && (
        <div className="mb-4 rounded-2xl bg-gold-100 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-600">
              <GrammarIcon width={20} height={20} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500">Bước 3 · Ngữ pháp liên quan</p>
              <p className="text-base text-gray-800">{relatedGrammar.title}</p>
            </div>
          </div>
          <Link
            to={`/ngu-phap/${relatedGrammar.key}`}
            className="mt-3 block w-full rounded-xl bg-white py-2.5 text-center text-sm font-semibold text-gold-600"
          >
            Xem ngữ pháp này
          </Link>
        </div>
      )}

      {lastUnit && (
        <div className={`mb-4 rounded-2xl p-4 shadow-sm ${writingDone ? 'bg-teal-100' : 'bg-white'}`}>
          <div className="flex items-start gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                writingDone ? 'bg-teal-500 text-white' : 'bg-candy-100 text-candy-700'
              }`}
            >
              {writingDone ? <CheckIcon width={20} height={20} /> : <PencilIcon width={20} height={20} />}
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500">Bước 4 · Viết chữ củng cố</p>
              <p className="text-base text-gray-800">
                {writingDone ? `Đã viết xong chữ của ${lastUnit.unit.title} 🎉` : lastUnit.unit.title}
              </p>
            </div>
          </div>
          {!writingDone && (
            <Link
              to={`/viet-chu/${lastUnit.levelId}/${lastUnit.unit.id}`}
              className="mt-3 block w-full rounded-xl bg-candy-600 py-2.5 text-center text-sm font-semibold text-white"
            >
              Luyện viết bài này
            </Link>
          )}
        </div>
      )}

      {lastUnit && (
        <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-700">
              <MicIcon width={20} height={20} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-500">Bước 5 · Luyện phát âm</p>
              <p className="text-base text-gray-800">{lastUnit.unit.title}</p>
            </div>
          </div>
          <Link
            to={`/phat-am/${lastUnit.levelId}/${lastUnit.unit.id}`}
            className="mt-3 block w-full rounded-xl bg-sun-600 py-2.5 text-center text-sm font-semibold text-white"
          >
            Luyện phát âm bài này
          </Link>
        </div>
      )}

      <Link to="/lo-trinh" className="block text-center text-sm text-brand-600 underline">
        Xem lộ trình học toàn bộ 6 cấp
      </Link>
      <Link to="/cai-dat" className="mt-2 block text-center text-xs text-gray-400 underline">
        Đổi giới hạn từ mới mỗi ngày
      </Link>
    </div>
  )
}
