import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchByName } from "../redux/actions/actions";

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
        <div>
            <div>
                <input type="text" placeholder="Search your Pokemon" onChange={(e)=> handleChangeName(e)}/>
                <button type="submit" onClick={(e)=>handleSubmitName(e)}>Search</button>
            </div>
            <div>
                <Link to="/CreatePokemon">
                <p>Create Pokemon</p>
                </Link>
            </div>
        </div>
    )
}