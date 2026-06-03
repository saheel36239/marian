import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
 import Navbar from './components/Navbar'
import Add from './components/add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/> 
  <Routes>
     <Route path='/Add' element={<Add/>}></Route>
      <Route path='/View' element={<View/>}></Route>
  </Routes>
 </>
  )
}

export default App
