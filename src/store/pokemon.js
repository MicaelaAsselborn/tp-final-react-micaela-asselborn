import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: [],
    cargando: false,
    error: null
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        empezarCarga: (state) =>{
            state.cargando = true;
            state.error = null;
        },

        cargaExitosa: (state) =>{
            state.cargando = false;
            state.error = null;
        },

        cargaFallida: (state, action) =>{
            state.cargando = false;
            state.error = action.payload;
        },
        agregarPokemones: (state, action) =>{
            state.lista = [...state.lista, ...action.payload]
        },
        resetearPokemones: (state) =>{
            state.lista = []
        }
    }
});

export const {empezarCarga, cargaExitosa, cargaFallida, agregarPokemones, resetearPokemones} = pokemonSlice.actions;

export default pokemonSlice.reducer