import React from "react";
import  {Pokemons}  from "./Pokemons";
import { Paginado}  from "./Paginado";
import { useState } from "react";
import { useSelector} from "react-redux";
import styled from "styled-components";

const Flex = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: rgb(241,207,179);
background: radial-gradient(circle, rgba(241,207,179,1) 0%, rgba(247,245,222,1) 100%);
`
const Margin = styled.div`
margin-right: 24.7rem;
margin-bottom: 3rem;

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

            <Margin>
                <Paginado
                totalPokemons={pokemons.length}
                pokemonsPerPage={pokemonsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
            </Margin>
        </Flex>
    )
}