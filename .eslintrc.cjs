// Cau hinh ESLint cho PandaChinese.
//
// Muc dich chinh KHONG phai la lam dep code, ma la bat loi that. Cu the:
//
//   no-undef  - goi mot ten khong ton tai. Loi nay nguy hiem vi trinh duyet
//               KHONG BAO GI: ten khong khai bao se duoc tim trong window, nen
//               `stop()` thay vi goi ham dung phat am thanh lai lang le goi
//               window.stop() (ham dung tai trang cua trinh duyet). Ngay
//               2026-09-28 loi dung kieu nay da lot vao ban phat hanh that.
//
//   react-hooks - goi hook sai thu tu / thieu phu thuoc trong useEffect. Day la
//               nhom loi da phai sua di sua lai trong lich su cua app nay.
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Bat loi that
    'no-undef': 'error',
    // no-undef MOT MINH khong du: trinh duyet co san hang tram ten toan cuc,
    // nen mot ten viet nham van duoc coi la hop le. Ngay 2026-09-28, trong
    // DialogueDetailPage co `stop()` — y dinh la dung chuoi phat am thanh,
    // nhung vi quen lay `stop` ra khoi hook nen no lang le goi window.stop()
    // (ham dung tai trang cua trinh duyet). no-undef KHONG he bao, vi window.stop
    // la ten that. Danh sach duoi day cam dung nhung ten de nham nhu vay.
    'no-restricted-globals': [
      'error',
      { name: 'stop', message: 'window.stop() dung tai trang, KHONG dung phat am thanh. Kiem tra xem ten nay co bi thieu trong luc lay tu hook/import khong.' },
      { name: 'name', message: 'window.name rat de nham voi mot bien binh thuong.' },
      { name: 'status', message: 'window.status rat de nham voi mot bien binh thuong.' },
      { name: 'length', message: 'window.length rat de nham voi mot bien binh thuong.' },
      { name: 'top', message: 'window.top rat de nham voi mot bien binh thuong.' },
      { name: 'parent', message: 'window.parent rat de nham voi mot bien binh thuong.' },
      { name: 'self', message: 'window.self rat de nham voi mot bien binh thuong.' },
      { name: 'origin', message: 'window.origin rat de nham voi mot bien binh thuong.' },
      { name: 'event', message: 'window.event chi co tren trinh duyet cu; hay nhan event qua tham so.' },
      { name: 'closed', message: 'window.closed rat de nham voi mot bien binh thuong.' },
      { name: 'close', message: 'window.close() dong cua so, hay kiem tra ten bi thieu.' },
      { name: 'open', message: 'window.open() mo cua so moi, hay kiem tra ten bi thieu.' },
      { name: 'focus', message: 'window.focus() rat de nham voi ham xu ly su kien.' },
      { name: 'blur', message: 'window.blur() rat de nham voi ham xu ly su kien.' },
      { name: 'scroll', message: 'window.scroll() rat de nham voi ham cuon trang cua minh.' },
      { name: 'print', message: 'window.print() rat de nham voi ham cua minh.' },
      { name: 'find', message: 'window.find() rat de nham voi ham cua minh.' },
      { name: 'alert', message: 'Nen dung thong bao trong giao dien thay vi alert().' },
      { name: 'confirm', message: 'Nen dung hop thoai trong giao dien thay vi confirm().' },
      { name: 'prompt', message: 'Nen dung o nhap trong giao dien thay vi prompt().' },
      { name: 'history', message: 'Trong app nay dung useNavigate() cua react-router, khong dung window.history.' },
      { name: 'location', message: 'Trong app nay dung useNavigate() cua react-router, khong dung window.location.' }
    ],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-fallthrough': 'error',
    'no-redeclare': 'error',
    'no-self-compare': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    // JSX
    'react/jsx-uses-react': 'off', // React 17+ khong can import React
    'react/jsx-uses-vars': 'error', // khong bao "khai bao nhung khong dung" nham
    'react/jsx-key': 'error', // thieu key trong danh sach
    'react/jsx-no-duplicate-props': 'error',
    'react/no-children-prop': 'error',
    'react/no-unescaped-entities': 'off', // tieng Viet dung dau ngoac kep trong cau rat nhieu, va React hien thi binh thuong
    'react/jsx-no-target-blank': 'warn'
  }
}
