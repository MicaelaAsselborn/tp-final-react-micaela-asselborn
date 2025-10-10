import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavoritos } from "../store/pokemon";

function PokemonCard({ pokemonData }) {
  const id = pokemonData.url?.split("/")[6];

  const { favoritos } = useSelector((state) => state.pokemon);
  const esFavorito = favoritos.some((fav) => fav.id == id);

  const dispatch = useDispatch();
  const handleFavoritos = () => {
    const pokemonId = {
      ...pokemonData,
      id: id,
    };
    dispatch(toggleFavoritos(pokemonId));
  };

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
        <p>Precio: ₽10.000</p>
        <div className="contenedor centrado">
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
            className={`icono ${esFavorito ? "red" : "white"}`}
            onClick={handleFavoritos}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
