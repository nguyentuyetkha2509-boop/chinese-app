import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import HanziWriter from 'hanzi-writer'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { CheckIcon, ArrowLeftIcon, VolumeIcon } from '../components/Icons'
import { speakChinese } from '../lib/tts'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { playCelebrate, playCorrect } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import CelebrationBadge from '../components/CelebrationBadge'
import SessionBar from '../components/SessionBar'
import SessionNextButton from '../components/SessionNextButton'
import { useSessionSteps } from '../lib/sessionPlan'
import writingPanda from '../assets/panda/writing_panda.webp'
import { CHAR_PINYIN } from '../data/charPinyin'

function extractChars(words) {
  const seen = new Set()
  const list = []
  for (const w of words) {
    for (const ch of w.hanzi) {
      if (/[一-鿿]/.test(ch) && !seen.has(ch)) {
        seen.add(ch)
        // Phien am lay theo TUNG CHU (src/data/charPinyin.js), khong phai pinyin
        // cua ca tu: trang nay luyen tung chu mot, ma pinyin cua tu ghep khong
        // tach roi ra duoc (tu 爸爸 co pinyin "bàba" chu khong phai "bà" + "ba").
        list.push({ char: ch, meaning: w.meaning, pinyin: CHAR_PINYIN[ch] || '' })
      }
    }
  }
  return list
}

// React Router giu nguyen 1 instance component khi chi doi params tren cung 1
// route (xem giai thich day du o LessonDetailPage) - dat key theo levelId+unitId
// de remount lai tu dau moi khi doi bai, tranh giu lai chu dang chon va ket qua
// quiz cua bai truoc.
export default function WritingPage() {
  const { levelId, unitId } = useParams()
  return <WritingPageInner key={`${levelId || ''}:${unitId || ''}`} />
}

