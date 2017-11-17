import React from 'react';
import values from 'lodash/values';
import ItemDetailContainer from '../items/item_detail_container';
import { Link, Route } from 'react-router-dom';

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
          <ul>
            {values(this.props.items).map((item) =>
              <Link to={`/pokemon/${pokemon.id}/item/${item.id}`}><li key={item.name}><img width="100px" src={item.image_url} /></li></Link>
            )}
          </ul>
          <Route path='/pokemon/:pokemonId/item/:itemId' component={ItemDetailContainer} />
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
