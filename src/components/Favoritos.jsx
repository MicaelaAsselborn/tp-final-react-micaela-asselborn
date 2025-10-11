import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function Favoritos() {
  const { favoritos } = useSelector((state) => state.pokemon);

  return (
    <>
      <div className="slogan">
        <h2 className="pokemonSolid">❤ Favoritos</h2>
        <div className="padding">
          <p>¿Abrumado por tanta elección? ¿No sabes por dónde empezar?</p>
          <p>
            ✨ ¡<strong>Marca con ❤️</strong> los Pokémon que más te gusten y
            créa tu lista personalizada!
          </p>
          <p>
            🚀 <strong>Encuéntralos al instante</strong> aqui debajo 👇🏼 cuando
            estés listo para hacer tu pedido
          </p>
        </div>
      </div>
      <div>
        {favoritos.length === 0 ? (
          <div className="contenedor border-top">
            <p className="grey">
              Aun no has agregado pokemones a tu lista de favoritos.
            </p>
          </div>
        ) : (
          <div className="contenedor margin-Y">
            {favoritos.map((pokemon) => {
              return (
                <PokemonCard
                  key={`${pokemon.name}-${pokemon.id}`}
                  pokemonData={pokemon}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Favoritos;
