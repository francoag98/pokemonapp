import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemon } from "../redux/actions/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";


const NewDiv2 = styled.div`
padding: 0.2rem;
max-width: 100%;
width: 50rem;
border: 2px solid rgba(244,159,88,0.82);
box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
-webkit-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
-moz-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
background-color: #fff0c9;
`

const DivFlexx = styled.div`
display:flex;
gap: 3rem;
text-align: left;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
`

const Background = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
height: 100vh;
background: rgb(241,207,179);
background: radial-gradient(circle, rgba(241,207,179,1) 0%, rgba(247,245,222,1) 100%);
`
const Title = styled.h1`
color: #ef7f45;
margin: 0;
font-size: 7rem;
`
const Image2 = styled.img`
width: 20rem;
height: 20rem;
object-fit: contain;
margin: 0;
`

const NewP = styled.p`
margin: 0;
font-size: 2rem;
text-transform: uppercase;
color: #ef7f45;
font-weight: bold;
`
const NewPButton = styled.p`
border: 2px solid #ef7f45;
margin-top: 2rem;
padding: 1rem;
color: #ef7f45;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
&:hover {
    background-color: #ef7f45;
    color: white;
    transition: 0.8s
}
`
const Linked = styled(Link)`
text-decoration: none;
`
export const PokemonDetail = (props)=>{
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon)

    useEffect(()=>{
        dispatch(getPokemon(id))
        return ()=> {
            dispatch(clearDetail())
        }
    },[dispatch, id]);

    
    return (
        <Background>
            <NewDiv2>
                <Title>{pokemon.name}</Title>
                <NewP>N° de Pokemon: {pokemon.id}</NewP>
                <Image2 src={pokemon.img} alt="pokemon-img" />
                <DivFlexx>
                    <div>

                        <NewP>HP: {pokemon.hp}</NewP>
                        <NewP>ATTACK: {pokemon.attack}</NewP>
                        <NewP>DEFENSE: {pokemon.defense}</NewP>
                    </div>
                    <div>

                    <NewP>SPEED: {pokemon.speed}</NewP>
                    <NewP>HEIGHT: {pokemon.height}</NewP>
                    <NewP>WEIGHT: {pokemon.weight}</NewP>
                    </div>
                </DivFlexx>
            </NewDiv2>
            <Linked to="/Home">
                <NewPButton>Back to Home</NewPButton>
            </Linked>
        </Background>
    )
}