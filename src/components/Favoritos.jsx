import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function Favoritos() {
  const { favoritos } = useSelector((state) => state.pokemon);

  return (
    <>
      <h2>❤ Mis pokemones favoritos: </h2>
      <div>
        {favoritos.length === 0 ? (
          <p>Aun no has agregado pokemones a tu lista de favoritos.</p>
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
