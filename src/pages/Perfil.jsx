import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Perfil() {
  const { pokemonName, pokemonId } = useParams();

  const { lista } = useSelector((state) => state.pokemon);

  const pokemonData = lista.find((pokemon) => pokemon.name === pokemonName);

  return (
    <main>
      <h1 className="capitalizado">{pokemonData.name}</h1>
      <img
        className="img-fluid"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        alt={pokemonName}
      />
      <Link to="/listado">
        <button className="btn btn-primary rojo">Atrás</button>
      </Link>
    </main>
  );
}

export default Perfil;
