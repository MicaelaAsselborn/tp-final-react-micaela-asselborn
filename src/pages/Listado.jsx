import PokemonList from "../components/PokemonList"

function Listado(){
    return(
        <main>
            <h1>📝 Listado</h1>
            <p>Acá podes navegar y encontrar tus pokemones favoritos.</p>
            <div>
                <PokemonList />
            </div>
        </main>
    )
}

export default Listado