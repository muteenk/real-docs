import { Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard.tsx";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Dashboard/>} />
    </Routes>
  )
}

export default Router
