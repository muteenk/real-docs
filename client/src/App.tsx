import { useState, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
 
function App() {
  const [docText, setDocText] = useState("")
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {

    const socket = io("http://localhost:4000", {
        withCredentials: true,
      });

    socket.on("connect", () => {
      setWs(socket);
      console.log("connected", socket.id);
    });

    socket.on("res", (docText: string) => {
      setDocText(docText);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const onTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDocText(e.target.value)
    ws.emit("req", e.target.value)
  }

  return (
    <>
      <h1 className="text-3xl font-bold">
        Real Docs
      </h1>
      <div>
          Status: {ws ? <span className="text-[green] font-bold">Online</span> : <span className="text-[red] font-bold">Offline</span>}
      </div>
      <div>
        <textarea className="block w-[95%] h-[100vh] mx-auto my-[3em] border-2 border-sky-700 outline-none" value={docText} onChange={(e) => {
          onTyping(e);
        }} ></textarea>
      </div>
    </>
  )
}

export default App
