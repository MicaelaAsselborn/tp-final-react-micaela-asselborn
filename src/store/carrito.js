import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carrito: JSON.parse(localStorage.getItem('pokemonesCarrito')) || []
}

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers:{
        resetearCarrito: (state) => {
            state.carrito = [] //Vacia el carrito
            localStorage.removeItem("pokemonesCarrito"); //Vacia el localStorage
        },
        toggleCart: (state, action) =>{
            const pokemon = action.payload //Objeto recibido del dispatch
            state.carrito = state.carrito.filter(item => item && item.id) //Limpia la lista de pokemones corruptos
            const enCarrito = state.carrito.some(item => item.id === pokemon.id) //Verifica si el ID esta ya en el carrito
            if(enCarrito){
                state.carrito = state.carrito.filter(item => item.id !== pokemon.id) //Si esta, lo quita
            } else {
                state.carrito = [...state.carrito, pokemon] //Si no, lo agrega
            }
            localStorage.setItem("pokemonesCarrito", JSON.stringify(state.carrito))//Guarda el resultado en el localStorage
        }
    }
})

export const {resetearCarrito, toggleCart} = carritoSlice.actions;

export default carritoSlice.reducer;