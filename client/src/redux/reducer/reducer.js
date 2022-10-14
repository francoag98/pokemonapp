import {
  GET_POKEMON,
  GET_POKEMONS,
  CREATE_POKEMON,
  GET_BY_NAME,
  GET_TYPE,
  FILTER_ASCENDENTE,
  FILTER_DESCENDENTE,
  CLEAR_DETAIL_POKEMON,
} from "../actions/actions";

const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case GET_BY_NAME:
      return {
        ...state,
        pokemons: [action.payload],
      };
    case GET_TYPE:
      return {
        ...state,
        types: action.payload,
      };
    case CLEAR_DETAIL_POKEMON:
      return {
        ...state,
        pokemon: {},
      };
    case FILTER_ASCENDENTE:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
      };
    case FILTER_DESCENDENTE:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
