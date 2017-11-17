import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const pokemonArr = this.props.pokemon;
    return(
      <div>
        <ul>
          {pokemonArr.map(pokemon => ( <PokemonIndexItem key={pokemon.id } pokemon={pokemon}/>))}
        </ul>
         <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
         <Route exact path='/' component={PokemonFormContainer} />
    </div>
    );
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
