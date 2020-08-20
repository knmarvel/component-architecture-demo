import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from '../../assets/logo.png'
import "./Navigation.css"

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home"><img className="logo" src={logo} alt='logo'/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Pokemon</Nav.Link>
          <Nav.Link href="/colors">Pokemon Colors</Nav.Link>
          <Nav.Link href="/habitats">Pokemon Habitats</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className='navbutton'>Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation
