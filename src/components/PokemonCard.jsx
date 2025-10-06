import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function PokemonCard({pokemonData}){
    const [favorite,setfavorite] = useState(false)
    const isFavorite = ()=>{
        setfavorite(!favorite);
    }

    if(!pokemonData){
        console.log('pokemonData:', pokemonData); // ← Agrega esto
        console.log('sprites:', pokemonData?.sprites); // ← Y esto
        return(<h1>Cargando Pokemón...</h1>)
    }
    return(
        <div className="card text-center">
            <FontAwesomeIcon icon={faHeart} className={`corazon ${favorite? "red": "white"}`} onClick={isFavorite}/>
            <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name} />
            <div className="card-body">
                <h2 className="card-title">{pokemonData.name}</h2>
                <p className="card-text">ID: {pokemonData.id}</p>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
    )
}

export default PokemonCard 