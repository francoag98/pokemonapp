import React from "react";
import { Link } from "react-router-dom";
export const PokemonCard = (props)=>{
    const id = props.id
    return(
        <div>
            <Link to={`/Pokemon/${id}`}>
            <h3>{props.name}</h3>
            </Link>
            <img src={props.img} alt="main-img" />
            <h4>Pokemon type</h4>
            <p>{props.type ? props.type.join(", ") : ""}</p>

        </div>
    )
}