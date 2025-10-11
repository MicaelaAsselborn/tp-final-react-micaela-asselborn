import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFavoritos } from "../hooks/useFavoritos";
import { tiposPokemon } from "../utils/tiposPokemon.js";
import { precioPokemon } from "../utils/precioPokemon.js";

function Perfil() {
  const [pokemonData, setPokemonData] = useState(undefined);
  const { pokemonName, pokemonId } = useParams();
  const { handleFavoritos, esFavorito } = useFavoritos();

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
  }, [pokemonName]);

  useEffect(() => {
    if (pokemonData?.cries?.latest) {
      const audio = new Audio(pokemonData.cries.latest);
      audio.volume = 0.3;
      audio.play();
    }
  }, [pokemonData]);

  if (pokemonData === undefined) return <></>;
  return (
    <main>
      <Link to="/listado">
        <div className="alineado-izquierdo">
          <button className="btn btn-primary rojo">← Volver al listado</button>
        </div>
      </Link>
      <div>
        <h1 className="capitalizado titulo-responsive pokemonSolid">{`#${pokemonId} ${pokemonData.name}`}</h1>
        <div className="contenedor-responsive">
          <div>
            <img
              className="img-fluid"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt={pokemonName}
            />
            <p className="precio">{`Precio: ₽${precioPokemon(
              pokemonData.name
            )}`}</p>
            <div className="contenedor">
              <button
                className="hover-red"
                onClick={() => {
                  const pokemonSimple = {
                    name: pokemonData.name,
                    url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
                    id: pokemonId,
                  };
                  handleFavoritos(pokemonSimple);
                }}
              >
                {esFavorito(pokemonId) ? "💔 Quitar" : "❤ Favoritos"}
              </button>
              <button className="hover-green">🛒 Comprar</button>
            </div>
          </div>
          <div>
            <div className="row contenedor">
              <h2>Información</h2>
              <div className="card centered">
                <h3 className="titulo">Tipos</h3>
                {pokemonData?.types.map((type) => (
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
