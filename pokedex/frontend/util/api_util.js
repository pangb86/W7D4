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
  }

};

export default APIUtil;
