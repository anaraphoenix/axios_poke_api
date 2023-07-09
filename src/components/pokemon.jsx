import axios from 'axios';
import React, {useEffect, useState} from 'react';



const Pokemon = ({pokemon, setPokemon}) => {
    const [pokeApi, setPokeApi] = useState(false);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{
                setPokemon(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [setPokemon])
    
    const handleClick = (event) => {
        if (pokeApi) {
        setPokeApi(false);
        } else {
        setPokeApi(true);
    }
    }
    const pokeMon = () => {
        if(pokemon.name !== ""){
    return (
        <div className="App">
        <button onClick={handleClick}>
        Fetch Pokemon</button>
        <ul>
            {pokemon.map((pmon, index) => {
            return(
            <li key={index}>{pmon.name}</li>
            )
        })}
        </ul>
        
        </div>
    )
        } else {
            return (
            <h1>No Pokemon Found</h1>
        )
        }
        }
            return (
            <div>
                {pokeMon()}
            </div>
        )
    };
    

export default Pokemon;
