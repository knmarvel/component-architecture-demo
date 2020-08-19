import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon"
const { v4 } = require('uuid');


function App(){
  const [pokemon, setPokemon] = useState()
 
  const tryingAwait = async () => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    let data = await response.json()
    setPokemon(data)
  }

  useEffect(() => {
      if(!pokemon){
        tryingAwait()
      // fetch("https://pokeapi.co/api/v2/pokemon/")
      // .then(response => response.json())
      // .then(data => setPokemon(data))
    }
  });
  return (
    <>
    <h1>A List Of Pokemon</h1>
    <div className="PokeCardGroup">
    {pokemon && pokemon.results.map(element => {
      return (
        <Pokemon 
          key={v4()}
          name={element.name} 
          url={element.url} 
          />
      )
    })}
    </div>
    </>
  )
}

export default App;
