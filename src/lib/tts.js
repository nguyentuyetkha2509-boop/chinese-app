// Phat am tu tieng Trung bang Web Speech API (SpeechSynthesis) - khong can file audio.
let cachedVoice = null
// Loi Chrome da biet: SpeechSynthesisUtterance bi garbage-collect neu khong co
// bien nao giu tham chieu, khien speak() lang im ngau nhien (khong bao loi).
// Giu 1 tham chieu o day de utterance song den khi doc xong. Co y KHONG doc lai
// bien nay - giu no song chinh la muc dich.
// eslint-disable-next-line no-unused-vars
let currentUtterance = null
// Neu dang cho 50ms de goi speak() (xem cuoi file) ma nguoi dung roi trang thi
// phai huy luon hen gio do - khong thi tieng van bat len sau khi da sang trang khac.
let pendingSpeakTimer = null

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

function loadVoices() {
  const voices = window.speechSynthesis?.getVoices?.() || []
  const chinese = voices.filter((v) => v.lang?.startsWith('zh'))
  // Bo cac giong "vui nhon" truoc khi chon, de buoc du phong ben duoi cung
  // khong roi vao chung.
  const natural = chinese.filter((v) => !isNoveltyVoice(v))

  cachedVoice =
    PREFERRED_VOICES.reduce((found, want) => {
      if (found) return found
      return natural.find((v) => (v.name || '').toLowerCase().includes(want)) || null
    }, null) ||
    natural.find((v) => v.lang === 'zh-CN') ||
    natural[0] ||
    chinese[0] ||
    null
  return cachedVoice
}

// Voice list co the load bat dong bo lan dau tren mot so trinh duyet.
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
}

export function speakChinese(text, { rate = 0.85, onError, onEnd } = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    onError?.('unsupported')
    return false
  }
  const synth = window.speechSynthesis
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'zh-CN'
  utter.rate = rate
  const voice = cachedVoice || loadVoices()
  if (voice) utter.voice = voice
  utter.onerror = (e) => onError?.(e.error || 'unknown')
  utter.onend = () => onEnd?.()
  currentUtterance = utter

  // Goi cancel() roi speak() ngay lap tuc co the bi "nuot" tieng tren Chrome/Android -
  // cho mot nhip de trinh duyet xu ly xong lenh huy truoc khi doc cau moi.
  if (synth.speaking || synth.pending) {
    synth.cancel()
    pendingSpeakTimer = setTimeout(() => {
      pendingSpeakTimer = null
      synth.speak(utter)
    }, 50)
  } else {
    synth.speak(utter)
  }
  return true
}

// Huy moi tieng dang doc hoac dang cho doc. Goi khi roi trang (unmount) hoac khi
// nguoi dung dung lai giua chung.
//
// Thieu buoc nay thi tieng Trung van doc tiep o trang khac sau khi nguoi hoc da
// bam Back, va chuoi phat nhieu cau (xem useSequencePlayer) van chay ngam.
export function stopSpeaking() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  clearTimeout(pendingSpeakTimer)
  pendingSpeakTimer = null
  window.speechSynthesis.cancel()
  currentUtterance = null
}

export function hasChineseVoice() {
  return Boolean(cachedVoice)
}

export function isTtsSupported() {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}
