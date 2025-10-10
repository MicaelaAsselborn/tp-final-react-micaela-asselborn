import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empezarCarga,
  cargaExitosa,
  cargaFallida,
  agregarPokemones,
} from "../store/pokemon";

import PokemonCard from "../components/PokemonCard";

function Listado() {
  const { lista, cargando, error } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const cargarMas = () => {
    setOffset((prevOffset) => prevOffset + 50);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        dispatch(empezarCarga());
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
        );
        const data = await response.json();

        dispatch(agregarPokemones(data.results));
        dispatch(cargaExitosa(data.results));
      } catch (error) {
        dispatch(cargaFallida(error.message));
      }
    };
    fetchPokemons();
  }, [offset]);

  return (
    <main>
      <h1>📝 Poke Oferta</h1>
      <p>{`Navega entre más de 1000 pokemones y adquiere a tus favoritos.`}</p>

      {cargando && <p>Cargando pokémones...</p>}
      {error && <p>Error: {error}</p>}
      <div className="row padding-bottom">
        <div className="contenedor">
          {lista.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemonData={pokemon} />;
          })}
        </div>
      </div>
      <button className="btn btn-primary rojo" onClick={cargarMas}>
        Cargar más
      </button>
    </main>
  );
}

export default Listado;
