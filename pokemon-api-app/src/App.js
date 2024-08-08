import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;