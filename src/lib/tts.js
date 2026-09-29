// Phat am tu tieng Trung bang Web Speech API (SpeechSynthesis) - khong can file audio.
//
// Vi sao phan chon giong phai cau ky den the nay: rat nhieu may VON CO giong tieng
// Trung trong getVoices() nhung bam loa lai khong ra tieng nao, va trinh duyet
// khong bao loi gi ca (khong onstart, khong onerror, chi im lang). Hai truong hop
// hay gap nhat:
//   - macOS: giong CHUA TAI VE van nam trong danh sach (Tingting, Yu-shu...)
//     nhung may khong co du lieu doc nen doc ra im.
//   - Chrome: dat speaking = true roi ket luan mai, khong bao onend.
// Khong the biet truoc giong nao doc that duoc, nen cach chac chan la THU LAN LUOT:
// doc bang ung vien dau tien, qua START_TIMEOUT_MS ma chua co onstart thi coi nhu
// giong do khong dung duoc, huy va doi sang ung vien ke tiep, cu the cho den khi
// co tieng. Giong doc duoc nho lai (localStorage) de lan sau thu thang no truoc.
import { loadJSON, saveJSON } from './storage'
import { enablePlaybackAudio } from './audioSession'

const VOICE_KEY = 'ttsVoice'
// Cho toi da bao lau de mot ung vien bat dau doc. Rong rai mot chut vi lan dau
// trinh duyet khoi tao bo doc co the cham; im qua moc nay thi doi giong.
const START_TIMEOUT_MS = 1500
// Goi cancel() roi speak() ngay lap tuc co the bi "nuot" tieng tren Chrome/Android.
const CANCEL_GAP_MS = 50

// Danh sach ung vien theo thu tu uu tien. Thay doi khi getVoices() doi.
let cachedVoices = null
// Ung vien dau tien - de tra loi cau hoi "may nay co giong tieng Trung khong".
let cachedVoice = null
// Loi Chrome da biet: SpeechSynthesisUtterance bi garbage-collect neu khong co
// bien nao giu tham chieu, khien speak() lang im ngau nhien (khong bao loi).
// Giu 1 tham chieu o day de utterance song den khi doc xong. Co y KHONG doc lai
// bien nay - giu no song chinh la muc dich.
// eslint-disable-next-line no-unused-vars
let currentUtterance = null
// Moi lan goi speakChinese() tang so nay len. Cac callback va hen gio cua lan goi
// truoc do so sanh voi so hien tai roi tu bo, nen chung khong the pha lan doc moi
// (vi du doc tiep mot cau ma nguoi hoc da bo qua, hoac ghi de trang thai nut).
let generation = 0
let rememberedVoiceName = loadJSON(VOICE_KEY, null)

// Man hinh canh bao (TtsWarning) dang ky o day de biet khi app da thu het moi
// giong ma van khong ra tieng - nguoi hoc can duoc noi vi sao, thay vi bam loa
// mai trong im lang.
const failureListeners = new Set()

export function subscribeTtsFailure(cb) {
  failureListeners.add(cb)
  return () => failureListeners.delete(cb)
}

// macOS cai san mot bo giong "vui nhon" (Eddy, Grandpa...) dung chung cho moi
// ngon ngu, trong do co tieng Trung. Trong danh sach cua trinh duyet chung lai
// dung truoc cac giong that, nen neu chi lay giong zh-CN dau tien thi rat de
// vinh phai giong nam/robot nay - do la ly do cung mot app ma may nay doc giong
// nam, may khac (dien thoai) doc giong nu.
const NOVELTY_VOICES = ['eddy', 'flo', 'grandma', 'grandpa', 'reed', 'rocko', 'sandy', 'shelley']

// Giong nu chuan, tu nhien, co tren cac nen tang pho bien (macOS, Windows,
// Android, Chrome). Uu tien tieng Quan thoai dai luc (HSK la tieng pho thong),
// sau do moi den giong Dai Loan/Hong Kong. Duyet theo thu tu nay truoc khi
// chiu dung bat ky giong tieng Trung nao khac.
const PREFERRED_VOICES = [
  'tingting', 'ting-ting', '婷婷',        // macOS zh-CN
  'huihui', 'yaoyao', 'xiaoxiao', 'lili', 'google 普通话', // Windows / Chrome / Android
  'yu-shu', '语舒',                        // macOS zh-CN
  'meijia', '美佳',                        // macOS zh-TW
  'sinji', '善怡'                          // macOS zh-HK
]

const isNoveltyVoice = (v) => {
  const name = (v.name || '').toLowerCase()
  return NOVELTY_VOICES.some((n) => name.includes(n))
}

const sameVoice = (a, b) => Boolean(a) && Boolean(b) && a.name === b.name && a.lang === b.lang

