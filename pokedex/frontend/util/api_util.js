const APIUtil = {

  fetchAllPokemon() {
    return $.ajax({
      method: 'GET',
      url: '/api/pokemon'
    });
  },

  fetchAPokemon(pokemon) {
    return $.ajax({
      method: 'GET',
      url: `/api/pokemon/${pokemon.id}`
    });
  }

};

export default APIUtil;
