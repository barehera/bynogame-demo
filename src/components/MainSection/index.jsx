import React from "react";
import "./index.scss";

import InfoSection from "./InfoSection";
import ProductsSection from "./ProductsSection";

import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";

const Index = () => {
  const { width } = useWindowSize();

  let showInfoSection = width >= 991.98 || width <= 475.98;

  return (
    <Row className="mt-4 main-row">
      <Col lg={3} xl={3} xxl={3}>
        {showInfoSection && <InfoSection />}
      </Col>
      <Col lg={9} xl={9} xxl={9}>
        <ProductsSection />
      </Col>
    </Row>
  );
};

export default Index;
