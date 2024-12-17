import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Galih from './pages/Galih'
import AdinEva from './pages/AdinEva'

function App() {

  return(
    <Router>
      <Routes>
        <Route path='/adin-eva' element={<AdinEva />} />
        <Route path='/galih-wulan' element={<Galih />} />
      </Routes>
    </Router>
    
  )
}

export default App
