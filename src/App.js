import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon"
import Navigation from './components/Navigation/Navigation'
import SideBar from './components/SideBar/SideBar'
import pokemonLogo from './assets/images/pokemonlogo.png'
const { v4 } = require('uuid');


function App(){
  const [pokemon, setPokemon] = useState()
 
  const tryingAwait = async () => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
    let data = await response.json()
    setPokemon(data.results)
  }

  useEffect(() => {
      if(!pokemon){
        tryingAwait()
    }
  }, );
  const handleClick = async(e,value) => {
    if (value) {
      let response = await fetch(`https://pokeapi.co/api/v2/type/${value}`);
      let data = await response.json();
      let results = await data.pokemon
      setPokemon(results.map(x => x.pokemon));
    }
    else{
    }
  }
  return (
    <>
      <Navigation />
      <div className="allContent">
        <div className="SideBarHolder">
          <SideBar handleClick={handleClick}/>
        </div>
        <div className="bodyContent">
          <img className="titleImg" src={pokemonLogo} alt="Pokemon Logo" />
          <div className="PokeCardGroup">
            {pokemon && pokemon.map(element => {
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
    </div>
    </>
  )
}

export default App;
