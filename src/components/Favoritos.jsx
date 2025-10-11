import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function Favoritos() {
  const { favoritos } = useSelector((state) => state.pokemon);

  return (
    <>
      <div className="contenedor-padding">
        <h2 className="pokemonSolid">❤ Favoritos</h2>
        <p>¿No estas seguro de que comprar entre tan maravillosa colección?</p>
        <p>
          ¡Agrega los que más te gustan a favoritos para que puedas encontrarlos
          facilmente después!
        </p>
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
