import axios from "axios";
export const GET_POKEMONS = "GEL_ALL";
export const GET_POKEMON = "GET_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_TYPE = "GET_TYPE";
export const FILTER_ASCENDENTE = "FILTER_ASCENDENTE";
export const FILTER_DESCENDENTE = "FILTER_DESCENDENTE";
export const FILTER_HIGH_ATTACK = "FILTER_HIGH_ATTACK";
export const CLEAR_DETAIL_POKEMON = "CLEAR_DETAIL_POKEMON";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const REFRESH = "REFRESH";
export const FILTER_LOW_ATTACK = "FILTER_LOW_ATTACK";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

//Obtenemos pokemons
export const getPokemons = () => (dispatch) => {
  return fetch("http://localhost:3002/pokemons")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POKEMONS, payload: data }));
};

//Busqueda por nombre
export const searchByName = (name) => (dispatch) => {
  return axios
    .get(`http://localhost:3002/pokemons?name=${name}`)
    .then((response) => {
      return dispatch({ type: GET_BY_NAME, payload: response.data });
    });
};

//Obtenemos un solo pokemon
export const getPokemon = (id) => (dispatch) => {
  return fetch(`http://localhost:3002/pokemons/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POKEMON, payload: data }));
};

//Obtenemos los types de los pokemons
export const getType = () => (dispatch) => {
  return fetch("http://localhost:3002/pokemons/type")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_TYPE, payload: data }));
};

export const getByType = (type) => {
  return { type: FILTER_BY_TYPE, payload: type };
};

export const clearDetailPokemon = () => {
  return { type: CLEAR_DETAIL_POKEMON };
};

//Creamos un pokemon
export const createPokemon = (args) => {
  return { type: CREATE_POKEMON, payload: args };
};
export const setCurrent = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};
export const filterAsc = () => {
  return { type: FILTER_ASCENDENTE };
};

export const filterDesc = () => {
  return { type: FILTER_DESCENDENTE };
};

export const filterHighAttack = () => {
  return { type: FILTER_HIGH_ATTACK };
};
export const filterLowAttack = () => {
  return { type: FILTER_LOW_ATTACK };
};

export const filterCreated = (data) => {
  return { type: FILTER_CREATED, payload: data };
};
export const refresh = () => {
  return { type: REFRESH };
};
