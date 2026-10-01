# PandaChinese (chinese-app)

App học tiếng Trung HSK1-6 cho người Việt, chạy như web app PWA. Chủ dự án là người Việt làm nghề môi giới bất động sản, nên nội dung bất động sản là ưu tiên riêng. Luôn trao đổi bằng tiếng Việt, chỉ dùng tiếng Anh cho tên riêng và thuật ngữ kỹ thuật.

## Công nghệ và lệnh

React 18, Vite, Tailwind, react-router-dom (HashRouter), hanzi-writer, Firebase (đăng nhập và bảng xếp hạng), vite-plugin-pwa.

```bash
npm install
npm run dev        # chạy thử
npm run lint       # phải sạch trước khi commit
npm run build      # phải build được trước khi commit
```

Không có bộ test tự động. Mỗi thay đổi nên chạy lint và build, và với dữ liệu thì viết script kiểm tra tạm rồi xóa.

## Triển khai

- Nhánh chính là `main`. Mỗi lần có commit vào `main`, GitHub Actions tự build và đưa lên GitHub Pages.
- Đường dẫn gốc là `/chinese-app/`. Vì dùng HashRouter nên địa chỉ trang có dạng `/chinese-app/#/chu-de`.
- Chủ dự án thường yêu cầu đẩy thẳng lên `main`. Vẫn nên nói rõ trong câu trả lời là đã đẩy lên `main`.

## Cấu trúc chính

- `src/App.jsx` khai báo toàn bộ đường dẫn tiếng Việt như `/chu-de`, `/truyen`, `/ghep-cap`.
- `src/pages/` mỗi trang một file. `src/components/` là thành phần dùng chung.
- `src/lib/` là logic dùng chung: `quiz.js`, `sfx.js`, `tts.js`, `storage.js`, `gamification.js`, `srs.js`.
- `src/store/ProgressContext.jsx` giữ tiến độ học và hàm `addXp`.
- `src/data/` là dữ liệu nội dung.

## Dữ liệu nội dung

- **Từ vựng HSK1-6:** `hsk1.js` đến `hsk6.js`, gom lại trong `levels.js` thành `ALL_WORDS`. Bài học dựng từ `lessonPlans*.js` theo mã từ. Đừng thêm từ vào đây nếu chỉ cần từ cho chủ đề.
- **Truyện dài:** `stories.js` gộp `storiesMore.js` (HSK1-5) và `stories6.js` (HSK6). Mỗi câu gồm chữ Hán, pinyin, nghĩa tiếng Việt. Bài đọc hiểu cuối truyện có đúng 3 đáp án, đáp án đầu tiên trong danh sách là đáp án đúng và sẽ được xáo khi hiển thị.
- **Chủ đề:** `topics.js` gộp danh sách gốc với `topicsMore.js`. Chủ đề chỉ liệt kê chữ Hán. Từ có trong HSK thì dùng lại, từ chưa có thì lấy từ `topicWords.js` (mã bắt đầu từ 900001, không thuộc HSK nên không ảnh hưởng bài học hay flashcard). Mỗi chủ đề có số từ tùy ý, bài kiểm tra lấy ngẫu nhiên tối đa 20 từ. Trường tùy chọn: `group` (job, life, realestate), `level`, `tag`. Trang danh sách lọc theo nhóm, không có nút "Tất cả" và không đánh số thứ tự.
- **Bất động sản:** 7 chủ đề có khóa bắt đầu bằng `realestate-`, nhãn hiển thị là "BĐS", nằm ở nhóm Bất động sản.

## Quy ước

- Phiên âm ghi có dấu thanh, viết liền theo từ. Thanh nhẹ để không dấu. Biến điệu 一 và 不 ghi theo cách đọc thực tế, ví dụ `yí gè`, `bú kèqi`.
- Nghĩa tiếng Việt ngắn gọn, ghi Hán Việt khi có ích. Thuật ngữ bất động sản cần chính xác, nên nhờ người biết nghề đọc lại.
- Bảng `src/data/charPinyin.js` là phiên âm mặc định của từng chữ, dùng để đối chiếu tự động. Chữ đa âm sẽ báo lệch giả, cần tự rà.
- Bình luận trong mã viết tiếng Việt không dấu, giải thích lý do chứ không mô tả lại mã.
- Commit viết tiếng Việt có dấu, nêu rõ thay đổi và lý do.
- Thêm trò chơi hay tính năng mới thì làm theo mẫu có sẵn: `RadicalGamePage.jsx` và `MemoryMatchPage.jsx` cho trò chơi, gắn XP qua `XP_REWARDS` trong `gamification.js`, đăng ký đường dẫn trong `App.jsx`, thêm thẻ vào `HomePage.jsx`.
