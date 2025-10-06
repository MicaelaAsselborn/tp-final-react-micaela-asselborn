function PokemonCard({pokemonData}){
    if(!pokemonData){
        console.log('pokemonData:', pokemonData); // ← Agrega esto
        console.log('sprites:', pokemonData?.sprites); // ← Y esto
        return(<h1>Cargando Pokemón...</h1>)
        
    }
    return(
        <div className="card">
            <img src={pokemonData.sprites.front_default} className="card-img-top" alt={pokemonData.name} />
            <div className="card-body">
                <h5 className="card-title">{pokemonData.name}</h5>
                <p className="card-text">ID: {pokemonData.id}</p>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
    )
}

export default PokemonCard 