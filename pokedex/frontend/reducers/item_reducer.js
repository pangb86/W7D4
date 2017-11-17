import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_A_POKEMON:
      let obj = {};
      for(var i = 0; i < action.pokemon.items.length; i++) {
        obj[action.pokemon.items[i].id] = action.pokemon.items[i];
      }
      nextState = merge({}, state, obj);
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;
