import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function PokemonCard({ pokemonData }) {
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
      <FontAwesomeIcon
        icon={faHeart}
        className={`corazon ${favorite ? "red" : "white"}`}
        onClick={isFavorite}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="card-img-top"
        alt={pokemonData.name}
      />
      <div className="card-body">
        <h2 className="card-title capitalizado">{pokemonData.name}</h2>
        <p className="card-text">ID: {id}</p>
        <p>Tipos:</p>
        <Link to="/perfil">
          <button className="btn btn-primary">Detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default PokemonCard;
