import React from "react";
import { ListGroup } from "react-bootstrap";
import "./SideBar.css";

const SideBar = ({ handleClick }) => {
    
    
    
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" action href="#link1" onClick={handleClick}>
        Normal
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link2" onClick={handleClick}>
        Fire
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link3" onClick={handleClick}>
        Water
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link4" onClick={handleClick}>
        Glass
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link5" onClick={handleClick}>
        Electric
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link6" onClick={handleClick}>
        Ice
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link7" onClick={handleClick}>
        Fighting
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link8" onClick={handleClick}>
        Poison
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link9" onClick={handleClick}>
        Ground
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link10" onClick={handleClick}>
        Flying
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link11" onClick={handleClick}>
        Psychic
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link12" onClick={handleClick}>
        Bug
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link13" onClick={handleClick}>
        Ghost
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link14" onClick={handleClick}>
        Dark
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link15" onClick={handleClick}>
        Dragon
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link16" onClick={handleClick}>
        Steel
      </ListGroup.Item>
      <ListGroup.Item as="li" action href="#link17" onClick={handleClick}>
        Fairy
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBar;
