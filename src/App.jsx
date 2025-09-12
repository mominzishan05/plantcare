import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Routers/Navbar'
import HomePage from './Components/HomePage'
import InfoPage from './Components/InfoPage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/info' element={<InfoPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
    </BrowserRouter>






    
    </>
    
  )
}

export default App
