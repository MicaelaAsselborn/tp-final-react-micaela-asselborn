import { useState, useEffect } from "react";

function PokemonList(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        const fetchPokemon = async () =>{
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
                const data = await response.json;
            } catch(error){
                console.error("Error: ", error)
            }
        };
        fetchPokemon();
    }, []);

    return
}

export default PokemonList



