import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Get a Job</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to="/" className=" text-light nav-link">
            Home
          </Link>
          <Nav.Link href="#features">All jobs</Nav.Link>
          <Nav.Link href="#pricing">Post a job</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default withRouter(NavBar);
