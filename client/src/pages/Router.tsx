import { Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard.tsx";
import Home from "./Home/Home.tsx";
import DocLobby from "./Lobby/DocLobby.tsx";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<DocLobby/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Dashboard/>} />
    </Routes>
  )
}

export default Router
