import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import image from "../img/wallpapersden.com_pokemon-go-pokemon-raichu_1920x1080.jpg"

const Background = styled.div`
background: url(${image});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
display: flex;
`
const Huno = styled.div`
margin: 0;
color: white;
font-family: 'Press Start 2P', cursive;
margin-bottom: 1rem;
font-size: 1.8rem;
`
const DivsFlex = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
margin-left: 4rem;
margin-bottom: 3rem;
margin-top: 2rem;
`

const H3s = styled.h3`
font-family: 'Press Start 2P', cursive;
font-size: 1rem;
color: white;
`
const Start = styled.p`
font-family: 'Press Start 2P', cursive;
font-size: 1rem;
margin-top: 2rem;
border: 2px solid white;
display: inline-block;
padding: 1rem;
color: white;
border-radius: 5px;
&:hover {
    background-color: white;
    color: black;
    transition: 0.5s ease;
}
`
const Links = styled(Link)`
text-decoration: none;
`
export const FirstPage = ()=>{
    return (
        <Background>
            <DivsFlex>
                <div>
                    <Huno>Are You Ready to Search?</Huno>
                </div>
                <div>
                    <H3s>Let's search your pokemon!</H3s>
                    <Links to="/Home">
                        <Start>Start</Start>
                    </Links>
                </div>
            </DivsFlex>
        </Background>
    )
}