import { Route, Routes } from 'react-router-dom'


import './App.css'

import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element="{<Home />}" />
      </Routes>
      <Footer />
    </>
  )
}

export default App
