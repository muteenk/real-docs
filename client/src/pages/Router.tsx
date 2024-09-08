import { Routes, Route } from 'react-router-dom';

import Home from "./Home/Home.tsx"


interface RouterProps {
  ws: WebSocket | null;
  setWs: React.Dispatch<React.SetStateAction<WebSocket | null>>;
  docText: string;
  setDocText: React.Dispatch<React.SetStateAction<string>>;
}

const Router = ({ws, setWs, docText, setDocText}: RouterProps) => {

  return (
    <Routes>
      <Route path="/" element={<Home ws={ws} setWs={setWs} docText={docText} setDocText={setDocText} />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  )
}

export default Router
