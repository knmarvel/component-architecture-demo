import React, {useState, useEffect} from 'react';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon"
import Navigation from './components/Navigation/Navigation'
import SideBar from './components/SideBar/SideBar'
const { v4 } = require('uuid');


function App(){
  const [pokemon, setPokemon] = useState(() => { return null })
  const [filterPokemon, setFilterPokemon] = useState()
  const [filterStatus, setFilterStatus] = useState(false)
 
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
    
  },[pokemon]);
  
  const handleClick = async(e,value) => {
    console.log('clicked')
    console.log(value)
    if (value) {
      let response = await fetch(`https://pokeapi.co/api/v2/type/${value}`);
      let data = await response.json();
   
      let results = await data.pokemon
      console.log(results)
      setFilterPokemon({ results });
      setPokemon(null)
      setFilterStatus(true)
    }
  }

  return (
    <>
      <Navigation />
      <h1>A List Of Pokemon</h1>
      <div className="PokeCardGroup">
        <div className="SideBarHolder">
          <SideBar handleClick={handleClick} />
        </div>
        
          {!filterStatus &&
            pokemon &&(
            <div className="PokemonCardHolder">
            {pokemon.results.map((element) => {
              return (
                <Pokemon key={v4()} name={element.name} url={element.url} />
              );
            })}
        </div>
            )
          }
      
        {filterStatus &&
          filterPokemon && (
            <div className="PokemonCardHolder">
              {filterPokemon.results.map((element) => {
                const { name, url } = element.pokemon
                return (
                  <Pokemon key={v4()} name={name} url={url} />
                );
              })}
            </div>
          )}
      </div>
          
    </>
  );
}

export default App;
