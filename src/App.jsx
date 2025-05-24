import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
