import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Listado(){

    const [pokemonData, setpokemonData] = useState([]);

            const [offset, setoffset] = useState(0);

            const cargarMas = () =>{
                setoffset((prevoffset) => (prevoffset + 20))
            }

            useEffect(() =>{
                const fetchPokemons = async () =>{
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
                    const data = await response.json();
                    console.log(data.results)
                    setpokemonData(prev => [...prev, ...data.results]);
                } catch  (error){
                    console.error("Error: ", error);
                }
            }
                fetchPokemons();
            }, [offset])

    return(
        <main>
            <h1>📝 Listado</h1>
            <p>Acá podes navegar y encontrar tus pokemones favoritos.</p>
            <div className="row padding-bottom">
                <div className="contenedor">
                    {pokemonData.length && pokemonData.map((pokemon) =>{
                        return(
                            <PokemonCard key={pokemon.name} pokemonData={pokemon}/>
                        )
                    })}
                </div>
            </div>
            <button className="btn btn-primary" onClick={cargarMas}>Cargar más</button>
        </main>
    )
}

export default Listado