import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PokemonCard({ pokemonData }) {
  const { lista } = useSelector((state) => state.pokemon);

  const [favorite, setfavorite] = useState(false);
  const isFavorite = () => {
    setfavorite(!favorite);
  };

  const [buying, setBuying] = useState(false);
  const isBuying = () => {
    setBuying(!buying);
  };

  if (!pokemonData) {
    return <h1>Cargando Pokemón...</h1>;
  }

  const id = pokemonData.id || pokemonData.url?.split("/")[6];

  function precio(nombre) {
    let hash = 0;
    for (let i = 0; i < nombre.length; i++) {
      hash += nombre.charCodeAt(i); // suma los códigos Unicode
    }
    // Ajuste del valor para que sea un precio “realista”
    const precio = (hash % 100) + 1; // precios entre 1 y 100
    return precio;
  }

  return (
    <div className="card card-hover text-center">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="card-img-top"
        alt={lista.name}
      />
      <div className="card-body">
        <h2 className="card-title capitalizado">{pokemonData.name}</h2>
        <p className="card-text">ID: #{id}</p>
        <p>Precio: ₽{precio}</p>
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
            className={`icono ${favorite ? "red" : "white"}`}
            onClick={isFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
