import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Perfil() {
  const { pokemonName, pokemonId } = useParams();

  const { lista } = useSelector((state) => state.pokemon);

  const pokemonData = lista.find((pokemon) => pokemon.name === pokemonName);

  return (
    <main>
      <Link to="/listado">
        <div className="alineado-izquierdo">
          <button className="btn btn-primary rojo">← Volver al listado</button>
        </div>
      </Link>
      <div>
        <h1 className="capitalizado">{pokemonData.name}</h1>
        <div>
          <img
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            alt={pokemonName}
          />
          <div>
            <h2>Información</h2>
            <div>
              <h3>Estadisticas</h3>
            </div>
            <div>
              <h3>Tipo</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Perfil;
