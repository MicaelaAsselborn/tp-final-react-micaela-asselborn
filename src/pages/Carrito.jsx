import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import PokemonCard from "../components/PokemonCard";

import { precioPokemon } from "../utils/precioPokemon";
import { resetearCarrito } from "../store/carrito";

function Carrito() {
  const { carrito } = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  const total = carrito.reduce((sum, item) => {
    const precioTexto = precioPokemon(item.name);
    const precioNumero = parseInt(precioTexto.replace(/\./g, ""));
    return sum + precioNumero;
  }, 0);

  const [modal, setModal] = useState(false);

  const [mensaje, setMensaje] = useState("");

  const handlePago = async () => {
    setModal(true);
    setMensaje("Procesando pago");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMensaje("Procesando pago.");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMensaje("Procesando pago..");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMensaje("Procesando pago...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMensaje("✔ ¡Pago éxitoso!");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setModal(false);
    dispatch(resetearCarrito());
  };

  return (
    <main>
      <h1 className="pokemonSolid margin-Y">Carrito</h1>
      <div className="text-center">
        <div className="contenedor-responsive-carrito">
          <div className="col card padding">
            <h2 className="margin-Y">🛒 Resumen del pedido</h2>
            <div className="contenedor">
              {carrito.map((item) => {
                return <PokemonCard key={item.name} pokemonData={item} />;
              })}
            </div>
          </div>
          <div class="col card">
            <h2 className="margin-Y">💳 Información de pago</h2>
            <form className="padding" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="nombre" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="direccion" className="form-label">
                  Dirección de entrega
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="tarjeta" className="form-label">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tarjeta"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="vencimiento" className="form-label">
                    Vencimiento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="vencimiento"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg"
                  onClick={() => handlePago()}
                >
                  ✅ Realizar Pago - ₽ {total.toLocaleString("es-AR")}
                </button>
                <Link to={"/listado"}>
                  <button type="button" className="btn btn-outline-secondary">
                    ← Volver al listado
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        {carrito.length >= 1 && modal ? (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h2>{mensaje}</h2>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default Carrito;
