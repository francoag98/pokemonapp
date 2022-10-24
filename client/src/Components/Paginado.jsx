import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrent } from "../redux/actions/actions";


const StyledButton = styled.button`
border: none;
margin: 10px 10px;
border: 2px solid #ef7f45;
border-radius: 50%;
font-size: 20px;
padding: 0.3rem;
cursor: pointer;
color: #ef7f45;
&:hover {
    background-color: #ef7f45;
    color: white;
}
`

export const Paginado = ({totalPokemons, pokemonsPerPage, currentPage})=>{
    let pages = [];
    const dispatch = useDispatch()

    for (let i = 1; i <= Math.ceil(totalPokemons/ pokemonsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <StyledButton
                        key={index}
                        onClick={() => dispatch(setCurrent(page))}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </StyledButton>
                );
            })}
        </div>
    );
}