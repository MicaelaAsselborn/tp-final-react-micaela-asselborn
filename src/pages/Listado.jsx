import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  agregarPokemones,
  resetearPokemones,
  cambiarPagina,
} from "../store/pokemon.js";

import PokemonCard from "../components/PokemonCard";

function Listado() {
  const { lista, paginaActual } = useSelector((state) => state.pokemon); //Obtengo los valores globales de lista y pagina
  const dispatch = useDispatch();
  const pokemonesPorPagina = 20;

  useEffect(() => {
    //Fetch para traer pokemones
    const fetchPokemons = async () => {
      try {
        dispatch(resetearPokemones());

        const offset = (paginaActual - 1) * pokemonesPorPagina; //Calcula la posicion en el array desde la que comenzar a cargar pokemon

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonesPorPagina}&offset=${offset}`
        );
        const data = await response.json(); //Guarda name y url en JSON

        //Hace 20 llamados en paralelo y espera que todas terminen
        const pokemonesCompletos = await Promise.all(
          //Crea un array de 20 pokemon
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url); //Trae todo el contenido de url ()
            const pokemonCompleto = await response.json(); //Guarda los datos en JSON
            return pokemonCompleto;
          })
        );
        dispatch(agregarPokemones(pokemonesCompletos)); //Guardo los datos completos en lista
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPokemons();
  }, [paginaActual]); //Se ejecuta cuando cambia paginaActual

  //Funciones de cambio de página
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
      <div className="paginacion">
        <button
          className="button"
          onClick={irAPaginaAnterior}
          disabled={paginaActual === 1}
        >
          ← Anterior
        </button>

        <p>Página {paginaActual}</p>

        <button className="button" onClick={irAPaginaSiguiente}>
          Siguiente →
        </button>
      </div>

      <div className="row margin-Y">
        <div className="contenedor">
          {lista.map((pokemon) => {
            //Itero sobre cada elemento de lista con map y obtengo el objeto pokemon
            //Por cada elemento, creo una card con los datos de cada pokemon, y le asigno una key
            //Envio los datos del fetch a travez de pokemonData
            return <PokemonCard key={pokemon.id} pokemonData={pokemon} />;
          })}
        </div>
      </div>

      <div className="paginacion">
        <button
          className="button"
          onClick={irAPaginaAnterior}
          disabled={paginaActual === 1}
        >
          ← Anterior
        </button>

        <p>Página {paginaActual}</p>

        <button className="button" onClick={irAPaginaSiguiente}>
          Siguiente →
        </button>
      </div>
    </main>
  );
}

export default Listado;
