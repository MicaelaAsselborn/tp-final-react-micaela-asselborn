import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Listado from "./pages/Listado";
import Perfil from "./pages/Perfil";
import Carrito from "./pages/Carrito";
import Info from "./pages/Info";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/perfil/:pokemonName" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
