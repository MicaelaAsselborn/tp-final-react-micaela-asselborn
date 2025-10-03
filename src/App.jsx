import { Route, Routes } from 'react-router-dom'


import './App.css'

import Home from './pages/Home'
import Listado from './pages/Listado'
import Perfil from './pages/Perfil'
import Favoritos from './pages/Favoritos'
import Error from './pages/Error'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listado' element={<Listado />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
