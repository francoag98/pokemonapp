import React from "react";
import styled from "styled-components";


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

export const Paginado = ({totalPokemons, pokemonsPerPage, setCurrentPage, currentPage})=>{
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPokemons/ pokemonsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <StyledButton
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </StyledButton>
                );
            })}
        </div>
    );
}