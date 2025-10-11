import { useDispatch, useSelector } from "react-redux";
import { toggleFavoritos } from "../store/Pokemon.js";

export const useFavoritos = () =>{
    const dispatch = useDispatch();
    const {favoritos} = useSelector((state) => state.pokemon);

    const handleFavoritos = (pokemonData) => {
        dispatch(toggleFavoritos(pokemonData));
    };

    const esFavorito = (id) =>{
        return favoritos.some(fav => fav.id == id);
    };

    return {handleFavoritos, esFavorito, favoritos}
}