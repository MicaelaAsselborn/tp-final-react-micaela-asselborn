import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Perfil() {
  const [pokemonData, setPokemonData] = useState(undefined);

  const { pokemonName, pokemonId } = useParams();

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

  const tipos = new Map();

  tipos.set("steel", "Acero");
  tipos.set("water", "Agua");
  tipos.set("bug", "Bicho");
  tipos.set("dragon", "Drágon");
  tipos.set("electric", "Eléctrico");
  tipos.set("ghost", "Fantasma");
  tipos.set("fire", "Fuego");
  tipos.set("fairy", "Hada");
  tipos.set("ice", "Hielo");
  tipos.set("fighting", "Lucha");
  tipos.set("normal", "Normal");
  tipos.set("grass", "Planta");
  tipos.set("psychic", "Psíquico");
  tipos.set("rock", "Roca");
  tipos.set("dark", "Siniestro");
  tipos.set("ground", "Tierra");
  tipos.set("poison", "Veneno");
  tipos.set("flying", "Volador");

  if (pokemonData === undefined) return <></>;
  return (
    <main>
      <Link to="/listado">
        <div className="alineado-izquierdo">
          <button className="btn btn-primary rojo">← Volver al listado</button>
        </div>
      </Link>
      <div>
        <h1 className="capitalizado">{pokemonData?.name}</h1>
        <div>
          <img
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            alt={pokemonName}
          />
          <div>
            <h2>Información</h2>
            <div>
              <h3>Estadisticas</h3>
              <p>HP: {pokemonData?.stats[0].base_stat}</p>
              <p>Ataque: {pokemonData?.stats[1].base_stat}</p>
              <p>Defensa: {pokemonData?.stats[2].base_stat}</p>
              <p>Ataque especial: {pokemonData?.stats[3].base_stat}</p>
              <p>Defensa especial: {pokemonData?.stats[4].base_stat}</p>
              <p>Velocidad: {pokemonData?.stats[5].base_stat}</p>
            </div>
            <div>
              <h3>Tipos</h3>
              {pokemonData?.types.map((type) => (
                <p key={type.type.name}>{tipos.get(type.type.name)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Perfil;
