import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ()=>{
    return (
        <div>
            <div>
                <input type="text" placeholder="Search your Pokemon" />
                <button>Search</button>
            </div>
            <div>
                <Link to="/CreatePokemon">
                <p>Create Pokemon</p>
                </Link>
            </div>
        </div>
    )
}