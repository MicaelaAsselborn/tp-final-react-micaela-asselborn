import { useState, useEffect } from "react";

function PokemonList(){

    const [pokemones, setPokemones] = useState([]);

    useEffect(() =>{
        const fetchPokemones = async () =>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemones(data.results)
        };
        fetchPokemones();
    }, [])

    return
}

export default PokemonList



