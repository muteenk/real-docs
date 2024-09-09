import { Routes, Route } from 'react-router-dom';
import Home from "./Home/Home.tsx";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  )
}

export default Router
