import React, {useState, useEffect} from "react"
import {Card, ListGroup} from 'react-bootstrap'
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

    useEffect(() => {
        
        if(!pokeInfo){
            fetch(props.url)
            .then(response => response.json())
            .then(data => setPokeinfo(data))
        }
    },[pokeInfo,props.url]


    )
    return(
        <>
        {pokeInfo ?
        <Card style={{ width: '15rem', borderColor: `${typesToColors[pokeInfo.types[0].type.name]}`}}>
                <Card.Img 
                    className="card-img-top"
                    src={pokeInfo.sprites.other["official-artwork"]["front_default"]}
                    alt="Official Artwork"
                    style={{backgroundColor: typesToColors[pokeInfo.types[0].type.name]}
                    }
                />
                    <Card.Title>
                        <a href={props.url}>{props.name.slice(0,1).toUpperCase() + props.name.slice(1)}</a>
                    </Card.Title>
                    <Card.Subtitle>
                        <i>Height:</i> {pokeInfo.height} &nbsp; 
                        <i>Weight:</i> {pokeInfo.weight}                    
                    </Card.Subtitle>
                    <div className="typesAbilities">
                        <div>
                            <b>Type: </b> 
                            <ListGroup >
                                {pokeInfo.types.map(type =>{
                                    return <ListGroup.Item style={{border: "none"}} key={v4()}>{type.type.name}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </div>
                            
                        <div>
                            <b>Abilities:</b>
                            <ListGroup>
                                {pokeInfo.abilities.map(ability =>{
                                    return <ListGroup.Item style={{border: "none"}} key={v4()}>{ability.ability.name}</ListGroup.Item>
                                })}
                            </ListGroup>
                        </div>
                    </div>
        </Card>
        : "loading"}
        </>
    )
}
