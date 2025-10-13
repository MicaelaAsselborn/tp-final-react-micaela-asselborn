import { useDispatch, useSelector } from "react-redux";
import { toggleFavoritos } from "../store/pokemon.js";

export const useFavoritos = () =>{
    const dispatch = useDispatch();
    const {favoritos} = useSelector((state) => state.pokemon);

    //Funcion que envia la info del Pokemon para despues agregarlo o quitarlo de favoritos
    const handleFavoritos = (pokemonData) => {
        dispatch(toggleFavoritos(pokemonData));
    };

    const esFavorito = (id) =>{
        //Verifica si el ID ya esta en favoritos (Esto es para el color del icono y el texto del botón)
        return favoritos.some(fav => fav.id == id); //Uno es un string y el otro un number, por eso es una comparación no estricta
    };

    return {handleFavoritos, esFavorito, favoritos}
}