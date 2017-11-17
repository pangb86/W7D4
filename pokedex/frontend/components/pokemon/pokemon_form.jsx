import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let obj = {
      pokemons: {

      }
    };
    obj.pokemons = this.state;
    obj.pokemons.moves = obj.pokemons.moves.split(' ');
    this.props.makePokemon(obj);
  }


  render() {
    const types = ['fire',
                  'electric',
                  'normal',
                  'ghost',
                  'psychic',
                  'water',
                  'bug',
                  'dragon',
                  'grass',
                  'fighting',
                  'ice',
                  'flying',
                  'poison',
                  'ground',
                  'rock',
                  'steel'];
    return (
      <form>
        <input name='name' onChange={this.update('name')}/>
        <br/>
        <input onChange={this.update('image_url')}/>
        <br/>
        <select onChange={this.update('poke_type')} value={this.state.poke_type}>
          {types.map(type => <option value={type}>{type}</option>)}
        </select>
        <br/>
        <input onChange={this.update('attack')}/>
        <br/>
        <input onChange={this.update('defense')}/>
        <br/>
        <input onChange={this.update('moves')}/>
        <br/>
        <button onClick={this.handleSubmit}></button>
      </form>
    );
  }
}

export default PokemonForm;
