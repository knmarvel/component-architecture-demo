import React from "react";
import { ListGroup } from 'react-bootstrap'
import './SideBar.css'


const SideBar = () => {
    return (
      <ListGroup as="ul">
        <ListGroup.Item as="li">
          Normal
        </ListGroup.Item>
        <ListGroup.Item as="li" >Fire</ListGroup.Item>
        <ListGroup.Item as="li">
          Water
        </ListGroup.Item>
        <ListGroup.Item as="li">Glass</ListGroup.Item>
        <ListGroup.Item as="li">Electric</ListGroup.Item>
        <ListGroup.Item as="li">Ice</ListGroup.Item>
        <ListGroup.Item as="li">Fighting</ListGroup.Item>
        <ListGroup.Item as="li">Poison</ListGroup.Item>
        <ListGroup.Item as="li">Ground</ListGroup.Item>
        <ListGroup.Item as="li">Flying</ListGroup.Item>
        <ListGroup.Item as="li">Psychic</ListGroup.Item>
        <ListGroup.Item as="li">Bug</ListGroup.Item>
        <ListGroup.Item as="li">Ghost</ListGroup.Item>
        <ListGroup.Item as="li">Dark</ListGroup.Item>
        <ListGroup.Item as="li">Dragon</ListGroup.Item>
        <ListGroup.Item as="li">Steel</ListGroup.Item>
        <ListGroup.Item as="li">Fairy</ListGroup.Item>
      </ListGroup>
    );
}

export default SideBar