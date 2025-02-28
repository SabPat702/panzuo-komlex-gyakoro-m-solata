import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons/css/tachyons.min.css'
import { Home } from './Home'
import { SzobakFoglaltsaga } from './SzobakFolglaltsaga'

function App() {
  

  return (
  <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/szobakFoglaltsaga' element={<SzobakFoglaltsaga />} />
      </Routes>
  </>
  )
}

export default App
