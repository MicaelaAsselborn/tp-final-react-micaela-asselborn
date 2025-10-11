import Favoritos from "../components/Favoritos";
import ball from "../img/ball.png";

function Home() {
  return (
    <main className="paddingless-bottom">
      <header>
        <h1 className="pokemonSolid">🎪 ¡Bienvenid@s a PokeMarket!</h1>
        <div className="subtitulo">
          <img src={ball} alt="pokebola" />
          <h2 className="red">
            - La solución definitiva para Maestros Pokémon -
          </h2>
          <img src={ball} alt="pokebola" />
        </div>
      </header>

      <div className="contenedor">
        <div className="card padding">
          <span className="emoji">🌧️</span>
          <p>¿Pasaste horas bajo la lluvia esperando un Pikachu?</p>
        </div>
        <div className="card padding">
          <span className="emoji">🍃</span>
          <p>¿Tu último Bulbasaur usó Danza Pétalo... para huir?</p>
        </div>
        <div className="card padding">
          <span className="emoji">💸</span>
          <p>¿Gastaste tu presupuesto en Pokébolas que fallaron?</p>
        </div>
      </div>

      <div className="contenedor">
        <h2>¡PREPÁRATE PARA LA BATALLA... Y GÁNALA! 🏆</h2>

        <div className="contenedor">
          <div className="card padding">
            <span className="emoji">🎯</span>
            <h4>Pokémon listos para combatir</h4>
          </div>
          <div className="card padding">
            <span className="emoji">💰</span>
            <h4>Precios que no te harán usar Malicioso</h4>
          </div>
          <div className="card padding">
            <span className="emoji">⚡</span>
            <h4>Entrega más rápida que Ataque Rápido</h4>
          </div>
        </div>
      </div>

      <div className="slogan">
        <p>¡Átrapalos a todos... sin "átraparlos"!</p>
        <p>
          <i>- Team Rocket & Asociados -</i>
        </p>
      </div>
      <Favoritos />
    </main>
  );
}

export default Home;
