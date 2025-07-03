import { useState } from 'react'
import Login from './pages/login.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ShopGrid from './pages/ShopGrid.jsx'

function App() {


  return (
    <>
    

    <Routes>
    <Route path="/" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/product" element={<ProductDetail/>} />
     <Route path="/shop" element={<ShopGrid/>} />
    </Routes>

    
    </>
  )
}

export default App
