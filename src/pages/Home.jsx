import Favoritos from "../components/Favoritos";

function Home() {
  return (
    <main className="paddingless-bottom">
      <section>
        <h1 className="pokemonSolid">¡Bienvenidos a PokeMarket!</h1>
        <h2 className="red">✨ Tu mercado negro Pokemón de confianza ✨</h2>
        <p>¿Mala punteria?</p>
        <p>¿Pokébolas insuficientes?</p>
        <p>¿Pésimo atrapando pokemon?</p>
        <p>¡No te preocupes más!</p>
        <p>
          En el Mercado Negro Pokemon del Equipo Rocket y Asociados puedes
          encontrar y adquirir facilmente todos los pokemons que necesites sin
          esfuerzo alguno por un módico precio.
        </p>
      </section>
      <Favoritos />
    </main>
  );
}

export default Home;
