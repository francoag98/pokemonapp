import React from "react";

export const PokemonCard = (props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.img} alt="main-img" />
            <h4>Pokemon type</h4>
            <p>{props.type.join(", ")}</p>

        </div>
    )
}