import React from "react";
import { PokemonCard } from "./PokemonCard";
import { NavBar } from "./Nav";


export const Pokemons = (props)=>{
    return (
        <div>
            <h1>Pokemons</h1>
            <div>
                <div>
                <NavBar/>
                </div>
                {
                    props.pokemons && props.pokemons.map(pokemon => (
                        <PokemonCard
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.type}
                        img={pokemon.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}