import { useState, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'

import Router from './pages/Router.tsx'
import SocketHandler from './socket/Socket.ts'
 
function App() {
  const [docText, setDocText] = useState("")
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    SocketHandler(setWs, setDocText);
  }, []);

  
  return (
    <>
      <Router ws={ws} setWs={ws} docText={docText} setDocText={setDocText} />
    </>
  )
}

export default App
