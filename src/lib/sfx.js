// Hieu ung am thanh ngan, tu tong hop bang Web Audio API (khong can file mp3,
// khong lo ban quyen) - tao cam giac vui ve, hung thu khi lam bai/on tap.
// Dang tong hop nen hoat dong on dinh hon nhieu so voi giong doc TTS (khong
// phu thuoc giong noi co san tren may).
import { enablePlaybackAudio } from './audioSession'

let ctx = null

function getCtx() {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  // Tren iPhone: xin Safari doi xu am thanh nay nhu nhac/phim, neu khong thi
  // cong tac Im lang se tat het tieng game.
  enablePlaybackAudio()
  if (!ctx) ctx = new AudioContextClass()
  return ctx
}

// Moi am di qua mot bus chung (master gain + compressor) de tieng dung, sai,
// chuc mung, lat the co cung do to, va khi cac am chong nhau (vd on tap lien
// tuc) khong bi vo tieng.
let bus = null

function getBus(audioCtx) {
  if (bus && bus.context === audioCtx) return bus
  const master = audioCtx.createGain()
  master.gain.value = 1
  const comp = audioCtx.createDynamicsCompressor()
  comp.threshold.value = -18
  comp.knee.value = 12
  comp.ratio.value = 6
  comp.attack.value = 0.003
  comp.release.value = 0.15
  master.connect(comp)
  comp.connect(audioCtx.destination)
  bus = master
  return bus
}

// "level" la muc to MONG MUON (cung don vi cho moi loai song), khong phai bien
// do dinh. Song sin co RMS chi bang ~0,71 bien do dinh, song vuong bang 1,0 -
// truoc day dat cung kieu "gain" nen am dung (sin, 0,18) va am sai (vuong, 0,1)
// to nho khac han nhau. Quy ve RMS de nghe deu nhau.
const PEAK_FOR_RMS = { sine: Math.SQRT2, triangle: Math.sqrt(3), square: 1, sawtooth: Math.sqrt(3) }
const BASE_LEVEL = 0.12

function tone(audioCtx, freq, startTime, duration, { type = 'sine', level = BASE_LEVEL } = {}) {
  const osc = audioCtx.createOscillator()
  const g = audioCtx.createGain()
  const peak = level * (PEAK_FOR_RMS[type] ?? 1)
  osc.type = type
  osc.frequency.value = freq
  g.gain.setValueAtTime(0, startTime)
  g.gain.linearRampToValueAtTime(peak, startTime + 0.01)
  g.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
  osc.connect(g)
  g.connect(getBus(audioCtx))
  osc.start(startTime)
  osc.stop(startTime + duration)
}

// Trinh duyet tao AudioContext o trang thai "suspended" cho den khi co tuong
// tac cua nguoi dung, va co the tu suspend lai sau mot luc khong dung den
// (Safari kha nang cao). resume() la bat dong bo - goi roi phat luon ngay sau
// (nhu code cu) khi context chua thuc su resume xong se bi "nuot" tieng ma
// khong bao loi gi ca, tao cam giac "bai nay khong co am". Cho resume() xong
// hoac chay ngay neu context da o trang thai running.
function playScheduled(schedule) {
  const audioCtx = getCtx()
  if (!audioCtx) return
  const run = () => schedule(audioCtx, audioCtx.currentTime)
  if (audioCtx.state === 'running') run()
  else audioCtx.resume().then(run).catch(() => {})
}

export function playCorrect() {
  playScheduled((audioCtx, now) => {
    tone(audioCtx, 880, now, 0.12)
    tone(audioCtx, 1318.5, now + 0.09, 0.2)
  })
}

// Rung may khi bao sai. Chi dien thoai Android moi ho tro (Safari tren iPhone
// khong co API nay), nen rung chi la them chu khong thay duoc am thanh: goi vao
// may khong ho tro thi lang le bo qua, khong bao loi.
// Kieu rung [rung, nghi, rung] nhip 2 lan cho khop voi 2 not nhac di xuong.
function vibrate(pattern) {
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return
  try {
    navigator.vibrate(pattern)
  } catch {
    // Vai trinh duyet chan API nay khi trang khong phai do nguoi dung tu mo -
    // khong co gi phai xu ly, am thanh van bao sai binh thuong.
  }
}

// Am sai o dai tram nen tai nguoi nghe kem nhay hon am dung (880-1318 Hz), tang
// nhe de nghe ngang nhau.
const WRONG_LEVEL = BASE_LEVEL * 1.3

export function playWrong() {
  vibrate([45, 60, 90])
  playScheduled((audioCtx, now) => {
    // Am bao SAI phai nghe ro tren loa dien thoai/laptop. Ban cu dung 330 roi
    // 220 Hz, song tam giac: do la vung tram ma loa nho phat rat kem, va song
    // tam giac gan nhu khong co hai am bac cao nen tieng bi "chim" han - do
    // duoc bien do khong nho hon am dung bao nhieu ma nguoi dung van thay nhu
    // khong co tieng.
    // Nay dung song vuong (rat nhieu hai am bac cao, loa nho phat ro) va ha
    // xuong o dai 622 -> 466 Hz, la vung loa nho lam viec tot nhat. Di XUONG
    // de phan biet voi am dung (di len) va khong lan voi tieng giong doc.
    tone(audioCtx, 622.25, now, 0.13, { type: 'square', level: WRONG_LEVEL })
    tone(audioCtx, 466.16, now + 0.11, 0.24, { type: 'square', level: WRONG_LEVEL })
  })
}

export function playCelebrate() {
  playScheduled((audioCtx, now) => {
    const notes = [523.25, 659.25, 783.99, 1046.5] // Do-Mi-Sol-Do (hop am vui)
    notes.forEach((freq, i) => tone(audioCtx, freq, now + i * 0.1, 0.25))
  })
}

export function playFlip() {
  playScheduled((audioCtx, now) => {
    tone(audioCtx, 600, now, 0.06, { level: BASE_LEVEL * 0.6 })
  })
}
