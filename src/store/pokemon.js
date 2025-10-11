import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: [],
    paginaActual: 1,
    favoritos: JSON.parse(localStorage.getItem('pokemonesFavoritos')) || []
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        agregarPokemones: (state, action) =>{
            state.lista = [...state.lista, ...action.payload] //Agrega un GRUPO de pokemones a la lista
        },
        resetearPokemones: (state) =>{
            state.lista = [] //Vacia la lista (Para que la nueva pagina este vacia)
        },
        cambiarPagina: (state, action)=>{
            state.paginaActual = action.payload //Cambia el valor de PaginaActual
        },
        toggleFavoritos: (state, action) =>{
            const pokemon = action.payload; //Objeto recibido del dispatch

            state.favoritos = state.favoritos.filter(fav => fav && fav.id); // Limpia de la lista pokemones corruptos
            const esFavorito = state.favoritos.some(fav => fav.id === pokemon.id); //Verifica si el ID ya esta en favoritos
            if (esFavorito) {
                state.favoritos = state.favoritos.filter(fav => fav.id !== pokemon.id); //Si ya esta, lo quita
            } else {
                state.favoritos = [...state.favoritos, pokemon]; //Si no esta, lo agrega
            }
            localStorage.setItem('pokemonesFavoritos', JSON.stringify(state.favoritos)); //Guarda favoritos en local.storage
        }
    }
});

export const {agregarPokemones, resetearPokemones, cambiarPagina, toggleFavoritos} = pokemonSlice.actions;

export default pokemonSlice.reducer