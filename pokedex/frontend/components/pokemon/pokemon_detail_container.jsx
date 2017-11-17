import { connect } from 'react-redux';
import { requestAPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestAPokemon: (pokemonId) => dispatch(requestAPokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
