import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Smart Home System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/rooms">Rooms</Nav.Link>
          <Nav.Link href="/devices">Devices</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;
    