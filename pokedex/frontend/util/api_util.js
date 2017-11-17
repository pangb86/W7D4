const APIUtil = {

  fetchAllPokemon() {
    return $.ajax({
      method: 'GET',
      url: '/api/pokemon'
    });
  },

  fetchAPokemon(pokemonId) {
    return $.ajax({
      method: 'GET',
      url: `/api/pokemon/${pokemonId}`
    });
  },

  createPokemon(pokemon) {
    return $.ajax({
      method: 'POST',
      url: '/api/pokemon',
      data: pokemon
    });
  }

};

export default APIUtil;
