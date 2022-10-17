import React from "react";
import style from "styled-components"

const Imagen = style.body`
background-color: red;
`
export const FirstPage = ()=>{
    return (
        <Imagen>
            <h1>First PAGE POKEMON</h1>
        </Imagen>
    )
}