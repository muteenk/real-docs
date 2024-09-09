import React, {useState, useContext} from 'react'
import {SocketContext} from '../../context/SocketContext.tsx'
import {DocContext} from '../../context/DocContext.tsx'


const Dashboard = () => {

  const {ws} = useContext(SocketContext);
  const {docText, setDocText} = useContext(DocContext);

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
        <textarea className="block w-[95%] h-[100vh] mx-auto my-[3em] shadow-[-3px_3px_40px_1px_rgb(0,0,0,0.4)] px-10 py-10 rounded-md outline-none resize-none" value={docText} onChange={(e) => {
          onTyping(e);
        }} ></textarea>
      </div>
    </>
  )
}

export default Dashboard
