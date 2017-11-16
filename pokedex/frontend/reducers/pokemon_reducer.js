import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = {};
      return action.pokemon;
    case RECEIVE_A_POKEMON:
      nextState = merge({}, state, action.pokemon);
      return nextState;
    default:
      return state;
  }


};

export default pokemonReducer;
