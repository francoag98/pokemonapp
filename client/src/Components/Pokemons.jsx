import React from "react";
import { PokemonCard } from "./PokemonCard";
import { NavBar } from "./Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, getByType } from "../redux/actions/actions";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
flex-basis: 70% 30%;
width: 90rem;
margin: 0 auto;
flex-gap: 1rem;
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
width: 100%
background-color: red;
margin-bottom: 20px;
`


export const Pokemons = (props)=>{
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const selectType =(e)=>{
        const type =e.target.value
        dispatch(getByType(type))
    }

    useEffect(()=>{
        dispatch(getType())
    },[])


    return (
        <main>
            <h1>Pokemons</h1>
            <Container>
            <aside>
                <p>Select by type</p>
                <select name="type" key={types.id} onChange={(e)=> selectType(e)}>
                    <option value="default" >Select Type</option>
                    {types.map(el => <option value={el.name} key={el.id}>{el.name}
                    </option>)}
                </select>
            </aside>
            <div>
                <div>
                <NavBar/>
                </div>
                <GridContainer>
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
                </GridContainer>
                </div>
            </Container>
        </main>
    )
}