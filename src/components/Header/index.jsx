import React from "react";
import "./index.scss";
import logo from "../../assets/brand/logo.png";

import SearchBar from "./SearchBar";
import UserInfoSection from "./UserInfoSection";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Row } from "react-bootstrap";

const index = () => {
  return (
    <header>
      <Navbar bg="#fff" expand="lg">
        <Container fluid="xxl">
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <SearchBar />
          <UserInfoSection />
        </Container>
      </Navbar>
      <Navbar className="links-navbar">
        <Container fluid="xxl">
          <Row
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            xxl={10}
            className="header-row"
          >
            <Col className="header-col">
              <Nav.Link href="#home">Oyunlar</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Knight Online</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Skin</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Valorant VP</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Razer Al-Sat</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">PUBG UC</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Steam</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Pazar</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Destekle</Nav.Link>
            </Col>
            <Col className="header-col">
              <Nav.Link href="#home">Ödeme</Nav.Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default index;
