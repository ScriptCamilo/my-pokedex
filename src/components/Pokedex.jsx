import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    
    return (
      <ul>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon}/>)}
      </ul>
    )
  }
}

export default Pokedex;