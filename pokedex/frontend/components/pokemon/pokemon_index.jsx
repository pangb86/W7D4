import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const pokemonArr = this.props.pokemon;
    return(
      <div>
        <ul>
          {pokemonArr.map(pokemon => (
            <li key={pokemon.name}>
              {pokemon.name}
              <img src={pokemon.image_url}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
