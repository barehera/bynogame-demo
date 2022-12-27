import React from "react";

import { Col, Nav } from "react-bootstrap";

const index = ({ label, href }) => {
  return (
    <Col className="nav-link">
      <Nav.Link href={href}>{label}</Nav.Link>
    </Col>
  );
};

export default index;