function WritingPageInner() {
  const params = useParams()
  const { writingStats, completedUnits, recordWritingPractice, addXp } = useProgress()
  // Buoc cuoi cua phien. Duong dan da co cap do/bai thi dung luon, khong thi de
  // trang tu giai bai muc tieu (xem lib/sessionPlan.js).
  const { active: sessionActive, steps } = useSessionSteps(
    params.unitId ? `${params.levelId}:${params.unitId}` : null
  )
  const [levelId, setLevelId] = useState(params.levelId || 'hsk1')
  // "Tat ca": luyen chung tat ca chu da hoc trong ca cap do (nhu truoc gio).
  // "Theo bai": chon dung 1 bai da hoc xong de luyen rieng, KHONG can lam lai
  // bai kiem tra tu vung moi thay duoc goi y luyen viet (truoc day chi vao
  // duoc qua man "Hoan thanh!" cua bai hoc, phai lam lai quiz moi hien lai).
  const [viewMode, setViewMode] = useState(null) // null (chưa chọn) | 'all' | 'byLesson'
  const level = getLevel(levelId)
  // Phai dung level?. vi getLevel tra ve undefined khi ma cap do tren URL sai
  // (nguoi dung tu sua link, hoac link cu tro toi cap do khong con) - truoc day
  // cho nay doc thang level.units nen ca trang bi trang xoa. Chan han o duoi,
  // sau khi moi hook da chay xong.
  const scopedUnit = params.unitId ? level?.units.find((u) => u.id === Number(params.unitId)) : null
  const chars = useMemo(() => extractChars(scopedUnit ? scopedUnit.words : level?.words || []), [level, scopedUnit])
  const [selected, setSelected] = useState(chars[0])
  const [quizResult, setQuizResult] = useState(null)
  // Chu nao khong tai duoc net (vd. mat mang ma chua tung mo chu do lan nao,
  // nen chua nam trong cache cua service worker).
  const [loadError, setLoadError] = useState(null)
  const [justCompletedUnit, setJustCompletedUnit] = useState(false)
  const targetRef = useRef(null)
  const writerRef = useRef(null)
  const advanceTimeoutRef = useRef(null)

  useEffect(() => {
    if (!chars.some((c) => c.char === selected?.char)) {
      setSelected(chars[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chars])

  useEffect(() => {
    if (!targetRef.current || !selected) return
    clearTimeout(advanceTimeoutRef.current)
    targetRef.current.innerHTML = ''
    setQuizResult(null)
    setJustCompletedUnit(false)
    setLoadError(null)
    writerRef.current = HanziWriter.create(targetRef.current, selected.char, {
      width: 260,
      height: 260,
      padding: 12,
      showOutline: true,
      strokeColor: '#7e22ce',
      outlineColor: '#e9d5ff',
      highlightColor: '#ec4899',
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200,
      // Lay du lieu net chu tu chinh server cua app (public/hanzi-data/, tao
      // boi scripts/extract-hanzi-data.mjs) thay vi mac dinh cua hanzi-writer
      // la goi ra CDN ben ngoai (cdn.jsdelivr.net) moi lan hien 1 chu - cach
      // do gay hien chu cham/khong on dinh tuy mang.
      charDataLoader: (char, onLoad, onError) => {
        fetch(`${import.meta.env.BASE_URL}hanzi-data/${encodeURIComponent(char)}.json`)
          .then((res) => (res.ok ? res.json() : Promise.reject(new Error('missing char data'))))
          .then((data) => {
            onLoad(data)
            // Tu dong ve net chu ngay khi chon, thay vi de khung trong cho
            // toi khi nguoi dung tu bam "Xem thu tu net" - truoc day nhin
            // giong nhu bi "cham/khong hien gi" vi khung chi co duong vien
            // mo nhat cho toi luc do.
            writerRef.current?.animateCharacter()
          })
          .catch((e) => {
            // Truoc day chi goi onError() ma khong hien gi ca, nen nguoi dung
            // mat mang chi thay mot khung ve trang tron khong loi giai thich.
            setLoadError(char)
            onError?.(e)
          })
      }
    })
    return () => {
      writerRef.current = null
      clearTimeout(advanceTimeoutRef.current)
    }
    // Them viewMode vao dependency: khung <div ref={targetRef}> chi duoc mount
    // SAU khi nguoi dung chon che do "Luyen tat ca" (showPracticeArea moi
    // thanh true) - luc do "selected" (chu dau tien) khong doi gia tri nen
    // effect chi khoa vao [selected] se KHONG chay lai, targetRef.current
    // van la null tu lan chay dau tien (truoc khi khung ton tai) => chu dau
    // tien khong bao gio duoc ve, phai doi nguoi dung tu bam sang chu khac
    // moi thay. Day chinh la nguyen nhan "hien chu cham/khong hien" nguoi
    // dung bao, chu khong phai do toc do tai du lieu.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, viewMode])

  function showAnimation() {
    writerRef.current?.animateCharacter()
  }

  function startQuiz() {
    setQuizResult(null)
    writerRef.current?.quiz({
      onComplete: (summary) => {
        const mistakes = summary?.totalMistakes ?? 0
        const perfect = mistakes === 0
        // Kiem tra TRUOC khi ghi nhan: day co phai chu cuoi cung con thieu cua
        // bai khong, de biet luot nay co hoan thanh ca bai hay chua.
        const alreadyPracticed = writingStats.practiced.includes(selected.char)
        const remainingBefore = chars.filter((c) => !writingStats.practiced.includes(c.char)).length
        const willCompleteUnit = !!scopedUnit && !alreadyPracticed && remainingBefore <= 1

        recordWritingPractice(selected.char, perfect)
        if (perfect) {
          playCelebrate()
          addXp(XP_REWARDS.writingPerfect)
        } else {
          playCorrect()
          addXp(XP_REWARDS.writingDone)
        }
        setQuizResult(perfect ? 'perfect' : `Xong! Sai ${mistakes} lần`)

        if (willCompleteUnit) {
          playCelebrate()
          setJustCompletedUnit(true)
          return
        }

        // Tu chuyen sang chu tiep theo sau khi xem ket qua mot chut, thay vi
        // dung lai o chu vua viet xong bat nguoi dung phai bam chon thu cong.
        const nextChar = chars[chars.findIndex((c) => c.char === selected.char) + 1]
        if (nextChar) {
          advanceTimeoutRef.current = setTimeout(() => setSelected(nextChar), 1500)
        }
      }
    })
  }

  const practicedCount = chars.filter((c) => writingStats.practiced.includes(c.char)).length
  const showPracticeArea = !!scopedUnit || viewMode === 'all'
  const inSession = sessionActive && !!scopedUnit
  // Trong phien, the chuc mung con hien ca khi vao trang ma da luyen het chu
  // truoc do - neu khong thi nguoi hoc ket thuc buoc Truoc do bang cach khac se
  // lac o day, khong co loi ra. "Luyen them" phai tat duoc the nay, neu khong
  // dieu kien "da luyen het" van dung nen the hien lai ngay lap tuc.
  const unitWritingDone = !!scopedUnit && chars.length > 0 && practicedCount === chars.length
  const [dismissedDone, setDismissedDone] = useState(false)
  const showDoneCard = !!scopedUnit && (justCompletedUnit || (inSession && unitWritingDone && !dismissedDone))

  // Dat sau TAT CA cac hook (useState/useMemo/useRef/useEffect o tren) de khong
  // pha vo thu tu goi hook giua cac lan render.
  if (!level) {
    return (
      <div className="px-4 pt-6">
        <p className="text-gray-700">Không tìm thấy cấp độ này.</p>
        <Link to="/viet-chu" className="mt-2 inline-block text-brand-600">
          Về trang Viết chữ Hán
        </Link>
      </div>
    )
  }

  // Truoc day dong nay la `if (!selected) return null` - man hinh TRANG TRON,
  // khong tieu de, khong nut quay lai, khong duong ve. Kho xay ra nhung la duong
  // cut that. Nay hien mot loi ra ro rang.
  if (!selected) {
    return (
      <div className="px-4 pt-6">
        <p className="text-gray-700">Chưa chọn được chữ nào để luyện.</p>
        <Link to="/viet-chu" className="mt-2 inline-block text-brand-600">
          Về trang Viết chữ Hán
        </Link>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      {inSession && <SessionBar steps={steps} currentKey="writing" />}
      {scopedUnit ? (
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BackButton />
            <div>
              <h1 className="text-xl text-brand-800">Viết chữ · {level.label} {scopedUnit.title}</h1>
              <p className="text-xs text-gray-500">Đã luyện {practicedCount}/{chars.length}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img src={writingPanda} alt="Gấu trúc luyện viết chữ" className="mx-auto mb-2 w-36 max-w-full" />
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BackButton />
              <h1 className="text-2xl text-brand-800">Viết chữ Hán</h1>
            </div>
            <span className="text-sm text-gray-500">
              Đã luyện {practicedCount}/{chars.length}
            </span>
          </div>
        </>
      )}

      {!scopedUnit && <LevelTabs value={levelId} onChange={setLevelId} />}

      {!scopedUnit && viewMode === null && (
        <div className="mb-5 mt-2 flex flex-col gap-3">
          <button
            onClick={() => setViewMode('all')}
            className="rounded-2xl bg-gradient-to-br from-brand-600 to-candy-500 p-5 text-left text-white shadow-md"
          >
            <p className="text-lg font-semibold">🈶 Luyện tất cả</p>
            <p className="mt-1 text-sm text-white/90">Toàn bộ {chars.length} chữ Hán của {level.label}</p>
          </button>
          <button
            onClick={() => setViewMode('byLesson')}
            className="rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 p-5 text-left text-white shadow-md"
          >
            <p className="text-lg font-semibold">📚 Theo bài</p>
            <p className="mt-1 text-sm text-white/90">Chọn đúng 1 bài đã học xong để luyện riêng</p>
          </button>
        </div>
      )}

      {!scopedUnit && viewMode !== null && (
        <button
          onClick={() => setViewMode(null)}
          className="mb-4 flex items-center gap-1 text-sm text-gray-500"
        >
          <ArrowLeftIcon width={20} height={20} /> Đổi chế độ luyện
        </button>
      )}

      {!scopedUnit && viewMode === 'byLesson' ? (
        <div className="space-y-3">
          {level.units.filter((u) => completedUnits.includes(`${levelId}:${u.id}`)).length === 0 && (
            <p className="rounded-2xl bg-white p-4 text-center text-sm text-gray-500 shadow-sm">
              Chưa có bài nào học xong ở {level.label} - học từ vựng xong 1 bài là luyện viết được ngay.
            </p>
          )}
          {level.units
            .filter((u) => completedUnits.includes(`${levelId}:${u.id}`))
            .map((unit) => {
              const unitChars = extractChars(unit.words)
              const done = unitChars.filter((c) => writingStats.practiced.includes(c.char)).length
              const accent = accentFor(unit.id)
              return (
                <Link
                  key={unit.id}
                  to={`/viet-chu/${levelId}/${unit.id}`}
                  className={`flex items-center justify-between rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
                >
                  <p className="text-base text-gray-800">{unit.title}</p>
                  <p className={`text-xs ${accent.text}`}>
                    Đã luyện {done}/{unitChars.length}
                  </p>
                </Link>
              )
            })}
        </div>
      ) : null}

      {showPracticeArea && (
        <>
          {showDoneCard && scopedUnit && (
            <div className="mb-4 rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
              <CelebrationBadge />
              <p className="text-xl">🎉 Hoàn thành viết chữ bài này!</p>
              <p className="mt-1 text-white/90">
                Đã luyện đủ {chars.length}/{chars.length} chữ của {scopedUnit.title}
              </p>
              {inSession ? (
                // Trong phien: Viet chu la buoc CUOI, nen nut chinh o day luon la
                // ket thuc phien (khong con buoc nao phia truoc).
                <>
                  <SessionNextButton steps={steps} currentKey="writing" variant="onGradient" />
                  <button
                    onClick={() => {
                      setJustCompletedUnit(false)
                      setDismissedDone(true)
                    }}
                    className="mt-3 text-xs text-white/80 underline"
                  >
                    Luyện thêm
                  </button>
                </>
              ) : (
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setJustCompletedUnit(false)}
                    className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white"
                  >
                    Luyện thêm
                  </button>
                  {/* Truoc day nut nay ghi "Ve Hoc hom nay" nhung tro ve "/" (trang
                      chu) chu khong phai trang ke hoach - nhan sai duong. */}
                  <Link to="/hoc-hom-nay" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
                    Về Học hôm nay
                  </Link>
                </div>
              )}
            </div>
          )}

          {hasPictograph(selected.char) && (
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-sun-100 to-candy-100 p-4">
              <PictographIcon char={selected.char} className="h-16 w-16 shrink-0 text-candy-700" />
              <div>
                <p className="text-xs font-semibold text-candy-700">💡 Mẹo nhớ chữ tượng hình</p>
                <p className="text-sm text-gray-700">{PICTOGRAPH_HINTS[selected.char]}</p>
              </div>
            </div>
          )}

          {!hasPictograph(selected.char) && hasRadicalHint(selected.char) && (
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-teal-100 to-sky-100 p-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl text-teal-700">
                {getRadicalSymbol(selected.char)}
              </span>
              <div>
                <p className="text-xs font-semibold text-teal-700">🧩 Mẹo nhớ theo bộ thủ</p>
                <p className="text-sm text-gray-700">{getRadicalHint(selected.char)}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center">
            <div ref={targetRef} className="hanzi-target bg-white" style={{ width: 260, height: 260 }} />

            {loadError && (
              <div className="mt-3 w-full rounded-2xl bg-sun-100 p-3 text-center">
                <p className="text-xs font-semibold text-sun-700">⚠️ Không tải được nét chữ này</p>
                <p className="mt-1 text-xs text-gray-700">
                  Chữ chưa từng mở thì cần mạng ở lần đầu. Bạn kết nối mạng rồi thử lại nhé.
                </p>
              </div>
            )}

            {/* Icon loa da noi ro day la nut nghe, khong can them chu "Nghe phat
                am" nua - cho do de danh hien phien am cua chu, thu ma nguoi hoc
                can nhin hon. Bam vao bat ky dau trong dong cung nghe doc. */}
            <button
              onClick={() => speakChinese(selected.char)}
              className="mt-2 flex min-h-11 items-center gap-1.5 px-1 text-sm"
            >
              <VolumeIcon width={20} height={20} className="text-brand-600" />
              {selected.pinyin && <span className="font-semibold text-brand-700">{selected.pinyin}</span>}
              {selected.pinyin && <span className="text-gray-300">·</span>}
              <span className="text-gray-500">{selected.meaning}</span>
            </button>

            {quizResult && (
              <p className="mt-2 flex items-center gap-1 text-brand-600">
                <CheckIcon width={22} height={22} />
                {quizResult === 'perfect' ? 'Hoàn hảo, không sai nét nào!' : quizResult}
              </p>
            )}

            <div className="mt-4 flex w-full gap-2">
              <button onClick={showAnimation} className="flex-1 rounded-xl border border-brand-300 py-2.5 text-brand-700">
                Xem thứ tự nét
              </button>
              <button onClick={startQuiz} className="flex-1 rounded-xl bg-brand-700 py-2.5 text-white">
                Tự viết thử
              </button>
            </div>
          </div>

          <p className="mb-2 mt-6 text-sm text-gray-500">Chọn chữ khác:</p>
          <div className="grid grid-cols-8 gap-2">
            {chars.map(({ char }, i) => {
              const done = writingStats.practiced.includes(char)
              const accent = accentFor(i)
              return (
                <button
                  key={char}
                  onClick={() => setSelected(chars.find((c) => c.char === char))}
                  className={`relative rounded-lg py-2 text-lg ${
                    selected.char === char ? 'bg-brand-700 text-white' : `${accent.bg} ${accent.text}`
                  }`}
                >
                  {char}
                  {hasPictograph(char) && selected.char !== char && (
                    <span className="absolute left-0.5 top-0.5 text-[10px]">💡</span>
                  )}
                  {!hasPictograph(char) && hasRadicalHint(char) && selected.char !== char && (
                    <span className="absolute left-0.5 top-0.5 text-[10px]">🧩</span>
                  )}
                  {done && selected.char !== char && (
                    <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
