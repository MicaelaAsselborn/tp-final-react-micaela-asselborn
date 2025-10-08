function Buscador() {
  const BASE = "https://pokeapi.co/api/v2/pokemon";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        🔍
        <input type="text" placeholder="Busca un pokemon..." />
      </p>
    </form>
  );
}

export default Buscador;
