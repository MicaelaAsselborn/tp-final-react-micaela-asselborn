import Favoritos from "../components/Favoritos"

function Home(){
    return(
        <main>
            <section>
                <h1>¡Bienvenidos PokeMarket, tu mercado negro Pokemón de confianza!</h1>
                <p>¿Pokemones muy dificiles de atrapar? ¿Shinys muy exclusivos? ¿Evasión de impuestos?</p>
                <p>¡No te preocupes más!</p>
                <p>En el Mercado Negro Pokemon puedes encontrar y adquirir facilmente todos los pokemons que necesites sin esfuerzo por un módico precio.</p>
            </section>
            <hr/>
            <section>
                <h2>La sección de favoritos ❤</h2>
                <p>¿No estas seguro de que comprar entre tan maravillosa colección? ¡Agrega los que más te gustan a favoritos para que puedas encontrarlos facilmente después!</p>
            </section>
            <Favoritos />
        </main>
    )
}

export default Home