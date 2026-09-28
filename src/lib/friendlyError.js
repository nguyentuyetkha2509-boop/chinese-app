// Doi loi ky thuat (tieng Anh) cua Firebase thanh cau tieng Viet de hieu.
//
// Truoc day app in thang `e.message` ra giao dien, nen nguoi hoc gap nhung dong
// nhu "Missing or insufficient permissions." hay "auth/network-request-failed" -
// vua khong hieu, vua khong biet phai lam gi. Te nhat la man hinh dang nhap dau
// tien: nguoi moi vao app, bam dang nhap, va nhan duoc mot cau tieng Anh.
//
// Nguyen tac: cau tra ve phai noi RO NGUOI DUNG NEN LAM GI, hoac noi ro day la
// loi tam thoi. Manh moi ky thuat van duoc giu lai trong console de con sua.

const BY_CODE = {
  // --- Dang nhap (Firebase Auth) ---
  'auth/network-request-failed': 'Không kết nối được mạng. Kiểm tra wifi/4G rồi thử lại.',
  'auth/unauthorized-domain':
    'Tên miền của app chưa được cho phép trong Firebase. Vào Firebase Console → Authentication → Settings → Authorized domains để thêm.',
  'auth/operation-not-allowed':
    'Cách đăng nhập này chưa được bật trong Firebase. Vào Firebase Console → Authentication → Sign-in method để bật.',
  'auth/popup-blocked':
    'Trình duyệt đã chặn cửa sổ đăng nhập. Hãy cho phép cửa sổ bật lên (pop-up) cho trang này rồi thử lại.',
  'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập.',
  'auth/cancelled-popup-request': 'Bạn đã mở một cửa sổ đăng nhập khác. Thử lại giúp mình nhé.',
  'auth/too-many-requests': 'Bạn thử quá nhiều lần. Chờ một lát rồi thử lại.',
  'auth/user-disabled': 'Tài khoản này đã bị khoá.',
  'auth/user-not-found': 'Không tìm thấy tài khoản này.',
  'auth/account-exists-with-different-credential':
    'Email này đã đăng ký bằng một cách đăng nhập khác. Hãy dùng đúng cách đăng nhập bạn đã dùng trước đó.',
  'auth/internal-error': 'Máy chủ đăng nhập đang trục trặc. Thử lại sau một lát.',
  'auth/invalid-api-key': 'Cấu hình Firebase của app bị sai. Cần người sửa code kiểm tra lại.',

  // --- Du lieu (Firestore) ---
  'permission-denied':
    'Tài khoản này không có quyền với dữ liệu đó. Nếu bạn vừa đăng nhập, thử tải lại trang.',
  unavailable: 'Chưa kết nối được tới máy chủ. Kiểm tra mạng rồi thử lại.',
  'failed-precondition': 'Máy chủ chưa sẵn sàng cho thao tác này. Thử lại sau một lát.',
  'deadline-exceeded': 'Máy chủ phản hồi quá chậm. Thử lại giúp mình nhé.',
  'resource-exhausted': 'Tạm thời quá tải. Thử lại sau một lát.',
  unauthenticated: 'Bạn cần đăng nhập để làm việc này.',
  'not-found': 'Không tìm thấy dữ liệu này.',
  'already-exists': 'Dữ liệu này đã tồn tại.',
  aborted: 'Thao tác bị ngắt giữa chừng. Thử lại giúp mình nhé.',
  'invalid-argument': 'Dữ liệu gửi lên không hợp lệ.',

  // --- DeepSeek (phan tich giong noi) ---
  'deepseek/network': 'Không gọi được AI. Kiểm tra mạng rồi thử lại.',
  'deepseek/no-key': 'Chưa có API key DeepSeek. Vào Cài đặt để thêm.',
  'deepseek/auth': 'API key DeepSeek không đúng hoặc đã bị khoá. Vào Cài đặt để kiểm tra lại.',
  'deepseek/insufficient-balance': 'Tài khoản DeepSeek đã hết số dư.',
  'deepseek/rate-limit': 'Gọi AI quá nhanh. Chờ một lát rồi thử lại.',
  'deepseek/bad-response': 'AI trả lời không đọc được. Thử lại giúp mình nhé.'
}

// Vai cau thong bao cua Firebase/Firestore khong kem ma loi, chi co chu. Nhan
// dien bang chu de van dich duoc.
const BY_MESSAGE = [
  [/Missing or insufficient permissions/i, 'permission-denied'],
  [/client is offline/i, 'unavailable'],
  [/Failed to get document because/i, 'unavailable'],
  [/The service is currently unavailable/i, 'unavailable'],
  [/network[- ]request[- ]failed/i, 'auth/network-request-failed'],
  [/Quota exceeded/i, 'resource-exhausted'],
  [/Document references must have an even number/i, 'invalid-argument']
]

export function friendlyError(error, fallback = 'Có lỗi xảy ra. Thử lại giúp mình nhé.') {
  const code = typeof error === 'string' ? null : error?.code
  const raw = typeof error === 'string' ? error : error?.message || ''

  if (code && BY_CODE[code]) return BY_CODE[code]

  for (const [pattern, mapped] of BY_MESSAGE) {
    if (pattern.test(raw) && BY_CODE[mapped]) return BY_CODE[mapped]
  }

  // Khong nhan dien duoc: tra cau chung, KHONG tra nguyen van tieng Anh.
  // Chi tiet goc van duoc ghi ra console de con tim nguyen nhan.
  if (raw) console.error('Lỗi chưa được dịch:', raw, error)
  return fallback
}

export default friendlyError
