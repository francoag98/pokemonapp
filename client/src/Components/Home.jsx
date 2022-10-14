import React from "react";
import  {Pokemons}  from "./Pokemons";
import { Paginado}  from "./Paginado";
import { useState } from "react";
import { useSelector} from "react-redux";



export const Home = ()=>{

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const pokemons = useSelector(state => state.pokemons)

    const lastIndex = currentPage * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const currentPokemon = pokemons.slice(firstIndex, lastIndex);

    return (
        <div>
            <Pokemons pokemons={currentPokemon}/>
            <Paginado
             totalPokemons={pokemons.length}
             pokemonsPerPage={pokemonsPerPage}
             setCurrentPage={setCurrentPage}
             currentPage={currentPage}
             />
        </div>
    )
}