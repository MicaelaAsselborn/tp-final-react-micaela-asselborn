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
            const pokemon = action.payload;
            state.favoritos = state.favoritos.filter(fav => fav && fav.id);
            const esFavorito = state.favoritos.some(fav => fav.id === pokemon.id);
            if (esFavorito) {
                state.favoritos = state.favoritos.filter(fav => fav.id !== pokemon.id);
            } else {
                state.favoritos.push(pokemon);
            }
            localStorage.setItem('pokemonesFavoritos', JSON.stringify(state.favoritos));
        }
    }
});

export const {empezarCarga, cargaExitosa, cargaFallida, agregarPokemones, resetearPokemones, cambiarPagina, toggleFavoritos} = pokemonSlice.actions;

export default pokemonSlice.reducer