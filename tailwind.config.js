export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#faf5ff',
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8'
        },
        // Bang mau VANG THAT.
        //
        // Truoc day cho nay chua nguyen bang mau XANH LA cua Tailwind
        // (#dcfce7, #4ade80, #22c55e, #16a34a) - gan nhu chac chan la chep nham.
        // Hau qua thay duoc: bieu tuong cup o Bang xep hang mau xanh, chu XP
        // mau xanh, va o "Viet chu Han" o trang chu mau xanh trong khi moi noi
        // khac noi ve Viet chu deu la mau hong. Trong bang mau cua app, mau xanh
        // la viec cua `teal` (bao "da xong"), nen khong cho nao co y muon gold
        // mang mau xanh.
        //
        // Rieng sac do 600 dat dam hon muc thong thuong (tuong duong amber-700)
        // vi no duoc dung lam CHU tren nen gold-100 - lay amber-600 thi tuong
        // phan chi ~2.8:1, kho doc.
        gold: {
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#b45309',
          700: '#92400e'
        },
        sky: {
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        sun: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c'
        },
        candy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d'
        },
        teal: {
          100: '#ccfbf1',
          200: '#99f6e4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e'
        }
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.25rem' }],
        sm: ['1rem', { lineHeight: '1.5rem' }],
        base: ['1.125rem', { lineHeight: '1.65rem' }],
        lg: ['1.25rem', { lineHeight: '1.8rem' }],
        xl: ['1.375rem', { lineHeight: '1.9rem' }],
        '2xl': ['1.625rem', { lineHeight: '2.1rem' }]
      },
      fontWeight: {
        normal: '600',
        medium: '700',
        semibold: '800',
        bold: '900'
      }
    }
  },
  plugins: []
}
