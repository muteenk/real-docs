import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { SocketProvider } from './context/SocketContext.tsx'
import { DocProvider } from './context/DocContext.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <BrowserRouter>
      <SocketProvider>
      <DocProvider>
        <App />
      </DocProvider>
      </SocketProvider>
    </BrowserRouter>
  //</StrictMode>,
)
