import React from "react";
import "./index.scss";
import logo from "../../assets/brand/logo.png";

import SearchBar from "./SearchBar";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const index = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid="xxl">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <SearchBar />
      </Container>
    </Navbar>
  );
};

export default index;
