import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon.js"

export const store = configureStore({

    reducer: {
        pokemon: pokemonReducer
    }
})