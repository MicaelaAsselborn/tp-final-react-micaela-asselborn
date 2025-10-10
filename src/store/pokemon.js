import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: [],
    cargando: false,
    error: null,
    paginaActual: 1,
    favoritos: JSON.parse(localStorage.getItem('pokemonesFavoritos')) || []
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
        },
        cambiarPagina: (state, action)=>{
            state.paginaActual = action.payload
        },
        toggleFavoritos: (state, action) =>{
            const pokemonId = action.payload;
            if (state.favoritos.includes(pokemonId)) {
                state.favoritos = state.favoritos.filter(id => id !== pokemonId);
            } else {
                state.favoritos.push(pokemonId);
            }
            localStorage.setItem('pokemonesFavoritos', JSON.stringify(state.favoritos));
        }
    }
});

export const {empezarCarga, cargaExitosa, cargaFallida, agregarPokemones, resetearPokemones, cambiarPagina, toggleFavoritos} = pokemonSlice.actions;

export default pokemonSlice.reducer