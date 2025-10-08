import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Perfil() {
  const { pokemonName } = useParams();

  const { lista } = useSelector((state) => state.pokemon);

  const nombrePokemon = lista.find((pokemon) => pokemon.name === pokemonName);

  return (
    <main>
      <h1 className="capitalizado">{nombrePokemon.name}</h1>
      <Link to="/listado">
        <button className="btn btn-primary rojo">Atrás</button>
      </Link>
    </main>
  );
}

export default Perfil;
