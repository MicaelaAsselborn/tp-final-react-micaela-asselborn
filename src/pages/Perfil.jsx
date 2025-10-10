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
        <h1 className="capitalizado titulo-responsive">{pokemonData.name}</h1>
        <div className="contenedor-responsive">
          <div>
            <img
              className="img-fluid"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt={pokemonName}
            />
            <p>
              Precio: ₽
              {pokemonData?.stats?.[0]?.base_stat
                ? Number(pokemonData.stats[0].base_stat) * 1000
                : "Cargando..."}
            </p>
            <div className="contenedor">
              <button className="hover-red">❤ Favoritos</button>
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
                    className={`tipo ${tipos.get(type.type.name)}`}
                  >
                    {tipos.get(type.type.name)}
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
