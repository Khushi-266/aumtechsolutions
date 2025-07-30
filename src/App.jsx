import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Team from './components/Team'
import Career from './components/Career'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <hr />
<Footer/>
    </>
  )
}

export default App
