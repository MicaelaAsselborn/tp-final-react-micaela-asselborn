import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empezarCarga,
  cargaExitosa,
  cargaFallida,
  agregarPokemones,
  resetearPokemones,
  cambiarPagina,
} from "../store/pokemon";

import PokemonCard from "../components/PokemonCard";

function Listado() {
  const { lista, cargando, error, paginaActual } = useSelector(
    (state) => state.pokemon
  );
  const dispatch = useDispatch();

  const pokemonesPorPagina = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        dispatch(empezarCarga());
        dispatch(resetearPokemones());

        const offset = (paginaActual - 1) * pokemonesPorPagina;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonesPorPagina}&offset=${offset}`
        );
        const data = await response.json();

        dispatch(agregarPokemones(data.results));
        dispatch(cargaExitosa());
      } catch (error) {
        dispatch(cargaFallida(error.message));
      }
    };

    fetchPokemons();
  }, [paginaActual, dispatch]);

  const irAPaginaAnterior = () => {
    if (paginaActual > 1) {
      dispatch(cambiarPagina(paginaActual - 1));
    }
  };

  const irAPaginaSiguiente = () => {
    dispatch(cambiarPagina(paginaActual + 1));
  };

  return (
    <main>
      <h1 className="pokemonSolid">Poke Oferta</h1>
      <p>{`Navega entre más de 1000 pokemones y adquiere a tus favoritos.`}</p>

      {cargando && <p>Cargando pokémones...</p>}
      {error && <p>Error: {error}</p>}

      <div className="paginacion">
        <button
          className="btn btn-primary rojo"
          onClick={irAPaginaAnterior}
          disabled={paginaActual === 1}
        >
          ← Anterior
        </button>

        <p>Página {paginaActual}</p>

        <button className="btn btn-primary rojo" onClick={irAPaginaSiguiente}>
          Siguiente →
        </button>
      </div>

      <div className="row margin-Y">
        <div className="contenedor">
          {lista.map((pokemon) => {
            return (
              <PokemonCard
                key={`${pokemon.name}-${pokemon.id}`}
                pokemonData={pokemon}
              />
            );
          })}
        </div>
      </div>

      <div className="paginacion">
        <button
          className="btn btn-primary rojo"
          onClick={irAPaginaAnterior}
          disabled={paginaActual === 1}
        >
          ← Anterior
        </button>

        <p>Página {paginaActual}</p>

        <button className="btn btn-primary rojo" onClick={irAPaginaSiguiente}>
          Siguiente →
        </button>
      </div>
    </main>
  );
}

export default Listado;
