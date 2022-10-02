import { useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";


function Pokemones(){
    //Estado que captura la api
    const [ pokemon, setPokemon ] = useState([]);
   //Estado que captura el pokemon que quiero ver
    const [ pokeSelect , setPokemonSelect ] = useState("");
    const navigate = useNavigate();

    const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
    
    const getDatosPokemon = async()=>{
        const res = await fetch(baseUrl);
        const data = await res.json();
        setPokemon(data.results);

        
    }
    
    useEffect(()=> {
        getDatosPokemon();
    },[]);
console.log(pokeSelect)
    const irPoke = ()=>{
        if(pokeSelect)navigate(`/pokemones/${pokeSelect}`)
    }
    

    return(
        <div className="pkmns">
        <h1>Selecciona un Pokemón</h1>
        <select
            value={pokeSelect}
            className="form-select"
            onChange= {(e) =>setPokemonSelect(e.target.value)}>

        <option value="" disabled>
                Pokemones
            </option>
            {pokemon.map((elem, i) =>(
            <option key={i} value={elem.name}>
                  {elem.name}  
                </option>
            ))};

        </select>
        <button className="btn btn-dark" onClick={irPoke}>Ver detalle</button>
        </div>
    )
}

export default Pokemones;