import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getType } from "../redux/actions/actions";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import imagen from "../img/42a60b439d517bdf2310657497950cc8.jpg"

const H2 = styled.h2`
font-size: 3rem;
`
const Assigned = styled.p`
font-weight: bold;
`

const Formu = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 120rem;
width: 80%;
padding: 2rem;
margin: 0 auto;
background-color: white;
`
const Labels = styled.label`
text-align: right;
flex-direction: left;
margin right: 1rem;
flex-basis: 20%;
font-weight: bold;
`
const Divs = styled.div`
display: flex;
padding: 0.5rem;
gap: 3rem;
`
const Inputs = styled.input`
max-width: 100%;
width: 20rem;
`
const Parrafo = styled.p`
color: red;
text-align:left;
margin: 0;
margin-right: 5rem;
`
const TypeE = styled.p`
color: red;
margin: 0;
`
const Selects = styled.select`
text-align: left;
`
const Options = styled.option`
width: 100%;
`
const Button4 = styled.button`
border: none;
border: 2px solid black;
border-radius: 5px;
cursor:pointer;
padding: 0.48rem;
font-size: 1rem;
&:hover {
    background-color: black;
    color: white;
    transition: 0.8s;
}
`
const Button3 = styled.p`
padding: 0.3rem;
border: 2px solid black;
border-radius: 5px;
width: 100%;
font-size: 1.1rem;
color: black;
&:hover {
    background-color: black;
    color: white;
    transition: 0.8s;
}
`
const DivButton = styled.div`
display: flex;
gap: 1rem;
width: 100%;
align-items: center;
justify-content: center;
`
const Links = styled(Link)`
text-decoration: none;
`
const Imagen = styled.img`
background-image: url(${imagen});
width: 100%;
height: 50rem;
margin-bottom: -15rem;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`
const FormDiv = styled.div`
width: 60%;
margin: 0 auto;
margin-bottom: 5rem;
border: 2px solid black;
padding: 2rem;
background-color: white;
box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.89);
-webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.89);
-moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.89);
position: relative;
`
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
    const history = useHistory()
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
            if(!input.hp || input.hp < 2 || input.hp > 320){
                errorCopy.hp = "Status is required"
            }else{
                delete errorCopy.hp;
            }
        }

        if(change.attack || submit){
            if(!input.attack || input.attack < 2 || input.attack > 320){
                errorCopy.attack = "Status is required"
            }else{
                delete errorCopy.attack;
            }
        }

        if(change.defense || submit){
            if(!input.defense || input.defense < 2 || input.defense > 320){
                errorCopy.defense = "Status is required"
            }else{
                delete errorCopy.defense;
            }
        }
        if(change.speed || submit){
            if(!input.speed || input.speed < 2 || input.speed > 320){
                errorCopy.speed = "Status is required"
            }else{
                delete errorCopy.speed;
            }
        }

        if(change.height || submit){
            if(!input.height || input.height < 2 || input.height > 320){
                errorCopy.height = "Status is required"
            }else{
                delete errorCopy.height;
            }
        }
        if(change.weight || submit){
            if(!input.weight || input.weight < 2 || input.weight > 320){
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
            await axios.post("http://localhost:3001/pokemons", input)
            dispatch(createPokemon(input))
            alert("Pokemon Created")
            history.push("/Home")
        }else {
            alert("Complete form")
        }
        
    }
    return (
        <div>
            <Imagen></Imagen>
        <FormDiv>
            <H2>Create Your Pokemon!</H2>
        <Formu onSubmit={handleSubmit}>
            <Divs>
            <Labels htmlFor="name">Name:</Labels>
            <Inputs type="text" name="name" value={input.name} onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.name && <Parrafo>{error.name}</Parrafo>}
            <Divs>
            <Labels htmlFor="hp">Hp: {input.hp}</Labels>
            <Inputs type="range" name="hp" value={input.hp} onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.hp && <Parrafo>{error.hp}</Parrafo>}
            <Divs>
            <Labels htmlFor="attack">Attack: {input.attack}</Labels>
            <Inputs type="range" name="attack" max="320" value={input.attack}  onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.attack && <Parrafo>{error.attack}</Parrafo>}
            
            <Divs>
            <Labels htmlFor="defense">Defense: {input.defense}</Labels>
            <Inputs type="range" name="defense" max="320" value={input.defense}  onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.defense && <Parrafo>{error.defense}</Parrafo>}
            <Divs>
            <Labels htmlFor="speed">Speed: {input.speed}</Labels>
            <Inputs type="range" name="speed" max="320" value={input.speed}  onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.defense && <Parrafo>{error.defense}</Parrafo>}
            <Divs>
            <Labels htmlFor="height">Height: {input.height}</Labels>
            <Inputs type="range" name="height" max="320" value={input.height} onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.height && <Parrafo>{error.height}</Parrafo>}
            <Divs>
            <Labels htmlFor="weight">Weight: {input.weight}</Labels>
            <Inputs type="range" name="weight" max="320"value={input.weight}  onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.weight && <Parrafo>{error.weight}</Parrafo>}
            <Divs>
            <Labels htmlFor="img">Imagen:</Labels>
            <Inputs type="text" name="img" value={input.img}  onChange={(e)=> handleChange(e)}/>
            </Divs>
            {error.img && <Parrafo>{error.img}</Parrafo>}
            <Divs>
            <Labels htmlFor="type">Type:</Labels>
            <Selects name="type" key={types.id} onChange={(e)=> handleSelect(e)}>{types.map(type =><Options key={type.id}> {type.name}</Options> )}</Selects>
            </Divs>
            {error.type && <TypeE>{error.type}</TypeE>}
            <Assigned>Type Assigned: {input.type.join(", ")} </Assigned>
            <DivButton>
            <Links to="/Home">
                <Button3>Back</Button3>
            </Links>
            <Button4>Create</Button4>
            </DivButton>
        </Formu>
        </FormDiv>
        </div>
    )
}