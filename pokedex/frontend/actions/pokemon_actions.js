import APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveAPokemon = (pokemon) => ({
  type: RECEIVE_A_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
  .then (pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestAPokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchAPokemon(pokemonId)
  .then (response => dispatch(receiveAPokemon(response)))
);

export const makePokemon = (pokemon) => (dispatch) => (
  APIUtil.createPokemon(pokemon)
  .then (response => dispatch(receiveAPokemon(response)))
);
