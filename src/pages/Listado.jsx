import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Listado(){

    const [pokemonData, setpokemonData] = useState([]);
            const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
        
            const fetchPokemons = async (id) =>{
                try {
                    const response = await fetch(`${BASE_URL}${id}`);
                    const data = await response.json();
                    console.log(data)
                    setpokemonData((prevpokemonData) => [...prevpokemonData, data]);
                } catch  (error){
                    console.error("Error: ", error);
                }
            }

            useEffect(() =>{
                const fetchAllPokemons = () =>{
                for (let i = 0; i < 1025; i++){
                    fetchPokemons(i)
                }
            }
                fetchAllPokemons();
            }, [])

    return(
        <main>
            <h1>📝 Listado</h1>
            <p>Acá podes navegar y encontrar tus pokemones favoritos.</p>
            <div className="row">
                <div className="contenedor">
                    {pokemonData.map((pokemon) =>{
                        return(
                            <PokemonCard key={pokemon.id} pokemonData={pokemon}/>
                        )
                        
                    })}
                </div>
                
            </div>
        </main>
    )
}

export default Listado