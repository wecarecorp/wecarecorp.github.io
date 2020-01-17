import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "./../images/logo-wecare.svg";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <>
      <div className="Header fixed-top">
        <Navbar expand="lg" className="Header-navbar">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  height="23"
                  className="d-inline-block align-top Header-logo"
                  alt="WeCare Logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="contato">
                  <Button variant="success" className="ml-4">
                    Agende um demo
                  </Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
