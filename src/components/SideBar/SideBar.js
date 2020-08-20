import React from "react";
import { ListGroup } from "react-bootstrap";
import "./SideBar.css";

const SideBar = ({ handleClick }) => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        action
        href="#link1"
        onClick={(e, pokemontype = "normal") => handleClick(e, pokemontype)}
      >
        Normal
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link2"
        onClick={(e, pokemontype = "fire") => handleClick(e, pokemontype)}
      >
        Fire
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link3"
        onClick={(e, pokemontype = "water") => handleClick(e, pokemontype)}
      >
        Water
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link4"
        onClick={(e, pokemontype = "glass") => handleClick(e, pokemontype)}
      >
        Glass
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link5"
        onClick={(e, pokemontype = "electric") => handleClick(e, pokemontype)}
      >
        Electric
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link6"
        onClick={(e, pokemontype = "ice") => handleClick(e, pokemontype)}
      >
        Ice
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link7"
        onClick={(e, pokemontype = "fighting") => handleClick(e, pokemontype)}
      >
        Fighting
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link8"
        onClick={(e, pokemontype = "poison") => handleClick(e, pokemontype)}
      >
        Poison
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link9"
        onClick={(e, pokemontype = "ground") => handleClick(e, pokemontype)}
      >
        Ground
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link10"
        onClick={(e, pokemontype = "flying") => handleClick(e, pokemontype)}
      >
        Flying
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link11"
        onClick={(e, pokemontype = "psychic") => handleClick(e, pokemontype)}
      >
        Psychic
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link12"
        onClick={(e, pokemontype = "bug") => handleClick(e, pokemontype)}
      >
        Bug
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link13"
        onClick={(e, pokemontype = "ghost") => handleClick(e, pokemontype)}
      >
        Ghost
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link14"
        onClick={(e, pokemontype = "dark") => handleClick(e, pokemontype)}
      >
        Dark
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link15"
        onClick={(e, pokemontype = "dragon") => handleClick(e, pokemontype)}
      >
        Dragon
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link16"
        onClick={(e, pokemontype = "steel") => handleClick(e, pokemontype)}
      >
        Steel
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        action
        href="#link17"
        onClick={(e, pokemontype = "fairy") => handleClick(e, pokemontype)}
      >
        Fairy
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBar;
