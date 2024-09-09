import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { SocketProvider } from './context/SocketContext.tsx'
import { DocProvider } from './context/DocContext.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={true} />
      <SocketProvider>
      <DocProvider>
        <App />
      </DocProvider>
      </SocketProvider>
    </BrowserRouter>
  //</StrictMode>,
)
