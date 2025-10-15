import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../img/logo.png";

function Navbar() {
  const { favoritos } = useSelector((state) => state.pokemon);
  const { carrito } = useSelector((state) => state.carrito);

  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <Link to="/" onClick={closeMenu} className="contenedor-logo">
        <img src={logo} alt="Logo" />
        <p className="pokemonSolid">PokeMarket</p>
      </Link>
      <div className={`desktop ${IsOpen ? "menu-desplegado" : "menu-cerrado"}`}>
        <Link to="/" onClick={closeMenu}>
          🏠Inicio{" "}
          <span className={favoritos.length >= 1 ? "numNav" : ""}>
            {favoritos.length >= 1 ? favoritos.length : ""}
          </span>
        </Link>
        <Link to="/listado" onClick={closeMenu}>
          📝Listado
        </Link>
        <Link to="/carrito" onClick={closeMenu}>
          🛒Carrito{" "}
          <span className={carrito.length >= 1 ? "numNav" : ""}>
            {carrito.length >= 1 ? carrito.length : ""}
          </span>
        </Link>
        <Link to="/info" onClick={closeMenu}>
          ⚖️Info
        </Link>
      </div>
      <FontAwesomeIcon
        icon={IsOpen ? faXmark : faBars}
        onClick={toggleMenu}
        className="mobile"
      />
    </nav>
  );
}

export default Navbar;
