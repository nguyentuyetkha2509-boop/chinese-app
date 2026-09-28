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

function loadVoices() {
  const voices = window.speechSynthesis?.getVoices?.() || []
  cachedVoice =
    voices.find((v) => v.lang === 'zh-CN') ||
    voices.find((v) => v.lang?.startsWith('zh')) ||
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
