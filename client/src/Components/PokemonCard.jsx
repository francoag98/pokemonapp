import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

const NewDiv = styled.div`
padding: 0.2rem;
box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
-webkit-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
-moz-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82);
background-color: #fff0c9;
&:hover {
    box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82) inset;
    -webkit-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82) inset;
    -moz-box-shadow: 22px 22px 0px -12px rgba(244,159,88,0.82) inset;
    transform: scale(1.15);
    transition: 0.8s;  
}
`
const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`
const Foto = styled.img`
width: 15rem;
height: 10rem;
object-fit: contain;
`
const H4 = styled.h4`
margin: 0;
text-transform: uppercase;
font-size: 18px;
color: #ef7f45;
`
const Parrafo = styled.p`
margin: 0;
font-size: 15px;
text-transform: uppercase;
color: #ef7f45;
`
const H3 = styled.h3`
font-size: 2rem;
margin: 0;
margin-top: 10px;
color: #ef7f45;
`
export const PokemonCard = (props)=>{
    const id = props.id
    return(
        <NewDiv>
            <StyledLink to={`/Pokemon/${id}`}>
            <H3>{props.name}</H3>
            </StyledLink>
            <Foto src={props.img} alt="main-img" />
            <H4>Pokemon type</H4>
            <Parrafo>{props.type ? props.type.join(", ") : ""}</Parrafo>

        </NewDiv>
    )
}