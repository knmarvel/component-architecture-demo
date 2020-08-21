import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon"
import Navigation from './components/Navigation/Navigation'
import SideBar from './components/SideBar/SideBar'

const { v4 } = require('uuid');


function App(){
  const [pokemon, setPokemon] = useState()
 
  const tryingAwait = async () => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=200")
    let data = await response.json()
    setPokemon(data)
  }

  useEffect(() => {
        tryingAwait()
  }, []);
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <>
      <Navigation />
    <h1>A List Of Pokemon</h1>
      <div className="bodyContent">
        <div className="SideBarHolder"><SideBar handleClick={handleClick}/></div>
          <div className="PokeCardHolder">
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
    </div>
    </>
  )
}

export default App;
