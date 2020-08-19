import React, {useState, useEffect} from "react"
import "./Pokemon.css"

const { v4 } = require('uuid');

const typesToColors = {
    "normal": "brown",
    "fire": "orangered",
    "water": "blue",
    "grass": "green",
    "electric": "yellow",
    "ice": "lightblue",
    "fighting": "crimson",
    "poison": "purple",
    "ground": "tan",
    "flying": "mediumpurple",
    "psychic": "pink",
    "bug": "yellowgreen",
    "rock": "darkgray",
    "ghost": "lightgray",
    "dark": "black",
    "dragon": "indigo",
    "steel": "gray",
    "fairy": "lightpink"
}


export default function Pokemon(props){
    const [pokeInfo, setPokeinfo] = useState()

    useEffect (() => {
        if(!pokeInfo){
            fetch(props.url)
            .then(response => response.json())
            .then(data => setPokeinfo(data))
        }
    },


    )
    return(
        <div className="PokeCard">
            <h2 className="PokeCardTitle">
                <a href={props.url}>{props.name.slice(0,1).toUpperCase() + props.name.slice(1)}</a>
            </h2>
            {pokeInfo &&
                <>
                <img 
                    src={pokeInfo.sprites.other["official-artwork"]["front_default"]}
                    alt="Official Artwork"
                    style={{backgroundColor: typesToColors[pokeInfo.types[0].type.name]}
                    }
                />
                <div className="PokeCardInfo">
                    <div className="PokeCardExtras">
                        <b>Height:</b> {pokeInfo.height} &nbsp;
                        <b>Weight:</b> {pokeInfo.weight} &nbsp;
                        <b># of Moves:</b> {pokeInfo.moves.length}
                    </div>
                    <div className="PokeCardType">
                        <b>Type: </b> 
                        <ul>
                        {pokeInfo.types.map(type =>{
                            return <li key={v4()}>{type.type.name}</li>
                        })}
                        </ul>
                    </div>
                    <div className="PokeCardAbilities">
                        <b>Abilities</b>
                        <ul>
                            {pokeInfo.abilities.map(ability =>{
                                return <li key={v4()}>{ability.ability.name}</li>
                            })}
                        </ul>
                    </div>
                    <div className="PokeCardForms">
                        <b>Forms: </b> 
                        <ul>
                        {pokeInfo.forms.map(form =>{
                            return <li key={v4()}><a href={form.url}>{form.name.slice(0,1).toUpperCase() + form.name.slice(1)}</a></li>
                        })}
                        </ul>
                    </div>
                    
                </div>
                </>
            }
        </div>
    )
}
