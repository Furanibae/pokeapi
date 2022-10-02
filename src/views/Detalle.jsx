import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carta from '../components/Carta';


function Detalle(){
    const { name } = useParams();
    const [poke, setPoke] = useState({});
    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPoke = async (name) => {
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) =>({
         name:stat.stat.name,
         base: stat.base_stat   
        }));
        const types = data.types.map((elem) => elem.type.name).join(" ");
        setPoke({name, stats, src, types});
       
        
    };
    
    useEffect(() => {
        getPoke(name);
    }, [name]);
    
    return (

   <Carta poke={poke}/>

)
}

export default Detalle;