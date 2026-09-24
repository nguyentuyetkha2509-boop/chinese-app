const PREFIX = 'hoctiengtrung:'

export function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function saveJSON(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    // localStorage day hoac bi chan - bo qua, du lieu chi mat khi reload
  }
}

// Xuat/nhap toan bo du lieu hoc tap (localStorage chi luu tren 1 may/1 trinh
// duyet - xoa cache hoac doi may la mat sach, nen can cach sao luu thu cong).
export function exportAllData() {
  const data = {}
  for (let i = 0; i < localStorage.length; i++) {
    const fullKey = localStorage.key(i)
    if (fullKey && fullKey.startsWith(PREFIX)) {
      data[fullKey.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(fullKey))
    }
  }
  return data
}

export function importAllData(data) {
  if (!data || typeof data !== 'object') throw new Error('File không hợp lệ')
  for (const [key, value] of Object.entries(data)) {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  }
}
