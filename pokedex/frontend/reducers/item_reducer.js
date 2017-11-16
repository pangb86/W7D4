import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_A_POKEMON:
      nextState = merge({}. state, action.pokemon.items);
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
