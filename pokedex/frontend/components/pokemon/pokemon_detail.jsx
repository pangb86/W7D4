import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { pokemon } = this.props;
    if (pokemon) {
      return (
        <div className="pokemon_detail">
          <div className={pokemon.type}>
            <img src={pokemon.image_url} />
            <h1>{pokemon.name}</h1>
            <ul>
              <li>Type: {pokemon.type}</li>
              <li>Attack: {pokemon.attack}</li>
              <li>Defense: {pokemon.defense}</li>
              <li>Moves: {pokemon.moves.join(", ")}</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>Anything</div>
      );
    }
  }

  componentDidMount(){
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestAPokemon(newProps.match.params.pokemonId);
    }
  }
}

export default PokemonDetail;
