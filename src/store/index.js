import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon.js"
import carritoReducer from "./carrito.js"

export const store = configureStore({

    reducer: {
        pokemon: pokemonReducer,
        carrito: carritoReducer
    }
})