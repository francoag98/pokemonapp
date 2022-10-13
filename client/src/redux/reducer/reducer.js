import {
  GET_POKEMON,
  GET_POKEMONS,
  CREATE_POKEMON,
  GET_BY_NAME,
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
        pokemon: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
