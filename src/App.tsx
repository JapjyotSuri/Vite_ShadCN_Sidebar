import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import  Layout  from './component/Layout'
import Home from './component/Home'
import About from './component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Route>
     </Routes>
    </div>
  )
}

export default App
