import React from 'react'
import Home from "./Pages/Home"
import About from './Pages/About'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}


