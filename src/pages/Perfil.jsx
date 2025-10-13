import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos";
import { useCarrito } from "../hooks/useCarrito.js";
import { tiposPokemon } from "../utils/tiposPokemon.js";
import { precioPokemon } from "../utils/precioPokemon.js";

function Perfil() {
  const [pokemonData, setPokemonData] = useState(undefined);
  const { pokemonName, pokemonId } = useParams();
  const navigate = useNavigate();
  const { handleFavoritos, esFavorito } = useFavoritos();
  const { handleCarrito, enCarrito } = useCarrito();

  useEffect(() => {
    const pokeApi = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    };
    pokeApi();
    //Si el nombre (extraido de la url) cambia, hace un nuevo fetch
  }, [pokemonName]);

  const irAPokemonAnterior = async () => {
    const idAnterior = Number(pokemonId) - 1;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idAnterior}`
      );
      if (response.ok) {
        const data = await response.json();
        navigate(`/perfil/${data.name}/${idAnterior}`);
      }
    } catch (error) {
      console.log("Error: ", error);
      console.log("Pokemon no encontrado, buscando el siguiente...");
      irAPokemonAnterior();
    }
  };

  const irAPokemonSiguiente = async () => {
    const idSiguiente = Number(pokemonId) + 1;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idSiguiente}`
      );
      if (response.ok) {
        const data = await response.json();
        navigate(`/perfil/${data.name}/${idSiguiente}`);
      } else {
        navigate(`/perfil/unknown/${idSiguiente}`); //Si el ID no existe, te lleva a la página 404.
      }
    } catch (error) {
      console.log("Error: ", error);
      console.log("Pokemon no encontrado, buscando el siguiente...");
      irAPokemonSiguiente();
    }
  };

  useEffect(() => {
    if (pokemonData?.cries?.latest) {
      const audio = new Audio(pokemonData.cries.latest);
      audio.volume = 0.3;
      audio.play();
    }
  }, [pokemonData]);

  if (pokemonData === undefined)
    return (
      <main>
        <h1>Cargando pokemon...</h1>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </main>
    );
  return (
    <main>
      <div className="alineado contenedor-responsive-carrito">
        <Link to="/listado">
          <div className="alineado-izquierdo">
            <button className="button">← Volver al listado</button>
          </div>
        </Link>
        <div className="paginacion">
          <button
            className="button"
            onClick={irAPokemonAnterior}
            disabled={pokemonId === 1}
          >
            ← Anterior
          </button>
          <button className="button" onClick={irAPokemonSiguiente}>
            Siguiente →
          </button>
        </div>
      </div>
      <div>
        <h1 className="capitalizado titulo-responsive pokemonSolid">{`#${pokemonId} ${pokemonName}`}</h1>
        <div className="contenedor-responsive">
          <div>
            <img
              className="img-fluid"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt={pokemonName}
            />
            <p className="precio">{`₽${precioPokemon(
              pokemonData.stats.map((stat) => stat.base_stat)
            )}`}</p>
            <div className="contenedor">
              <button
                className="hover-red"
                onClick={() => handleFavoritos(pokemonData)}
              >
                {esFavorito(pokemonId) ? "💔 Quitar" : "❤ Favoritos"}
              </button>
              <button
                className="hover-green"
                onClick={() => handleCarrito(pokemonData)}
              >
                {enCarrito(pokemonId) ? "💸 Devolver" : "🛒 Agregar"}
              </button>
            </div>
          </div>
          <div>
            <div className="row contenedor">
              <h2>Información</h2>
              <div className="card centered">
                <h3 className="titulo">Tipos</h3>
                {pokemonData?.types.map((type) => (
                  // Hago un mapeo sobre el array types que trae pokemonData , y obtengo un string x cada uno. le doy como key su nombre, y uso un Map para asignarle una clase (value) segun el nombre del tipo(key)
                  //Renderizo cada string
                  <div
                    key={type.type.name}
                    className={`tipo ${tiposPokemon.get(type.type.name)}`}
                  >
                    {tiposPokemon.get(type.type.name)}
                  </div>
                ))}
              </div>
              <div className="card">
                <h3 className="titulo">Estadisticas</h3>
                <div className="alineado">
                  <p>HP:</p>
                  <p>{pokemonData?.stats[0].base_stat}</p>
                </div>
                <div className="alineado">
                  <p>Ataque:</p>
                  <p>{pokemonData?.stats[1].base_stat}</p>
                </div>
                <div className="alineado">
                  <p>Defensa:</p>
                  <p>{pokemonData?.stats[2].base_stat}</p>
                </div>
                <div className="alineado">
                  <p>Ataque especial:</p>
                  <p>{pokemonData?.stats[3].base_stat}</p>
                </div>
                <div className="alineado">
                  <p>Defensa especial:</p>
                  <p>{pokemonData?.stats[4].base_stat}</p>
                </div>
                <div className="alineado">
                  <p>Velocidad:</p>
                  <p>{pokemonData?.stats[5].base_stat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Perfil;
