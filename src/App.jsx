import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Employe } from './pages/Employe'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employe" element={<Employe />} />
      </Routes>
    </Router>
  )
}

export default App
