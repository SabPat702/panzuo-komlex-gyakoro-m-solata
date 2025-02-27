import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons/css/tachyons.min.css'
import { Home } from './Home'

function App() {
  

  return (
  <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  </>
  )
}

export default App
