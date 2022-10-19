import React from "react";
import { PokemonCard } from "./PokemonCard";
import { NavBar } from "./Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, getByType, filterAsc, filterDesc, filterAttack, filterCreated, getPokemons } from "../redux/actions/actions";
import styled from "styled-components";


const Buttons3 = styled.button`
border: none;
background-color: transparent;
border: 1px solid white;
padding: 0.5rem;
color: white;
margin: 0 10px;
cursor: pointer;
margin-top: 15px;
&:hover {
    background-color: white;
    color: black;
}
`

const Container = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
width: 90rem;
margin: 0 auto;
flex-gap: 1rem;
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 3rem;
width: 100%
background-color: red;
margin-top: 30px;
margin-bottom: 20px;
`
const Aside = styled.aside`
margin-top: 55px;
margin-left: 50px
`
const Select = styled.select`
color: white;
font-size: 20px;
font-weight: bold;
background-color: transparent;
border: none;
border-bottom: solid 1px white;
`
const Parraph = styled.p`
text-transform: uppercase;
color: white;
text-align: left;
font-size: 20px;
`
const Options1 = styled.option`
background-color: transparent;
border:none;
color: black;
`
const Options2 = styled.option`
color: black;
`
const Fondo = styled.main`
background-image: url("./img/depositphotos_345626668-stock-illustration-pokeball-icon-sign-seamless-pattern")
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

    const orderBy = (e)=>{
        e.preventDefault();
        const value = e.target.value;
        if(value === "ascendent"){
            dispatch(filterAsc(value))
        }else if(value === "descendent"){
            dispatch(filterDesc(value))
        }else{
            dispatch(filterAttack(value))
        }
    }
    const orderCreated = (e)=>{
        e.preventDefault()
        const creado = e.target.value;
        dispatch(filterCreated(creado))
    }

    const handleRefresh =()=>{
        dispatch(getPokemons())
    }
    return (
        <main>
            <h1>Pokemons</h1>
            <Container>
            <Aside>
                <Parraph>Select by type</Parraph>
                <Select name="type" key={types.id} onChange={(e)=> selectType(e)}>
                    <Options2 value="default" >Select Type</Options2>
                    {types.map(el => <Options1 value={el.name} key={el.id}>{el.name}
                    </Options1>)}
                </Select>
                <Parraph>Order your pokemons</Parraph>
                <Select name="order" onChange={(e)=> orderBy(e)}>
                    <Options2 value="default" >Select order</Options2>
                    <Options1 value="ascendent">A to Z</Options1>
                    <Options1 value="descendent">Z to A</Options1>
                    <Options1 value="attack">Attack</Options1>
                </Select>
                <Parraph>Order by exist or created</Parraph>
                <Select name="orderBy" onChange={(e)=> orderCreated(e)}>
                    <Options2 value="default" >Select order</Options2>
                    <Options1 value="exist">Exist</Options1>
                    <Options1 value="created">Created</Options1>
                </Select>
                <div>

                <Buttons3 onClick={handleRefresh}>Refresh</Buttons3>
                </div>
            </Aside>
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