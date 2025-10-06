import {useEffect, useState} from "react";

function PokemonList(){

    const [pokemonData, setpokemonData] = useState([]);
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    const fetchPokemons = async (id) =>{
        try {
            const response = await fetch(`${BASE_URL}${id}`);
        const data = response.json();
        console.log(data)
        setpokemonData(data);
        } catch  (error){
            console.error("Error: ", error);
        }
    }

    useEffect(() =>{
        fetchPokemons(1)
    }, [])

    return
}

export default PokemonList



