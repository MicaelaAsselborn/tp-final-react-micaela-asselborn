import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function Buscador() {
  const [resultadosAPI, setResultadosAPI] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const pokeApi = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`
        );
        if (!response.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();
        setResultadosAPI([data]);
      } catch (error) {
        console.log(error);
        setResultadosAPI([]);
      }
    };

    if (busqueda.trim()) {
      pokeApi();
    } else {
      setResultadosAPI([]);
    }
  }, [busqueda]);

  return (
    <form onSubmit={handleSubmit}>
      <p>
        🔍
        <input
          type="text"
          placeholder="Busca un pokemon..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </p>
      <div>
        {busqueda && resultadosAPI.length === 0 && (
          <p>No se encontró "{busqueda}"</p>
        )}
        {resultadosAPI.map((pokemon) => (
          <div key={pokemon.name} className="col-sm-6 mb-3">
            <PokemonCard pokemonData={pokemon} />
          </div>
        ))}
      </div>
    </form>
  );
}

export default Buscador;
