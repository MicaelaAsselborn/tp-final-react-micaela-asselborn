import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import { useFavoritos } from "../hooks/useFavoritos";
import { useCarrito } from "../hooks/useCarrito";
import { precioPokemon } from "../utils/precioPokemon";

//pokemonData viene desde Listado
function PokemonCard({ pokemonData }) {
  const id = pokemonData.id; //simplificó el ID

  const { handleFavoritos, esFavorito } = useFavoritos(); //Traigo las funciones de useFavoritos
  const { handleCarrito, enCarrito } = useCarrito(); //Traigo las funciones de useCarrito

  //Si pokemonData viene undefined, muestro un spinner
  if (!pokemonData) {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    );
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
            className={`icono ${enCarrito(id) ? "green" : "white"}`}
            onClick={() => handleCarrito(pokemonData)}
          />
          <FontAwesomeIcon
            icon={faHeart}
            //Al clickear se ejecuta la funcion que chequea si esta o no en favoritos
            onClick={() => handleFavoritos(pokemonData)}
            //Si el ID esta en la favoritos, el corazon es rojo, si no, es blanco
            className={`icono ${esFavorito(id) ? "red" : "white"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
