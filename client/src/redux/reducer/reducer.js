import {
  GET_POKEMON,
  GET_POKEMONS,
  CREATE_POKEMON,
  GET_BY_NAME,
  GET_TYPE,
  FILTER_ASCENDENTE,
  FILTER_DESCENDENTE,
  CLEAR_DETAIL_POKEMON,
  FILTER_BY_TYPE,
  FILTER_HIGH_ATTACK,
  FILTER_CREATED,
  REFRESH,
  FILTER_LOW_ATTACK,
} from "../actions/actions";

const initialState = {
  allPokemons: [],
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
        allPokemons: action.payload,
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
    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemons: [
          ...state.allPokemons.filter((pokemon) =>
            pokemon.type.includes(action.payload)
          ),
        ],
      };
    case FILTER_HIGH_ATTACK:
      return {
        ...state,
        pokemons: [
          ...state.pokemons.sort((a, b) => {
            if (a.attack > b.attack) {
              return -1;
            }
            if (a.attack < b.attack) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    case FILTER_LOW_ATTACK:
      return {
        ...state,
        pokemons: [
          ...state.pokemons.sort((a, b) => {
            if (a.attack < b.attack) {
              return -1;
            }
            if (a.attack > b.attack) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    case FILTER_ASCENDENTE:
      return {
        ...state,
        pokemons: [
          ...state.pokemons.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    case FILTER_DESCENDENTE:
      return {
        ...state,
        pokemons: [
          ...state.pokemons.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    case FILTER_CREATED:
      const allDataBase =
        action.payload === "created"
          ? state.allPokemons.filter((el) => el.createdInDb)
          : state.allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons: allDataBase,
      };
    case REFRESH:
      return {
        ...state,
        pokemons: [...state.pokemons],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
