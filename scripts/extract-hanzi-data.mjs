// Trich xuat du lieu net chu (tu package hanzi-writer-data, cai o devDependency)
// cho DUNG nhung chu Han co xuat hien trong tu vung HSK1-6 cua app, copy vao
// public/hanzi-data/ de trang Viet chu Han fetch tu chinh server cua minh
// (nhanh, on dinh) thay vi phai goi ra CDN ben ngoai (cdn.jsdelivr.net) moi
// lan hien 1 chu - day la nguyen nhan gay "hien chu cham" nguoi dung bao.
//
// Chay lai script nay (npm run extract-hanzi-data) moi khi them tu vung moi
// co chu Han chua co san trong public/hanzi-data/.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = join(rootDir, 'src/data')
const sourcePkgDir = join(rootDir, 'node_modules/hanzi-writer-data')
const outDir = join(rootDir, 'public/hanzi-data')

const files = readdirSync(dataDir).filter((f) => f.startsWith('hsk') && f.endsWith('.js'))
const chars = new Set()
for (const f of files) {
  const text = readFileSync(join(dataDir, f), 'utf8')
  for (const ch of text) {
    if (/[一-鿿]/.test(ch)) chars.add(ch)
  }
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

let copied = 0
let missing = []
for (const ch of chars) {
  const src = join(sourcePkgDir, `${ch}.json`)
  if (!existsSync(src)) {
    missing.push(ch)
    continue
  }
  writeFileSync(join(outDir, `${ch}.json`), readFileSync(src))
  copied++
}

console.log(`Đã copy ${copied}/${chars.size} chữ vào public/hanzi-data/`)
if (missing.length) {
  console.log(`Thiếu dữ liệu nét cho ${missing.length} chữ:`, missing.join(''))
}
