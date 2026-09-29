// Kiem chung src/lib/tts.js bang bo gia lap Web Speech API (khong can trinh duyet).
// Muc tieu chinh: may li ke giong tieng Trung nhung giong do doc ra IM thi app
// phai tu doi sang giong khac, chu khong duoc im lang nhu truoc.
//
//   npm run verify-tts
import { createServer } from 'vite'
import assert from 'node:assert/strict'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let failed = 0
function check(name, fn) {
  try {
    fn()
    console.log(`PASS  ${name}`)
  } catch (e) {
    failed += 1
    console.log(`FAIL  ${name}\n      ${e.message}`)
  }
}

class FakeUtterance {
  constructor(text) {
    this.text = text
  }
}

// 'works'  : bat dau doc binh thuong
// 'slow'   : bat dau cham (de kiem tra lan bam tiep theo)
// 'silent' : im lang tuyet doi - giong co trong danh sach nhung chua tai ve
// 'error:x': bao loi x
class FakeSynth {
  constructor() {
    this.voices = []
    this.behaviors = new Map()
    this.defaultBehavior = 'works'
    this.spoken = []
    this.current = null
    this.speaking = false
    this.pending = false
    this.cancels = 0
    this.onvoiceschanged = null
  }
  getVoices() {
    return this.voices
  }
  cancel() {
    this.cancels += 1
    const u = this.current
    this.current = null
    this.speaking = false
    if (u) u.onerror?.({ error: 'interrupted' })
  }
  speak(u) {
    this.spoken.push(u.voice ? u.voice.name : '(trinh duyet tu chon)')
    const how = (u.voice ? this.behaviors.get(u.voice.name) : this.defaultBehavior) || 'works'
    this.current = u
    const drop = () => {
      if (this.current !== u) return false
      this.current = null
      this.speaking = false
      return true
    }
    if (how.startsWith('error:')) {
      const err = how.slice(6)
      setTimeout(() => {
        if (drop()) u.onerror?.({ error: err })
      }, 5)
      return
    }
    if (how === 'silent') return // khong onstart, khong onerror: dung nhu giong chua tai ve
    const slow = how === 'slow'
    setTimeout(() => {
      if (!slow && this.current !== u) return
      this.speaking = true
      u.onstart?.()
    }, slow ? 400 : 5)
    setTimeout(() => {
      if (!drop()) return
      u.onend?.()
    }, slow ? 700 : 40)
  }
}

// --- shim moi truong trinh duyet -------------------------------------------------
const store = new Map()
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k)
}
const synth = new FakeSynth()
globalThis.window = { speechSynthesis: synth }
globalThis.SpeechSynthesisUtterance = FakeUtterance

const vite = await createServer({
  root: rootDir,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error'
})
const tts = await vite.ssrLoadModule('/src/lib/tts.js')

const voice = (name, lang = 'zh-CN') => ({ name, lang, localService: true })

// Chay mot lan doc va gom lai ket qua.
async function speak(text, waitMs) {
  const result = { ended: 0, errors: [] }
  tts.speakChinese(text, {
    onEnd: () => {
      result.ended += 1
    },
    onError: (e) => result.errors.push(e)
  })
  await sleep(waitMs)
  return result
}

function setVoices(voices, behaviors, defaultBehavior = 'works') {
  synth.voices = voices
  synth.behaviors = new Map(Object.entries(behaviors))
  synth.defaultBehavior = defaultBehavior
  synth.spoken = []
  synth.cancels = 0
  synth.current = null
  synth.speaking = false
  synth.onvoiceschanged?.() // dung nhu khi trinh duyet load xong danh sach giong
}

// 1. Giong duoc uu tien dau tien (Tingting) im lang -> phai tu doi sang giong ke tiep.
setVoices([voice('Tingting'), voice('Yu-shu')], { Tingting: 'silent', 'Yu-shu': 'works' })
let r = await speak('你好', 2200)
check('Giong uu tien im lang thi doi sang giong ke tiep va doc duoc', () => {
  assert.deepEqual(synth.spoken, ['Tingting', 'Yu-shu'], `da goi: ${synth.spoken.join(' | ')}`)
  assert.equal(r.ended, 1, 'phai bao doc xong dung 1 lan')
  assert.deepEqual(r.errors, [], 'khong duoc bao loi ra ngoai khi van con giong doc duoc')
})

