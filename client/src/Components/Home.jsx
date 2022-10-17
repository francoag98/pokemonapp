import React from "react";
import  {Pokemons}  from "./Pokemons";
import { Paginado}  from "./Paginado";
import { useState } from "react";
import { useSelector} from "react-redux";
import styled from "styled-components";

const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Home = ()=>{

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const pokemons = useSelector(state => state.pokemons)

    const lastIndex = currentPage * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const currentPokemon = pokemons.slice(firstIndex, lastIndex);

    return (
        <Flex>
            <div>
                <Pokemons pokemons={currentPokemon}/>
            </div>

            <div>
                <Paginado
                totalPokemons={pokemons.length}
                pokemonsPerPage={pokemonsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
            </div>
        </Flex>
    )
}