import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Listado(){

    const [pokemonData, setpokemonData] = useState(null);
            const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
        
            const fetchPokemons = async (id) =>{
                try {
                    const response = await fetch(`${BASE_URL}${id}`);
                    const data = await response.json();
                    console.log(data)
                    setpokemonData(data);
                } catch  (error){
                    console.error("Error: ", error);
                }
            }
        
            useEffect(() =>{
                fetchPokemons(144)
            }, [])

    return(
        <main>
            <h1>📝 Listado</h1>
            <p>Acá podes navegar y encontrar tus pokemones favoritos.</p>
            <div>
                <PokemonCard pokemonData={pokemonData}/>
            </div>
        </main>
    )
}

export default Listado