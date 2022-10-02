import pikachu from "../assets/pikachu.png"

function Home(){
    return(
        <div className="home">
        <h1>Bienvenido maestro Pokemón</h1>
        <img className="pikachu" src={pikachu} alt="pikachu" />
        </div>
    )
}

export default Home;