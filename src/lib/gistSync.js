// Dong bo tien do hoc len 1 GitHub Gist rieng tu cua nguoi dung, thay the cho
// viec chi dua vao localStorage (de mat khi xoa cache/doi may/Safari tu don
// dep). Goi thang GitHub REST API tu trinh duyet, khong can server rieng.
//
// QUAN TRONG: token luu o mot PREFIX rieng (khong phai PREFIX cua storage.js)
// de khong bao gio bi cuon vao file backup ma nguoi dung tai ve/chia se.
import { exportAllData, importAllData } from './storage'

const API = 'https://api.github.com'
const GIST_DESC = 'PandaChinese - sao luu tien do hoc (tu dong, dung xoa)'
const FILENAME = 'pandachinese-progress.json'
const SYNC_PREFIX = 'hoctiengtrung-sync:'

function loadSync(key, fallback) {
  try {
    const raw = localStorage.getItem(SYNC_PREFIX + key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function saveSync(key, value) {
  try {
    localStorage.setItem(SYNC_PREFIX + key, JSON.stringify(value))
  } catch {
    // bo qua neu localStorage day/bi chan
  }
}

export function getSyncToken() {
  return loadSync('token', null)
}

export function setSyncToken(token) {
  saveSync('token', token)
}

export function getGistId() {
  return loadSync('gistId', null)
}

export function getLastSyncedAt() {
  return loadSync('lastSyncedAt', null)
}

export function clearSync() {
  saveSync('token', null)
  saveSync('gistId', null)
  saveSync('lastSyncedAt', null)
}

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  }
}

async function apiError(res, fallbackMsg) {
  if (res.status === 401) return new Error('Token không hợp lệ hoặc đã bị thu hồi.')
  if (res.status === 403) return new Error('GitHub từ chối yêu cầu (có thể do vượt giới hạn số lần gọi API).')
  if (res.status === 404) return new Error('Không tìm thấy bản sao lưu trên GitHub.')
  return new Error(fallbackMsg)
}

async function findExistingGistId(token) {
  const res = await fetch(`${API}/gists`, { headers: authHeaders(token) })
  if (!res.ok) throw await apiError(res, 'Không đọc được danh sách gist.')
  const gists = await res.json()
  const found = gists.find((g) => g.description === GIST_DESC)
  return found ? found.id : null
}

async function createGist(token, payload) {
  const res = await fetch(`${API}/gists`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({
      description: GIST_DESC,
      public: false,
      files: { [FILENAME]: { content: JSON.stringify(payload, null, 2) } }
    })
  })
  if (!res.ok) throw await apiError(res, 'Không tạo được bản sao lưu trên GitHub.')
  const data = await res.json()
  saveSync('gistId', data.id)
  return data.id
}

async function updateGist(token, gistId, payload) {
  const res = await fetch(`${API}/gists/${gistId}`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify({
      files: { [FILENAME]: { content: JSON.stringify(payload, null, 2) } }
    })
  })
  if (!res.ok) throw await apiError(res, 'Không cập nhật được bản sao lưu.')
  return res.json()
}

async function fetchGist(token, gistId) {
  const res = await fetch(`${API}/gists/${gistId}`, { headers: authHeaders(token) })
  if (!res.ok) throw await apiError(res, 'Không tải được bản sao lưu.')
  const data = await res.json()
  const file = data.files[FILENAME]
  if (!file) return null
  return JSON.parse(file.content)
}

// Day tien do hien tai cua may nay len gist (tao moi neu chua co gist).
export async function pushToGist() {
  const token = getSyncToken()
  if (!token) throw new Error('Chưa kết nối GitHub.')
  let gistId = getGistId()
  if (!gistId) gistId = await findExistingGistId(token)
  const payload = { updatedAt: Date.now(), data: exportAllData() }
  if (gistId) {
    saveSync('gistId', gistId)
    await updateGist(token, gistId, payload)
  } else {
    gistId = await createGist(token, payload)
  }
  saveSync('lastSyncedAt', Date.now())
}

// Keo du lieu tu gist ve, ghi de tien do tren may nay.
export async function pullFromGist() {
  const token = getSyncToken()
  if (!token) throw new Error('Chưa kết nối GitHub.')
  let gistId = getGistId()
  if (!gistId) gistId = await findExistingGistId(token)
  if (!gistId) throw new Error('Chưa có bản sao lưu nào trên GitHub.')
  const remote = await fetchGist(token, gistId)
  if (!remote || !remote.data) throw new Error('Bản sao lưu trống hoặc sai định dạng.')
  importAllData(remote.data)
  saveSync('gistId', gistId)
  saveSync('lastSyncedAt', Date.now())
  return remote.updatedAt
}

// Xac thuc token + kiem tra xem da co ban sao luu san tren GitHub chua, de UI
// hoi nguoi dung muon tai ve hay day len ghi de.
export async function connectAndCheck(token) {
  const gistId = await findExistingGistId(token)
  setSyncToken(token)
  if (!gistId) return { hasRemoteData: false, remoteUpdatedAt: null }
  saveSync('gistId', gistId)
  const remote = await fetchGist(token, gistId)
  return { hasRemoteData: !!remote, remoteUpdatedAt: remote?.updatedAt ?? null }
}
