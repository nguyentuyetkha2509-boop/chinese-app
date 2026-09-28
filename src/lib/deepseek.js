const KEY_STORAGE = 'hoctiengtrung:deepseekApiKey'
const API_URL = 'https://api.deepseek.com/chat/completions'
const MODEL = 'deepseek-chat'

export function getDeepseekKey() {
  try {
    return localStorage.getItem(KEY_STORAGE) || ''
  } catch {
    return ''
  }
}

export function setDeepseekKey(key) {
  try {
    const trimmed = (key || '').trim()
    if (trimmed) localStorage.setItem(KEY_STORAGE, trimmed)
    else localStorage.removeItem(KEY_STORAGE)
  } catch {
    // localStorage bị chặn (chế độ ẩn danh...) - bỏ qua, key chỉ mất khi đóng tab
  }
}

export function hasDeepseekKey() {
  return !!getDeepseekKey()
}

export class DeepseekError extends Error {}

// Goi API DeepSeek THANG TU TRINH DUYET (khong qua server rieng cua app).
// App nay deploy tinh tren GitHub Pages nen khong co backend de giau key -
// nguoi dung tu nhap key DeepSeek cua ho o trang Cai dat, key chi luu trong
// localStorage cua trinh duyet ho, khong dinh kem vao code build cua app.
export async function askDeepseek(messages, { temperature = 0.7, signal } = {}) {
  const apiKey = getDeepseekKey()
  if (!apiKey) {
    throw new DeepseekError('Chưa cấu hình API key DeepSeek. Vào Cài đặt để thêm key.')
  }

  let res
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({ model: MODEL, messages, temperature }),
      signal
    })
  } catch (e) {
    if (e.name === 'AbortError') throw e
    throw new DeepseekError('Không kết nối được tới DeepSeek. Có thể do mạng hoặc trình duyệt chặn CORS.')
  }

  if (!res.ok) {
    let detail = ''
    try {
      const body = await res.json()
      detail = body?.error?.message || ''
    } catch {
      // phan hoi loi khong phai JSON - bo qua, dung thong bao mac dinh theo status
    }
    if (res.status === 401) throw new DeepseekError('API key DeepSeek không hợp lệ. Kiểm tra lại trong Cài đặt.')
    if (res.status === 402) throw new DeepseekError('Tài khoản DeepSeek hết số dư, nạp thêm tại platform.deepseek.com.')
    if (res.status === 429) throw new DeepseekError('DeepSeek đang giới hạn tốc độ, thử lại sau ít phút.')
    throw new DeepseekError(detail || `Lỗi DeepSeek (mã ${res.status}).`)
  }

  const data = await res.json()
  const content = data?.choices?.[0]?.message?.content
  if (!content) throw new DeepseekError('DeepSeek trả về phản hồi trống.')
  return content.trim()
}
