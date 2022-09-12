import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const history = useNavigate();

  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.users.isLoggedIn,
    };
  });

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Eshtri</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link href="#features">
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i class="fa-solid fa-heart"></i>
              </Nav.Link>
              {isLoggedIn ? (
                <Nav.Link>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    href="#deets"
                    onClick={() => {
                      history("/login");
                    }}
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    eventKey={2}
                    href="#memes"
                    onClick={() => {
                      history("/register");
                    }}
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
