import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchByName } from "../redux/actions/actions";
import styled from "styled-components";

const Input = styled.input`
border: none;
background:transparent;
color: black;
max-whidth: 100%;
width: 20rem;
border-bottom: 1px solid black;
padding: 0.5rem;
`

const DivFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
gap: 1rem;
`
const Buttons = styled.button`
border: none;
background-color: transparent;
border: 1px solid black;
padding: 0.5rem;
color: black;
margin: 0 10px;
cursor: pointer;
`

const Parraf = styled.p`
text-decoration: none;
color: black;
text-transform: uppercase;
border: 1px solid black;
padding: 0.32rem;
&:hover {
    background-color: black;
    color: white;
    transition: 0.3s;
}
`
const Linked = styled(Link)`
text-decoration: none;
`
export const NavBar = ()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleChangeName = (e)=>{
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmitName = (e)=>{
        e.preventDefault();
        dispatch(searchByName(name))
    }

    return (
        <DivFlex>
            <div>
                <Input type="text" placeholder="Search your Pokemon" onChange={(e)=> handleChangeName(e)}/>
                <Buttons type="submit" onClick={(e)=>handleSubmitName(e)}>Search</Buttons>
            </div>
            <div>
                <Linked to="/CreatePokemon">
                <Parraf>Create Pokemon</Parraf>
                </Linked>
            </div>
        </DivFlex>
    )
}