import React from "react";
import { PokemonCard } from "./PokemonCard";


export const Pokemons = (props)=>{
    console.log(props);
    return (
        <div>
            <h1>Pokemons</h1>
            <div>
                {
                    props.pokemons ? props.pokemons.map(pokemon => (
                        <PokemonCard
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.type}
                        img={pokemon.img}
                        />
                    )) : <h3>Loading...</h3>
                }
            </div>
        </div>
    )
}