import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empezarCarga,
  cargaExitosa,
  cargaFallida,
  agregarPokemones,
  resetearPokemones,
  cambiarPagina,
} from "../store/Pokemon.js";
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
        const pokemonesCompletos = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonCompleto = await response.json();
            return pokemonCompleto;
          })
        );
        dispatch(agregarPokemones(pokemonesCompletos));
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
      <div className="padding">
        <h1 className="pokemonSolid">Poke Oferta</h1>
        <p>Navega entre más de 1000 pokemones y adquiere a tus favoritos.</p>
      </div>

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
