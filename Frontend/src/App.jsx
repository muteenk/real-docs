import { useState } from 'react'

import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/doc" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
