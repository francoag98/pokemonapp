import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getType } from "../redux/actions/actions";
import { Link } from "react-router-dom";


export const Form = ()=>{
    const [input, setInput] = useState({
        name: "",
        hp:1,
        attack: 1,
        defense:1 ,
        speed: 1,
        height: 1,
        weight:1 ,
        img: "",
        type:[],
    })
    const types = useSelector(state=> state.types)
    const dispatch = useDispatch();
    const [error, setError] = useState({})
    const [change, setChange] = useState({
        name: false,
        hp:false,
        attack: false,
        defense:false ,
        speed: false,
        height: false,
        weight:false ,
        img: false,
        type:false,
    })
    useEffect(()=>{
        dispatch(getType())
    },[])

    useEffect(()=>{
        validation()
    },[input])

    const handleChange = (e)=>{
        const value = e.target.value;
        const property = e.target.name;
        setInput({...input, [property]: value})
        setChange({...change, [property]:true})
    }

    const validation = (submit)=>{
        const errorCopy = {...error}
        if(change.name || submit){
            if(!input.name || input.name === ""){
                errorCopy.name = "Name is required"
            }else{
                delete errorCopy.name;
            }
        }
        if(change.hp || submit){
            if(!input.hp || input.hp < 2){
                errorCopy.hp = "Status is required"
            }else{
                delete errorCopy.hp;
            }
        }

        if(change.attack || submit){
            if(!input.attack || input.attack < 2){
                errorCopy.attack = "Status is required"
            }else{
                delete errorCopy.attack;
            }
        }

        if(change.defense || submit){
            if(!input.defense || input.defense < 2){
                errorCopy.defense = "Status is required"
            }else{
                delete errorCopy.defense;
            }
        }
        if(change.speed || submit){
            if(!input.speed || input.speed < 2){
                errorCopy.speed = "Status is required"
            }else{
                delete errorCopy.speed;
            }
        }

        if(change.height || submit){
            if(!input.height || input.height < 2){
                errorCopy.height = "Status is required"
            }else{
                delete errorCopy.height;
            }
        }
        if(change.weight || submit){
            if(!input.weight || input.weight < 2){
                errorCopy.weight = "Status is required"
            }else{
                delete errorCopy.weight;
            }
        }
        if(change.img || submit){
            if(!input.img || input.img === ""){
                errorCopy.img = "Image is required"
            }else{
                delete errorCopy.img;
            }
        }
        if(change.type || submit){
            if(!input.type || input.type.length === 0){
                errorCopy.type = "Choose type"
            }else{
                delete errorCopy.type;
            }
        }

        if(Object.keys(errorCopy).length > 0){
            setError(errorCopy);
            return false;
        }else{
            setError({});
            return true;
        }
    }

    const handleSelect = (e)=>{
        e.preventDefault();
        setInput({...input, type: [...input.type, e.target.value ]})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(validation(true)){
            // await axios.post("http://localhost:3001/pokemons", input)
            // dispatch(createPokemon())
            alert("Pokemon Created")
        }else {
            alert("Complete form")
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" value={input.name} onChange={(e)=> handleChange(e)}/>
            {error.name && <p>{error.name}</p>}

            <label htmlFor="hp">hp: {input.hp}</label>
            <input type="range" name="hp" value={input.hp} onChange={(e)=> handleChange(e)}/>
            {error.hp && <p>{error.hp}</p>}

            <label htmlFor="attack">attack</label>
            <input type="range" name="attack" max="320" value={input.attack}  onChange={(e)=> handleChange(e)}/>
            {error.attack && <p>{error.attack}</p>}

            <label htmlFor="defense">defense</label>
            <input type="range" name="defense" max="320" value={input.defense}  onChange={(e)=> handleChange(e)}/>
            {error.defense && <p>{error.defense}</p>}

            <label htmlFor="speed">speed</label>
            <input type="range" name="speed" max="320" value={input.speed}  onChange={(e)=> handleChange(e)}/>
            {error.defense && <p>{error.defense}</p>}

            <label htmlFor="height">height</label>
            <input type="range" name="height" max="320" value={input.height} onChange={(e)=> handleChange(e)}/>
            {error.height && <p>{error.height}</p>}

            <label htmlFor="weight">weight</label>
            <input type="range" name="weight" max="320"value={input.weight}  onChange={(e)=> handleChange(e)}/>
            {error.weight && <p>{error.weight}</p>}

            <label htmlFor="img">img</label>
            <input type="text" name="img" value={input.img}  onChange={(e)=> handleChange(e)}/>
            {error.img && <p>{error.img}</p>}

            <label htmlFor="type">type</label>
            <select name="type" key={types.id} onChange={(e)=> handleSelect(e)}>{types.map(type =><option key={type.id}> {type.name}</option> )}</select>
            {error.type && <p>{error.type}</p>}
            <p>Type Assigned: {input.type.join(", ")} </p>
            <div>

            <Link to="/Home">
                <p>Back</p>
            </Link>
            <button>Create</button>
            </div>
        </form>
    )
}