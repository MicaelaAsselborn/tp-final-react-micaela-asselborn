import { Link } from "react-router-dom";

function Perfil() {
  return (
    <main>
      <h1>Perfil</h1>
      <Link to="/listado">
        <button className="btn btn-primary">Atrás</button>
      </Link>
    </main>
  );
}

export default Perfil;
