import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchByName } from "../redux/actions/actions";
import styled from "styled-components";

const Input = styled.input`
border: none;
background:transparent;
color: #ef7f45;
max-whidth: 100%;
width: 20rem;
border-bottom: 2px solid #ef7f45;
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
border: 2px solid #ef7f45;
padding: 0.5rem;
color: #ef7f45;
margin: 0 10px;
cursor: pointer;
&:hover {
    background-color: #ef7f45;
    color: white;
    transition: 0.4s;
}
`

const Parraf = styled.p`
text-decoration: none;
color: #ef7f45;
text-transform: uppercase;
border: 2px solid #ef7f45;
padding: 0.32rem;
&:hover {
    background-color: #ef7f45;
    color: white;
    transition: 0.4s;
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