import { Link } from "react-router-dom";

function Info() {
  return (
    <main>
      <div className="container">
        <header className="disclaimer-header">
          <h1 className="rocket-title">
            ⚖️ Aviso Legal - Team Rocket & Asociados
          </h1>
          <p className="disclaimer-subtitle">
            "Legalmente cuestionable, éticamente flexible"
          </p>
        </header>

        <div className="disclaimer-content">
          <div className="legal-section">
            <h2 className="red">📜 DECLARACIÓN DE INTENCIONES (Más o menos)</h2>
            <p>
              Nosotros, el <strong>Team Rocket</strong>, queremos aclarar que
              esta operación es <em>completamente legítima</em>* y cuenta con
              todas las aprobaciones necesarias** para operar en el mercado
              Pokémon.
            </p>
            <p className="fine-print">
              * Legítima según nuestros estándares internos
              <br />
              ** Aprobaciones otorgadas por nosotros mismos
            </p>
          </div>

          <div className="legal-section">
            <h2 className="red">🔄 POLÍTICA DE INTERCAMBIO</h2>
            <ul>
              <li>
                ✅ Todos los Pokémon son 100% "adquiridos" mediante métodos
                propios
              </li>
              <li>✅ Garantizamos que no preguntaremos de dónde vienen</li>
              <li>✅ No garantizamos que no huyan al primer combate</li>
              <li>
                ❌ No aceptamos devoluciones, quejas o miradas de decepción
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="red">🚨 EXENCIÓN DE RESPONSABILIDAD</h2>
            <p>El Team Rocket no se hace responsable por:</p>
            <ul>
              <li>🐭 Pokémon que resulten ser Dittos disfrazados</li>
              <li>💥 Explosiones inesperadas al evolucionar</li>
              <li>👮‍♂️ Encuentros fortuitos con oficiales Jenny</li>
              <li>🤥 Que el Pokémon te mienta sobre su CV</li>
              <li>🍃 Que use Hoja Afilada... contra ti</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2 className="red">💰 ASPECTOS ECONÓMICOS</h2>
            <p>
              Todos los precios están en <strong>₽Pokédólares</strong>, moneda
              oficial respaldada por la confianza que nos tenemos a nosotros
              mismos. No aceptamos preguntas sobre el cambio monetario.
            </p>
          </div>

          <div className="legal-section warning">
            <h2 className="red">⚠️ ADVERTENCIA FINAL</h2>
            <p>
              Al utilizar PokeMarket, aceptas que:
              <br />
              <strong>
                "Lo que pasa en el Team Rocket, se queda en el Team Rocket"
              </strong>
              <br />Y que probablemente esto viole varias docenas de leyes
              Pokémon.
            </p>
          </div>

          <div className="signature">
            <p>Atentamente,</p>
            <p className="signature-names">
              <strong className="red">Giovanni & Asociados</strong>
              <br />
              <em>"Haciendo el mal desde 1996"</em>
            </p>
          </div>
        </div>

        <div className="disclaimer-actions">
          <Link to="/listado">
            <button className="btn btn-primary rojo">
              🚀 ¡Entendido! Quiero Pokémon
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-secondary">🏠 Volver al Inicio</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Info;
