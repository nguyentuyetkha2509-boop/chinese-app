# PandaChinese

App học tiếng Trung theo chuẩn HSK 3.0 (cấp 1-9) - chạy như mobile web app (PWA). Repo hoàn toàn độc lập, không liên quan đến app bán hàng nào khác.

Live: https://nguyentuyetkha2509-boop.github.io/chinese-app/

## Tính năng

- **Bài học theo HSK 3.0 cấp 1-6**: 5.363 từ vựng (506 / 750 / 953 / 972 / 1.059 / 1.123 từ), chia thành khoảng 575 bài theo chủ đề, mỗi bài kèm quiz trắc nghiệm cuối bài. Trang Bài học còn có tag **Số và tiền** (đọc số, tiền tệ, diện tích, giá nhà) và **Bộ thủ**.
- **HSK7-9**: 5.606 từ bậc cao cấp (chuẩn gộp 7-9 một bảng), 376 bài xếp theo loại từ.
- **Ngữ pháp theo HSK 3.0**: 158 điểm xếp đúng cấp 1-9 (HSK7-9 có 40 điểm), mỗi điểm có giải thích, ví dụ và bài tập.
- **Học theo chủ đề, hội thoại, truyện dài, thư gửi chính mình, trò chơi** (ghép cặp, đua tốc độ, sắp xếp câu, nghe chép chính tả) và bảng xếp hạng.
- **Flashcard + Spaced Repetition (SRS)**: ôn từ theo thuật toán lặp lại ngắt quãng kiểu SM-2, tự tính lịch ôn dựa trên mức độ nhớ bạn tự đánh giá (Lại / Khó / Ổn / Dễ).
- **Phát âm & thanh điệu**: nghe phát âm chuẩn (Web Speech API - giọng zh-CN), luyện phân biệt 4 thanh điệu, ghi âm giọng mình để tự so sánh.
- **Viết chữ Hán**: xem hoạt hình thứ tự nét (dùng thư viện `hanzi-writer`) và tự viết thử để kiểm tra.

Toàn bộ tiến độ lưu trong `localStorage` của trình duyệt - không cần backend, không cần đăng nhập.

## Chạy thử

```bash
npm install
npm run dev
```

Mở địa chỉ hiển thị trong terminal bằng trình duyệt điện thoại (cùng mạng wifi) hoặc trình duyệt máy tính ở chế độ giả lập mobile.

> Lưu ý: tính năng đọc phát âm cần trình duyệt hỗ trợ Web Speech API và có sẵn giọng đọc tiếng Trung (zh-CN) - Chrome/Edge trên máy tính và hầu hết trình duyệt di động đều hỗ trợ. Tính năng ghi âm cần cấp quyền micro và chạy trên HTTPS (hoặc localhost).

## Build production

```bash
npm run build
npm run preview
```
