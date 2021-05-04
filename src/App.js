import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="app-header">
          <h1>POKEMON</h1>
        </header>
        
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
