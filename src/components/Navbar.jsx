import { Link } from "react-router-dom"
import logo from "../img/logo.png"

function Navbar(){
    return(
        <nav>
            <div className="contenedor-logo">
                <img src={logo} alt="Logo" />
                <p>PokeMarket</p>
            </div>
            <div className="navegador">
                <Link to="/">Inicio</Link>
                <Link to="/listado">Listado</Link>
                <Link to="/carrito">Tu carrito</Link>
            </div>
        </nav>
    )
}

export default Navbar