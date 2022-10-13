import React from "react";

export const Paginado = ({totalPokemons, pokemonsPerPage, setCurrentPage, currentPage})=>{
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPokemons/ pokemonsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}