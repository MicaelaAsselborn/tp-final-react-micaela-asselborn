import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/listado">Listado</Link>
            <Link to="/favoritos">Favoritos</Link>
        </nav>
    )
}

export default Navbar