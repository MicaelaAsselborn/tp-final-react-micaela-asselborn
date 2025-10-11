import { useDispatch, useSelector } from "react-redux";
import { toggleFavoritos } from "../store/Pokemon.js";

export const useFavoritos = () =>{
    const dispatch = useDispatch();
    const {favoritos} = useSelector((state) => state.pokemon);

    //Funcion que envia la info del Pokemon para despues agregarlo o quitarlo de favoritos
    const handleFavoritos = (pokemonData) => {
        dispatch(toggleFavoritos(pokemonData));
    };

    const esFavorito = (id) =>{
        //Verifica si el ID ya esta en favoritos (Esto es para el color del icono)
        return favoritos.some(fav => fav.id == id); 
    };

    return {handleFavoritos, esFavorito, favoritos}
}