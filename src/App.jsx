import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Signup/>}></Route>
       <Route path='/State' element={<StateBasics/>}></Route>
       <Route path='/Count' element={<Counter/>}></Route>
       <Route path='/Name' element={<Name/>}></Route>
       <Route path='/Api' element={<Api/>}></Route>
       <Route path='/Product' element={<Product/>}></Route>
    </Routes>
    </>
  )
}

export default App
