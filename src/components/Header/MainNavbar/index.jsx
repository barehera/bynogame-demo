import React from "react";

import "./index.scss";

import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import useWindowSize from "../../../hooks/useWindowSize";
import logo from "../../../assets/brand/logo.png";
import SearchBar from "./SearchBar";
import UserInfoSection from "./UserInfoSection";

const Index = () => {
  const { width } = useWindowSize();

  return (
    <Navbar bg="#fff">
      <Container fluid="xxl" className="navbar-container">
        <div className="brand-section">
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          {width >= 768 && <SearchBar />}
          <UserInfoSection />
        </div>
        {width < 768 && <SearchBar />}
      </Container>
    </Navbar>
  );
};

export default Index;
