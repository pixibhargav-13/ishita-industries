import { Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage/About'
import Homepage from './pages/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
