import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ProgressProvider } from './store/ProgressContext.jsx'
import { GistSyncProvider } from './store/GistSyncContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ProgressProvider>
        <GistSyncProvider>
          <App />
        </GistSyncProvider>
      </ProgressProvider>
    </HashRouter>
  </React.StrictMode>
)
