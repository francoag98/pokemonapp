import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetailPokemon, getPokemon } from "../redux/actions/actions";

export const PokemonDetail = (props)=>{
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon)

    useEffect(()=>{
        dispatch(getPokemon(id))
        return ()=>{
            dispatch(clearDetailPokemon())
        }
    },[dispatch, id]);

    
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt="pokemon-img" />
            <div>
            <p>HP: {pokemon.hp}</p>
            <p>ATTACK: {pokemon.attack}</p>
            <p>DEFENSE: {pokemon.defense}</p>
            <p>SPEED: {pokemon.speed}</p>
            <p>HEIGHT: {pokemon.height}</p>
            <p>WEIGHT: {pokemon.weight}</p>
            </div>

        </div>
    )
}