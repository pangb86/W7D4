import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

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
      </div>
    );
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
