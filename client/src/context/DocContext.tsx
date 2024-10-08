import { createContext, useContext, useState } from 'react';


export const DocContext = createContext();


export const DocProvider = ({children}: any) => {

  const [docText, setDocText] = useState<string>("");

  return (
    <DocContext.Provider value={{docText, setDocText}}>
      {children}
    </DocContext.Provider>
  )
}
