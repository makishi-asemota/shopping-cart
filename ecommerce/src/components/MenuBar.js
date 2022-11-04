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
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand href="/">Makishimota</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Nav.Link href="/">About</Nav.Link>
          </Link>
          <Link to={"/Shop"} style={{ textDecoration: "none" }}>
            <Nav.Link href="/Shop">Store</Nav.Link>
          </Link>
          <Link to={"/Cart"} style={{ textDecoration: "none" }}>
            <Nav.Link href="/Cart">Cart({cart.length})</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
