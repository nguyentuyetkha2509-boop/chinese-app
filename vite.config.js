import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Repo rieng, deploy len GitHub Pages tai: https://<user>.github.io/chinese-app/
const BASE_PATH = process.env.VITE_BASE_PATH || '/chinese-app/'

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest}'],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        // Du lieu net chu (public/hanzi-data/*.json, 2632 file ~11MB) KHONG
        // nam trong globPatterns vi tai san ca 11MB luc cai dat la qua nang.
        // Thay vao do cache theo nhu cau: chu nao da mo thi luu vinh vien vao
        // may, lan sau mo lai ke ca khi mat mang van ve duoc.
        // Truoc day khong co dong nay khien trang Viet chu Han hien khung
        // trang hoan toan khi offline - trai voi chinh muc dich PWA cua app.
        runtimeCaching: [
          {
            urlPattern: /\/hanzi-data\/.+\.json$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'hanzi-data',
              expiration: {
                // Phu du 2632 chu neu nguoi dung hoc het.
                maxEntries: 3000,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      manifest: {
        name: 'PandaChinese',
        short_name: 'PandaChinese',
        description: 'Học từ vựng, phát âm và chữ Hán theo giáo trình HSK',
        theme_color: '#7e22ce',
        background_color: '#faf5ff',
        display: 'standalone',
        start_url: BASE_PATH,
        scope: BASE_PATH,
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          hanzi: ['hanzi-writer'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore']
        }
      }
    }
  },
  server: {
    host: true,
    port: 5174
  }
})
