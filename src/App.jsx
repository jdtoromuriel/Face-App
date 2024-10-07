import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './styles/index.scss'

function App() {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </Router>
  )
}

export default App
