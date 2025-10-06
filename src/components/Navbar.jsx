import { Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

import logo from "../img/logo.png"


function Navbar(){

    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return(
        <nav>
            <div className="contenedor-logo">
                <img src={logo} alt="Logo" />
                <p>PokeMarket</p>
            </div>
            <div className={`desktop ${IsOpen? "menu-desplegado" : "menu-cerrado"}`}>
                <Link to="/" onClick={closeMenu}>Inicio</Link>
                <Link to="/listado" onClick={closeMenu}>Listado</Link>
                <Link to="/carrito" onClick={closeMenu}>Tu carrito</Link>
            </div>
            <FontAwesomeIcon icon={IsOpen? faXmark : faBars} onClick={toggleMenu} className="mobile"/>
        </nav>
        
    )
}

export default Navbar