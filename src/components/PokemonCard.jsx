import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos";
import { precioPokemon } from "../utils/precioPokemon";

function PokemonCard({ pokemonData }) {
  const id = pokemonData?.id;

  const { handleFavoritos, esFavorito } = useFavoritos();

  const [buying, setBuying] = useState(false);
  const isBuying = () => {
    setBuying(!buying);
  };

  if (!pokemonData) {
    return <h1>Cargando Pokemón...</h1>;
  }

  return (
    <div className="card card-hover text-center">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="card-img-top"
        alt={pokemonData.name}
      />
      <div className="card-body">
        <h2 className="card-title capitalizado">{pokemonData.name}</h2>
        <p className="card-text">ID: #{id}</p>
        <p className="precio">{`₽${precioPokemon(pokemonData.name)}`}</p>
        <div className="contenedor-detalles centrado">
          <Link to={`/perfil/${pokemonData.name}/${id}`}>
            <button className="btn btn-primary rojo">Detalles</button>
          </Link>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`icono ${buying ? "green" : "white"}`}
            onClick={isBuying}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`icono ${esFavorito(id) ? "red" : "white"}`}
            onClick={() => handleFavoritos(pokemonData)}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
