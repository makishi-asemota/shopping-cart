import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

export default function navBar({ cart }) {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">Makishimota</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/Shop">Store</Nav.Link>
          <Nav.Link href="/Cart">Cart({cart.length})</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
