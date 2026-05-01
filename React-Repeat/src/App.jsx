import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'


import FirstLesson from './pages/FirstLesson'
import HomePage from './pages/HomePage'
import ProductManager from './pages/ProductManager'


function App() {

  return (
    <>
      <nav>
        <Link to = "/">Home</Link>
        <Link to="/first-lesson">First Lesson</Link>
        <Link to="/product-manager">Product Manager</Link>
      </nav>


      <Routes>
          <Route path = "/" element={<HomePage />} />
          <Route path = "/first-lesson" element = {<FirstLesson />} />
          <Route path = "/product-manager" element = {<ProductManager />} />
          
      </Routes>
    </>
  )
}

export default App
