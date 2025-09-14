import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Routers/Navbar'
import HomePage from './Components/HomePage'
import InfoPage from './Components/InfoPage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'
import LoginPage from './Routers/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/plantcare">
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/info" element={<InfoPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/login" element={<LoginPage />} />

    {/* Agar koi aur URL ho to redirect */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
