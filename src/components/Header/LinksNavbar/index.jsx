import React from "react";
import "./index.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";
import NavLink from "./NavLİnk";

const index = () => {
  return (
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
          <NavLink label="Oyunlar" href="#home" />
          <NavLink label="Knight Online" href="#Knight Online" />
          <NavLink label="Skin" href="#Skin" />
          <NavLink label="Valorant VP" href="#Valorant VP" />
          <NavLink label="Razer Al-Sat" href="#Razer Al-Sat" />
          <NavLink label="PUBG UC" href="#PUBG UC" />
          <NavLink label="Steam" href="#Steam" />
          <NavLink label="Pazar" href="#Pazar" />
          <NavLink label="Destekle" href="#Destekle" />
          <NavLink label="Ödeme" href="#Ödeme" />
        </Row>
      </Container>
    </Navbar>
  );
};

export default index;
