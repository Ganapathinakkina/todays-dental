import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/faq' element={<Faq/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
