import {createContext, useContext, useState} from 'react';

export const SocketContext = createContext();

export const SocketProvider = ({children}: any) => {

  const [ws, setWs] = useState<WebSocket | null>(null);

  return (
    <SocketContext.Provider value={{ws, setWs}}>
      {children}
    </SocketContext.Provider>
  )
}

