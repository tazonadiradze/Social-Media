import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './Components/Sign-in/Sign-in'
import Home from './Components/Routes/Home/Home'
export default function App() {
  return (
    <div>
      <Routes>

        <Route index element={<SignIn />} />
        <Route path={'/home'} element={<Home />} />
      </Routes>

    </div>
  )
}
