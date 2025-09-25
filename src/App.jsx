import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detalle from './Detalle'
import Favoritos from './Favoritos'
import Home from './Home'
import Informativa from './Informativa'
import Original from './Original'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Favoritos">Favoritos</Link>
          
        </nav>


      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/Informativa" element={<Informativa /> } />
          <Route path="/Original" element={<Original /> } />
          <Route path="/Favoritos" element={<Favoritos /> } />
          <Route path="/Detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
    </>
      
      
    
  )
}

export default App
