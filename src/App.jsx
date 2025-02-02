import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='font-poppins'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  )
}

export default App