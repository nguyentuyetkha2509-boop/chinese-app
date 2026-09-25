// Phat am tu tieng Trung bang Web Speech API (SpeechSynthesis) - khong can file audio.
let cachedVoice = null
// Loi Chrome da biet: SpeechSynthesisUtterance bi garbage-collect neu khong co
// bien nao giu tham chieu, khien speak() lang im ngau nhien (khong bao loi).
// Giu 1 tham chieu o day de utterance song den khi doc xong.
let currentUtterance = null

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
    setTimeout(() => synth.speak(utter), 50)
  } else {
    synth.speak(utter)
  }
  return true
}

export function hasChineseVoice() {
  return Boolean(cachedVoice)
}

export function isTtsSupported() {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}
