import React from "react";
import { PokemonCard } from "./PokemonCard";
import { NavBar } from "./Nav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType, getByType } from "../redux/actions/actions";



export const Pokemons = (props)=>{
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const selectType =(e)=>{
        const type =e.target.value
        const result = getByType(type)
        dispatch(result)
    }

    useEffect(()=>{
        dispatch(getType())
    },[])


    return (
        <main>
            <h1>Pokemons</h1>
            <aside>
                <p>Select by type</p>
                <select name="type" key={types.id} onChange={(e)=> selectType(e)}>{types.map(el => <option key={el.id}>{el.name}</option>)}</select>
            </aside>
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
        </main>
    )
}