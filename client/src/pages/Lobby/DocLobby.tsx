import React, {useState} from 'react'
import Host from './Host'
import Join from './Join'

const DocLobby = () => {

  const [isHost, setIsHost] = useState<boolean>(true);

  const toggleHost = () => {
    setIsHost(!isHost);
  }

  return (
    <>
      <nav className="py-8">
        <h2 className="text-center text-[2.5em] font-bold">Real-Time Docs</h2>
      </nav>
      <div className="flex justify-evenly w-full">
        <button className={"font-bold px-20 py-2 text-lg shadow-md " + ((isHost) ? "text-[white] bg-primary" : "text-primary bg-[white] border-[1px] border-primary")} onClick={toggleHost} >Host</button>
        <button className={"font-bold px-20 py-2 text-lg shadow-md " + ((!isHost) ? "text-[white] bg-primary" : "text-primary bg-[white] border-[1px] border-primary")} onClick={toggleHost} >Join</button>
      </div>

      {
        (isHost) ? <Host /> : <Join />
      }
    </>
  )
}

export default DocLobby