// Dung danh sach ung vien tu danh sach giong cua trinh duyet. Cuoi danh sach luon
// co null = "de trinh duyet tu chon giong theo lang", vi co may chi doc duoc khi
// khong gan voice nao.
function buildVoices(voices) {
  const chinese = voices.filter((v) => v.lang?.startsWith('zh'))
  // Bo cac giong "vui nhon" truoc khi chon, de buoc du phong ben duoi cung
  // khong roi vao chung.
  const natural = chinese.filter((v) => !isNoveltyVoice(v))
  const ordered = []
  const push = (v) => {
    if (!v) return
    if (ordered.some((o) => sameVoice(o, v))) return
    ordered.push(v)
  }

  // Giong da doc duoc trong lan dung truoc (may nay, trinh duyet nay) - thu lai
  // truoc tien de khong phai mat 1,5 giay cho lai tu dau.
  const remembered = rememberedVoiceName ? voices.find((v) => v.name === rememberedVoiceName) : null
  push(remembered)
  for (const want of PREFERRED_VOICES) {
    push(natural.find((v) => (v.name || '').toLowerCase().includes(want)))
  }
  natural.filter((v) => v.lang === 'zh-CN').forEach(push)
  natural.forEach(push)
  chinese.forEach(push) // cuoi cung moi den giong "vui nhon": co tieng con hon im
  // De trinh duyet tu chon giong theo lang = 'zh-CN'. Chi la luoi an toan cuoi
  // cung, nen phai nam CUOI danh sach - co may chi doc duoc khi khong gan voice.
  ordered.push(null)
  return ordered
}

function loadVoices() {
  const voices = window.speechSynthesis?.getVoices?.() || []
  cachedVoices = buildVoices(voices)
  cachedVoice = cachedVoices.find((v) => v) || null
  return cachedVoice
}

// Voice list co the load bat dong bo lan dau tren mot so trinh duyet.
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
}

function rememberVoice(voice) {
  if (!voice?.name || voice.name === rememberedVoiceName) return
  rememberedVoiceName = voice.name
  saveJSON(VOICE_KEY, voice.name)
  // Dua giong vua doc duoc len dau danh sach cua phien lam viec nay, de cac lan
  // bam sau khong phai cho het 1,5 giay thu giong cu.
  cachedVoices = [voice, ...cachedVoices.filter((v) => !sameVoice(v, voice))]
}

// Doc text len. Tra ve true neu da goi duoc bo doc (khong bao dam co tieng - xem
// phan thu lan luot o duoi).
export function speakChinese(text, { rate = 0.85, onError, onEnd } = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    onError?.('unsupported')
    return false
  }
  // Tren iPhone: neu khong xin Safari doi xu am thanh nhu nhac/phim thi cong tac
  // Im lang tat luon tieng doc, bam loa khong nghe gi.
  enablePlaybackAudio()
  const synth = window.speechSynthesis
  if (!cachedVoices) loadVoices()
  const candidates = cachedVoices

  const gen = ++generation
  let attemptId = 0
  let index = 0
  let finished = false
  let gapTimer = null
  let startWatchdog = null

  const finish = () => {
    finished = true
    clearTimeout(gapTimer)
    gapTimer = null
    clearTimeout(startWatchdog)
    startWatchdog = null
  }

  // Het ung vien ma van im: bao ra ngoai de man hinh canh bao hien len.
  const giveUp = (err) => {
    finish()
    for (const cb of failureListeners) cb(err)
    onError?.(err)
  }

  const next = (err) => {
    if (finished || gen !== generation) return
    // Vo hieu hoa luot vua roi TRUOC khi cancel(), neu khong chinh lenh cancel
    // nay lam utterance cu ban ra onerror('interrupted') va bi tinh la loi that.
    attemptId += 1
    index += 1
    if (index >= candidates.length) {
      giveUp(err)
      return
    }
    synth.cancel()
    attempt(CANCEL_GAP_MS)
  }

  const attempt = (delay) => {
    if (finished || gen !== generation) return
    const id = ++attemptId
    const voice = candidates[index]
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'zh-CN'
    utter.rate = rate
    // Dat ro am luong toi da, khong de trinh duyet tu chon
    utter.volume = 1
    if (voice) utter.voice = voice
    currentUtterance = utter
    const fresh = () => gen === generation && id === attemptId && !finished

    utter.onstart = () => {
      if (!fresh()) return
      clearTimeout(startWatchdog)
      startWatchdog = null
      rememberVoice(voice)
    }
    utter.onend = () => {
      if (!fresh()) return
      finish()
      onEnd?.()
    }
    utter.onerror = (e) => {
      if (!fresh()) return
      const err = e?.error || 'unknown'
      // 'interrupted' / 'canceled': do chinh app huy (bam tu khac, doi giong,
      // roi trang) - khong phai loi doc, cung khong phai het ung vien.
      if (err === 'interrupted' || err === 'canceled') return
      next(err)
    }

    const speak = () => {
      if (finished || gen !== generation || id !== attemptId) return
      synth.speak(utter)
      clearTimeout(startWatchdog)
      startWatchdog = setTimeout(() => {
        if (!fresh()) return
        next('silent')
      }, START_TIMEOUT_MS)
    }

    // Dang co tieng khac doc thi phai huy no truoc, va cho mot nhip: goi cancel()
    // roi speak() ngay lap tuc co the bi "nuot" tieng tren Chrome/Android.
    if (delay) gapTimer = setTimeout(speak, delay)
    else speak()
  }

  const busy = synth.speaking || synth.pending
  if (busy) synth.cancel()
  attempt(busy ? CANCEL_GAP_MS : 0)
  return true
}

// Huy moi tieng dang doc hoac dang cho doc. Goi khi roi trang (unmount) hoac khi
// nguoi dung dung lai giua chung.
//
// Thieu buoc nay thi tieng Trung van doc tiep o trang khac sau khi nguoi hoc da
// bam Back, va chuoi phat nhieu cau (xem useSequencePlayer) van chay ngam.
export function stopSpeaking() {
  generation += 1
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  currentUtterance = null
}

export function hasChineseVoice() {
  return Boolean(cachedVoice)
}

export function isTtsSupported() {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}
