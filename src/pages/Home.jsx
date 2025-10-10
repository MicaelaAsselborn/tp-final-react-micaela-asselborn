import Favoritos from "../components/Favoritos";

function Home() {
  return (
    <main>
      <section>
        <h1>
          ¡Bienvenidos a PokeMarket, tu mercado negro Pokemón de confianza!
        </h1>
        <p>
          ¿Pokemones muy dificiles de atrapar? ¿No tienes suficientes pokébolas?
          ¿Impuestos por pokémon atrapado muy altos?
        </p>
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
