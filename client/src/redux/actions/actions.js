import axios from "axios";
export const GET_POKEMONS = "GEL_ALL";
export const GET_POKEMON = "GET_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";

//Obtenemos pokemons
export const getPokemons = () => (dispatch) => {
  return fetch("http://localhost:3001/pokemons")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POKEMONS, payload: data }));
};

//Busqueda por nombre
export const searchByName = (name) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/pokemons?name=${name}`)
    .then((response) =>
      dispatch({ type: GET_BY_NAME, payload: response.data })
    );
};

//Obtenemos un solo pokemon
export const getPokemon = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/pokemons/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POKEMON, payload: data }));
};

//Creamos un pokemon
export const createPokemon = (args) => {
  return { type: CREATE_POKEMON, payload: args };
};
