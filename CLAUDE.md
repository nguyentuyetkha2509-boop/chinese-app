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
- Trang Bài học (`/bai-hoc`) có 3 tag lưu trong địa chỉ `?muc=`: HSK 1-6 (mặc định), `so-tien`, `bo-thu`. Bộ thủ không còn ô riêng ở trang chủ.
- `src/pages/` mỗi trang một file. `src/components/` là thành phần dùng chung.
- `src/lib/` là logic dùng chung: `quiz.js`, `sfx.js`, `tts.js`, `storage.js`, `gamification.js`, `srs.js`.
- `src/store/ProgressContext.jsx` giữ tiến độ học và hàm `addXp`.
- `src/data/` là dữ liệu nội dung.

## Dữ liệu nội dung

- **Từ vựng HSK1-6:** theo chuẩn HSK 3.0 (2021), `hsk1.js` đến `hsk6.js` gom lại trong `levels.js` cùng `hsk7.js` thành `ALL_WORDS` (10.969 từ, trong đó HSK1-6 là 5.363). Danh sách từ lấy từ complete-hsk-vocabulary (MIT); từ trùng chữ Hán với bộ HSK 2.0 cũ giữ nguyên mã (id 1-9500), từ mới có mã từ 100001. Bài học dựng từ `lessonPlans*.js` theo mã từ. Đừng thêm từ vào đây nếu chỉ cần từ cho chủ đề.
- **HSK7-9:** chuẩn HSK 3.0 gộp 7-9 thành một bảng từ vựng, app giữ một cấp `hsk7` nhãn "HSK7-9" (`hsk7.js`, `lessonPlans7.js`, 5.606 từ, 376 bài xếp theo loại từ, mã từ mới từ 110001). Từ trùng chữ Hán với HSK 2.0 cũ giữ mã cũ và đã bỏ khỏi `legacyWords.js`. Truyện 6 bài ở `stories7.js`. Ngữ pháp 40 điểm ở `grammar7.js` (14 điểm "mở rộng" chuyển từ HSK6, khóa giữ nguyên, cùng 26 điểm mới). Nghĩa tiếng Việt do AI soạn từ nghĩa tiếng Anh nên cần rà dần.
- **Từ HSK cũ không còn:** `legacyWords.js` giữ 501 từ của HSK 2.0 không có trong HSK 3.0, chỉ dùng để Học theo chủ đề tra nghĩa và ước lượng cấp độ, không phải bài học hay flashcard.
- **Ngữ pháp:** `grammar.js` (HSK1 và gộp `GRAMMAR_POINTS`) cùng `grammar2.js` đến `grammar6.js`, 158 điểm xếp theo cấp theo đại cương ngữ pháp HSK 3.0 (HSK1-6: 118 điểm, HSK7-9: 40 điểm trong `grammar7.js`). Mỗi điểm có đúng 3 ví dụ và 3 câu hỏi, đáp án đầu tiên là đáp án đúng. Khoá (`key`) giữ ổn định vì tiến độ lưu theo khoá.
- **Tiến độ bài học:** lưu ở khoá `completedUnitsV3` (xem `src/lib/unitProgress.js`), lần đầu được suy từ SRS: bài coi là đã học khi mọi từ của bài đã có trong SRS.
- **Truyện dài:** `stories.js` gộp `storiesMore.js` (HSK1-5), `stories6.js` (HSK6) và `stories7.js` (HSK7-9, 6 truyện thành ngữ lịch sử, nhãn cấp `HSK7-9`). Mỗi câu gồm chữ Hán, pinyin, nghĩa tiếng Việt. Bài đọc hiểu cuối truyện có đúng 3 đáp án, đáp án đầu tiên trong danh sách là đáp án đúng và sẽ được xáo khi hiển thị.
- **Chủ đề:** `topics.js` gộp danh sách gốc với `topicsMore.js`. Chủ đề chỉ liệt kê chữ Hán. Từ có trong HSK thì dùng lại, từ chưa có thì lấy từ `topicWords.js` (mã bắt đầu từ 900001, không thuộc HSK nên không ảnh hưởng bài học hay flashcard). Mỗi chủ đề có số từ tùy ý, bài kiểm tra lấy ngẫu nhiên tối đa 20 từ. Trường tùy chọn: `group` (job, life, realestate), `level`, `tag`. Trang danh sách lọc theo nhóm, không có nút "Tất cả" và không đánh số thứ tự.
- **Số và tiền:** `numberLessons.js` gồm 8 bài (số 0-10, 11-99, trăm/nghìn/vạn/triệu/tỷ, tiền tệ, diện tích, giá nhà, điện thoại/ngày giờ, thứ tự/phần trăm). Mã từ bắt đầu từ 910001, không thuộc HSK. Trang học dùng chung `TopicDetailPage.jsx` với prop `kind="number"`, đường dẫn `/so-va-tien/:topicKey`, tiến độ lưu chung `completedTopics`. Lưu ý 1 tỷ = 十亿 (亿 là 100 triệu). Thuật ngữ bất động sản trong bài 5 và 6 cần người biết nghề đọc lại.
- **Bất động sản:** 7 chủ đề có khóa bắt đầu bằng `realestate-`, nhãn hiển thị là "BĐS", nằm ở nhóm Bất động sản.

## Quy ước

- **Chuẩn nội dung là HSK 3.0 (2021), cấp 1-6 và bậc cao 7-9.** Từ nay mọi nội dung mới hoặc chỉnh sửa (từ vựng, bài học, ngữ pháp, nhãn cấp của truyện, hội thoại, thư, chủ đề) đều phải theo chuẩn mới này, không dùng lại số liệu hay cách xếp cấp của HSK 2.0 cũ (150/300/600/1200/2500/5000 từ). Khi cần xác định cấp của một từ hay điểm ngữ pháp thì tra theo HSK 3.0.
- Phiên âm ghi có dấu thanh, viết liền theo từ. Thanh nhẹ để không dấu. Biến điệu 一 và 不 ghi theo cách đọc thực tế, ví dụ `yí gè`, `bú kèqi`.
- Nghĩa tiếng Việt ngắn gọn, ghi Hán Việt khi có ích. Thuật ngữ bất động sản cần chính xác, nên nhờ người biết nghề đọc lại.
- Bảng `src/data/charPinyin.js` là phiên âm mặc định của từng chữ, dùng để đối chiếu tự động. Chữ đa âm sẽ báo lệch giả, cần tự rà.
- Bình luận trong mã viết tiếng Việt không dấu, giải thích lý do chứ không mô tả lại mã.
- Commit viết tiếng Việt có dấu, nêu rõ thay đổi và lý do.
- Thêm trò chơi hay tính năng mới thì làm theo mẫu có sẵn: `RadicalGamePage.jsx` và `MemoryMatchPage.jsx` cho trò chơi, gắn XP qua `XP_REWARDS` trong `gamification.js`, đăng ký đường dẫn trong `App.jsx`, thêm thẻ vào `HomePage.jsx`.
