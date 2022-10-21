import React from "react";
import { PokemonCard } from "./PokemonCard";
import { NavBar } from "./Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, getByType, filterAsc, filterDesc, filterHighAttack, filterCreated, filterLowAttack, refresh } from "../redux/actions/actions";
import styled from "styled-components";
import logo from "../img/International_Pokémon_logo.svg.png"


const Buttons3 = styled.button`
border: none;
background-color: transparent;
border: 2px solid #ef7f45;
padding: 0.5rem;
widht: 100%;
color:#ef7f45;
margin: 0 10px;
cursor: pointer;
margin-top: 2rem;
font-weight: bold;
font-size: 1rem;
&:hover {
    background-color: #ef7f45;
    color: white;
    transition: 0.3s;
}
`
const Responsive = styled.main`
max-widht: 100%;
widht: 100%;
`
const Container = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: center;
gap: 10rem;
max-widht: 90rem;
width: 100%;
margin: 0 auto;
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 3rem;
width: 100%
background-color: red;
margin-top: 3rem;
margin-bottom: 2rem;
`
const Aside = styled.aside`
flex-basis: 15rem;
margin-top: 6rem;
`
const Select = styled.select`
color:#ef7f45;
font-size: 20px;
font-weight: bold;
background-color: transparent;
border: none;
border-bottom: solid 2px #ef7f45;
width: 100%;
`
const Parraph = styled.p`
text-transform: uppercase;
text-align: left;
font-size: 20px;
color:#ef7f45;
font-weight: bold;
`
const Options1 = styled.option`
background-color: transparent;
border:none;
color: #ef7f45;
`
const Options2 = styled.option`
color: #ef7f45;
`

const Imagen = styled.img`
max-width: 100%;
width: 40rem;
height: 8rem;
padding: 2rem;
`
export const Pokemons = (props)=>{
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const selectType =(e)=>{
        const type =e.target.value
        if(type === "def"){
            dispatch(refresh())
        }
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
        }else if(value === "def"){
            dispatch(refresh(value))
        }else if(value === "highAttack"){
            dispatch(filterHighAttack(value))

        }else{
            dispatch(filterLowAttack(value))
        }
    }
    const orderCreated = (e)=>{
        e.preventDefault()
        const creado = e.target.value;
        dispatch(filterCreated(creado))
    }
    const refr = ()=>{
        dispatch(refresh())
    }
    return (
        <Responsive>
            <Imagen src={logo} alt="logo-pokemon"/>
            <Container>
            <Aside>
                <Parraph>Select by type</Parraph>
                <Select name="type" key={types.id} onChange={(e)=> selectType(e)}>
                    <Options2 value="def" >--All--</Options2>
                    {types.map(el => <Options1 value={el.name} key={el.id}>{el.name}
                    </Options1>)}
                </Select>
                <Parraph>Order by alphabet</Parraph>
                <Select name="order" onChange={(e)=> orderBy(e)}>
                    <Options2 value="default" >Normal order</Options2>
                    <Options1 value="ascendent">A to Z</Options1>
                    <Options1 value="descendent">Z to A</Options1>
                    <Options1 value="highAttack">+ Attack</Options1>
                    <Options1 value="lowAttack">- Attack</Options1>
                </Select>
                <Parraph>Order by creation</Parraph>
                <Select name="orderBy" onChange={(e)=> orderCreated(e)}>
                    <Options2 value="default" >Select order</Options2>
                    <Options1 value="exist">Exist</Options1>
                    <Options1 value="created">Created</Options1>
                </Select>
                <div>

                <Buttons3 onClick={()=> refr()}>Refresh</Buttons3>
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
        </Responsive>
    )
}