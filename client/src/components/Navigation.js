import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

class Navigation extends Component {
  render() {
    return (
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Search Books</Nav.Link>
                <Nav.Link href="/saved">Saved Books</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}

export default Navigation;