import { useState } from 'react'
import Login from './pages/login.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <>
    

    <Routes>
    <Route path="/" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />
     <Route path="/home" element={<Home/>} />
    </Routes>

    
    </>
  )
}

export default App
