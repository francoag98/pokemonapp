import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getType } from "../redux/actions/actions";


export const Form = ()=>{
    const [input, setInput] = useState({
        name: "",
        hp:0,
        attack: 0,
        defense:0 ,
        speed: 0,
        height: 0,
        weight:0 ,
        img: "",
        type:[],
    })
    const types = useSelector(state=> state.types)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getType())
    },[])

    const handleChange = (e)=>{
        const value = e.target.value;
        const property = e.target.name;
        setInput({...input, [property]: value})
    }
    const handleSelect = (e)=>{
        e.preventDefault();
        setInput({...input, type: [...input.type, e.target.value ]})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/pokemons", input)
        dispatch(createPokemon())
    }
    return (
        <form>
            <label htmlFor="name">name</label>
            <input type="text" name="name" value={input.name} onChange={(e)=> handleChange(e)}/>

            <label htmlFor="hp">hp</label>
            <input type="number" name="hp" value={input.hp} onChange={(e)=> handleChange(e)}/>

            <label htmlFor="attack">attack</label>
            <input type="number" name="attack" value={input.attack}  onChange={(e)=> handleChange(e)}/>

            <label htmlFor="defense">defense</label>
            <input type="number" name="defense" value={input.defense}  onChange={(e)=> handleChange(e)}/>

            <label htmlFor="speed">speed</label>
            <input type="number" name="speed" value={input.speed}  onChange={(e)=> handleChange(e)}/>

            <label htmlFor="height">height</label>
            <input type="number" name="height" value={input.height} onChange={(e)=> handleChange(e)}/>

            <label htmlFor="weight">weight</label>
            <input type="number" name="weight" value={input.weight}  onChange={(e)=> handleChange(e)}/>

            <label htmlFor="img">img</label>
            <input type="text" name="img" value={input.img}  onChange={(e)=> handleChange(e)}/>

            <label htmlFor="type">type</label>
            <select name="type" value={input.type} key={types.id} onChange={(e)=> handleSelect(e)}>{types.map(type =><option key={type.id}> {type.name}</option> )}</select>
            <p>Type Assigned: {input.type.join(", ")} </p>
        </form>
    )
}