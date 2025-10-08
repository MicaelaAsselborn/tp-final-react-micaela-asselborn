import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  empezarCarga,
  cargaExitosa,
  cargaFallida,
  agregarPokemones,
} from "../store/pokemon";

import PokemonCard from "../components/PokemonCard";
import Buscador from "../components/Buscador";

function Listado() {
  const { lista, cargando, error } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const [offset, setoffset] = useState(0);

  const cargarMas = () => {
    setoffset((prevoffset) => prevoffset + 20);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        dispatch(empezarCarga());
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
        );
        const data = await response.json();

        if (offset === 0) {
          dispatch(cargaExitosa(data.results));
        } else {
          dispatch(agregarPokemones(data.results));
        }
      } catch (error) {
        dispatch(cargaFallida(error.message));
      }
    };
    fetchPokemons();
  }, [offset]);

  return (
    <main>
      <h1>📝 Poke Oferta</h1>
      <p>{`Navega entre ${lista.length} pokemones y encuentra a tus favoritos.`}</p>
      <Buscador />
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
