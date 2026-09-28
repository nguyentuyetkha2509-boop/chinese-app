import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ProgressProvider } from './store/ProgressContext.jsx'
import { FirebaseSyncProvider } from './store/FirebaseSyncContext.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

// Dang ky service worker qua virtual:pwa-register (thay vi script tu dong
// injectRegister:'auto' truoc day) de thuc su kich hoat che do autoUpdate:
// khi ban moi da san sang, tu dong tai lai trang MOT lan duy nhat - khong
// con phai dong/mo app 2 lan thu cong moi cho ban moi ap dung.
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ProgressProvider>
        <FirebaseSyncProvider>
          <App />
        </FirebaseSyncProvider>
      </ProgressProvider>
    </HashRouter>
  </React.StrictMode>
)
