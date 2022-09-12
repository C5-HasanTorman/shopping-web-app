import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Eshtri</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link href="#features">
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i class="fa-solid fa-heart"></i>
              </Nav.Link>

              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
