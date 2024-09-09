import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home.tsx";


interface RouterProps {
  ws: WebSocket | null;
  setWs: React.Dispatch<React.SetStateAction<WebSocket | null>>;
  docText: string;
  setDocText: React.Dispatch<React.SetStateAction<string>>;
}

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  )
}

export default Router
