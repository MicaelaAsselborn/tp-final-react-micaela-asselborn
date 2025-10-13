import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/carrito";

export const useCarrito = () => {
    const dispatch = useDispatch();
    const {carrito} = useSelector((state) => state.carrito);

    //Funcion que envia la info del Pokemon para despues agregarlo o quitarlo del carrito
    const handleCarrito = (pokemonData) => {

        dispatch(toggleCart(pokemonData));
    };

    const enCarrito = (id) => {
        //Verifica si el ID ya esta en carrito (Esto es para el color del icono y texto del botón)
        return carrito.some(item => item.id == id ) //Uno es un string y el otro un number, por eso es una comparación no estricta
    }
    return {carrito, handleCarrito, enCarrito}
}