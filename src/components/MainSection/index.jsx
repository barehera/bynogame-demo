import React from "react";
import "./index.scss";

import InfoSection from "./InfoSection";
import ProductsSection from "./ProductsSection";

import { Col, Container, Row } from "react-bootstrap";

const Index = () => {
  return (
    <Row className="mt-4">
      <Col md={3} lg={3} xl={3} xxl={3}>
        <InfoSection />
      </Col>
      <Col md={9} lg={9} xl={9} xxl={9}>
        <ProductsSection />
      </Col>
    </Row>
  );
};

export default Index;
