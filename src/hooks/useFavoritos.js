import { useDispatch, useSelector } from "react-redux";
import { toggleFavoritos } from "../store/pokemon";

export const useFavoritos = () =>{
    const dispatch = useDispatch();
    const {favoritos} = useSelector((state) => state.pokemon);

    const handleFavoritos = (pokemonData) => {
        const id = pokemonData.url?.split("/")[6];

        const pokemonId = {
          ...pokemonData,
          id: id,
        };
        dispatch(toggleFavoritos(pokemonId));
      };
        const esFavorito = (id) =>{
            return favoritos.some(fav => fav.id == id);
        };

    return {handleFavoritos, esFavorito, favoritos}
}