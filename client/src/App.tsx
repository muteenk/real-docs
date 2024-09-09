import { useState, useEffect, useContext } from 'react'
import { io } from 'socket.io-client'

import { SocketContext } from './context/SocketContext.tsx'
import { DocContext } from './context/DocContext.tsx'
import Router from './pages/Router.tsx'
import SocketHandler from './socket/Socket.ts'
 
function App() {

  const { ws, setWs } = useContext(SocketContext);
  const { docText, setDocText } = useContext(DocContext);

  useEffect(() => {
    SocketHandler(setWs, setDocText);
  }, []);

  
  return (
    <>
      <Router />
    </>
  )
}

export default App
