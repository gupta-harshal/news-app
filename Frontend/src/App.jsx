import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home.jsx'
import Summary from './pages/Summary.jsx';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/summary' element={<Summary />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