// 2. Giong vua doc duoc duoc ghi nho va thu truoc o lan sau.
check('Giong doc duoc duoc nho lai de lan sau thu thang', () => {
  assert.equal(store.get('hoctiengtrung:ttsVoice'), '"Yu-shu"', 'phai luu ten giong doc duoc')
})
setVoices([voice('Tingting'), voice('Yu-shu')], { Tingting: 'silent', 'Yu-shu': 'works' })
r = await speak('再见', 400)
check('Lan sau doc bang giong da nho, khong cho lai 1,5 giay', () => {
  assert.deepEqual(synth.spoken, ['Yu-shu'], `da goi: ${synth.spoken.join(' | ')}`)
  assert.equal(r.ended, 1)
})

// 3. Moi giong deu im -> bao ra ngoai (man hinh canh bao hien len), khong treo nut.
store.clear()
setVoices([voice('Tingting'), voice('Eddy (Chinese (China))')], { Tingting: 'silent', 'Eddy (Chinese (China))': 'silent' }, 'silent')
let notified = 0
const off = tts.subscribeTtsFailure(() => {
  notified += 1
})
r = await speak('你好', 6000)
check('Het giong ma van im thi bao loi cho man hinh canh bao', () => {
  assert.deepEqual(r.errors, ['silent'], `loi nhan duoc: ${r.errors.join(',')}`)
  assert.equal(notified, 1, 'phai thong bao cho TtsWarning dung 1 lan')
  assert.equal(r.ended, 0)
  // Giong nu chuan phai duoc thu TRUOC giong "vui nhon" cua macOS.
  assert.deepEqual(
    synth.spoken,
    ['Tingting', 'Eddy (Chinese (China))', '(trinh duyet tu chon)'],
    `thu tu da thu: ${synth.spoken.join(' | ')}`
  )
})
off()

// 4a. Mot giong bao loi that thi van thu giong ke tiep - co tieng thi khong bao loi.
store.clear()
setVoices([voice('Huihui')], { Huihui: 'error:not-allowed' }, 'works')
notified = 0
const off1 = tts.subscribeTtsFailure(() => {
  notified += 1
})
r = await speak('你好', 800)
check('Giong dau bao loi thi thu giong ke tiep, co tieng thi khong bao loi', () => {
  assert.deepEqual(synth.spoken, ['Huihui', '(trinh duyet tu chon)'])
  assert.equal(r.ended, 1)
  assert.deepEqual(r.errors, [])
  assert.equal(notified, 0)
})
off1()

// 4b. Moi ung vien deu loi -> bao nguyen van loi cua trinh duyet.
store.clear()
setVoices([voice('Huihui')], { Huihui: 'error:not-allowed' }, 'error:not-allowed')
notified = 0
const off2 = tts.subscribeTtsFailure(() => {
  notified += 1
})
r = await speak('你好', 800)
check('Loi that tu trinh duyet duoc bao nguyen van', () => {
  assert.deepEqual(r.errors, ['not-allowed'])
  assert.equal(notified, 1)
})
off2()

// 5. May khong co giong tieng Trung nao -> van phai thu (de trinh duyet tu chon).
setVoices([voice('Samantha', 'en-US')], {}, 'works')
r = await speak('你好', 400)
check('Khong co giong tieng Trung thi van thu de trinh duyet tu chon', () => {
  assert.deepEqual(synth.spoken, ['(trinh duyet tu chon)'])
  assert.equal(r.ended, 1)
})

// 6. Bam lien tuc: lan doc cu bi huy, onEnd cua no khong duoc chay (khong cong XP sai).
setVoices([voice('Huihui')], { Huihui: 'slow' })
const first = { ended: 0, errors: [] }
tts.speakChinese('一', { onEnd: () => (first.ended += 1), onError: (e) => first.errors.push(e) })
await sleep(120)
const second = await speak('二', 1200)
check('Bam tu khac giua chung thi lan doc cu bi huy, khong bao loi gia', () => {
  assert.deepEqual(first.errors, [], `lan cu nhan loi: ${first.errors.join(',')}`)
  assert.equal(first.ended, 0, 'lan doc cu khong duoc bao doc xong')
  assert.equal(second.ended, 1, 'lan doc moi phai doc xong')
})

// 7. Roi trang: stopSpeaking chan not ket qua cua lan doc dang do.
setVoices([voice('Huihui')], { Huihui: 'slow' })
const leaving = { ended: 0 }
tts.speakChinese('三', { onEnd: () => (leaving.ended += 1) })
await sleep(50)
tts.stopSpeaking()
await sleep(900)
check('Roi trang thi tieng dang doc bi huy va khong bao doc xong', () => {
  assert.equal(leaving.ended, 0)
})

await vite.close()
console.log(failed ? `\n${failed} muc KHONG dat` : '\nTat ca deu dat')
process.exit(failed ? 1 : 0)
