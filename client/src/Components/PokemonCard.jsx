import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

const NewDiv = styled.div`
width: 350px;
height: 350px;
backdrop-filter: blur(30px);
`
const StyledLink = styled(Link)`
text-decoration: none;
color: White;
`
const Foto = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
`
const H4 = styled.h4`
margin: 0;
text-transform: uppercase;
color: white;
font-size: 18px;
`
const Parrafo = styled.p`
margin: 0;
color: white;
font-size: 15px;
text-transform: uppercase;
`
const H3 = styled.h3`
font-size: 40px;
margin: 0;
margin-top: 10px;
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