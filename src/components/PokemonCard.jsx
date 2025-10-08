import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PokemonCard({ pokemonData }) {
  const { lista } = useSelector((state) => state.pokemon);

  const [favorite, setfavorite] = useState(false);
  const isFavorite = () => {
    setfavorite(!favorite);
  };

  if (!pokemonData) {
    return <h1>Cargando Pokemón...</h1>;
  }

  const id = pokemonData.url.split("/")[6];

  return (
    <div className="card text-center">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="card-img-top"
        alt={lista.name}
      />
      <div className="card-body">
        <h2 className="card-title capitalizado">{lista.name}</h2>
        <p className="card-text">ID: #{id}</p>
        <p>Tipos:</p>
        <div className="contenedor centrado">
          <Link to={`/perfil/${pokemonData.name}`}>
            <button className="btn btn-primary rojo">Detalles</button>
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className={`corazon ${favorite ? "red" : "white"}`}
            onClick={isFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
