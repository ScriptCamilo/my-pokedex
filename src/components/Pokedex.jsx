import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import ElementButton from './ElementButton';

class Pokedex extends Component {
  constructor() {
    super()

    this.changePage = this.changePage.bind(this);

    this.state = {
      pokemonPage: 0,
    }
  }

  changePage(e) {
    const event = e.target;
    const pageLength = this.props.pokemons.length - 1;

    if (event.textContent.toLowerCase() === 'next') {
      return this.setState(({ pokemonPage }, _props) => ({
        pokemonPage: pokemonPage < pageLength ? pokemonPage + 1 : 0,
      }))
    }
    return this.setState(({ pokemonPage }, _props) => ({
      pokemonPage: pokemonPage > 0 ? pokemonPage - 1 : pageLength,
    })) 
  }

  render() {
    const { pokemonPage } = this.state;
    const { pokemons } = this.props;
    const pokemon = pokemons[pokemonPage]
    const elements = pokemons.reduce((array, { type }) => {
      if (array.includes(type)) {
        return array;
      }
      array.push(type);
      return array;
    }, []);

    return (
      <main id="app-main">
        <ul className="pokedex">
          {/* {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)} */}
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        </ul>

        <section id="buttons">
          <div id="element-buttons">
            {elements.map((type) => <ElementButton key={type} type={type} />)}
          </div>

          <div id="page-buttons">
            <button className="page-button" onClick={this.changePage}>Previous</button>
            <button className="page-button" onClick={this.changePage}>Next</button>
          </div>
        </section>
      </main>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(Object),
}

export default Pokedex;