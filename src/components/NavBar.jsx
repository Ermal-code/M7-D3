import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Get a Job</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link
            to="/"
            className={
              props.location.pathname === "/" ? "active nav-link" : "nav-link"
            }
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={
              props.location.pathname === "/favorites"
                ? "active nav-link"
                : "nav-link"
            }
          >
            Favorites
          </Link>
          <Nav.Link href="#pricing">Post a job</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default withRouter(NavBar);
