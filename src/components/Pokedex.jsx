import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    
    return (
      <ul className="pokedex">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </ul>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(Object),
}

export default Pokedex;