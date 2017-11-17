import { connect } from 'react-redux';
import { makePokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
  makePokemon: (pokemon) => dispatch(makePokemon(pokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
