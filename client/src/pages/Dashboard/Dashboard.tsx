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
      <div className="bg-background">
        <textarea className="bg-surface block w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%] aspect-[9/16] mx-auto my-[3em] border-[0.5px] border-gray-400 px-10 py-10 outline-none resize-none" value={docText} onChange={(e) => {
          onTyping(e);
        }} ></textarea>
      </div>
    </>
  )
}

export default Dashboard
