import values from 'lodash/values';

export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
  // for(var i = 0; i < state.entities.items; i++) {
  //   if(state.entities.items[i].id === itemId) {
  //     return state.entities.items[i];
  //   }
  // }
};
