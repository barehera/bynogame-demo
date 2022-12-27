import React from "react";
import "./index.scss";

import InfoSection from "./InfoSection";
import ProductsSection from "./ProductsSection";

import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../../hooks/useWindowSize";

const Index = () => {
  const { width } = useWindowSize();
  return (
    <Row className="mt-4 main-row">
      <Col lg={3} xl={3} xxl={3}>
        {width >= 991.98 && <InfoSection />}
      </Col>
      <Col lg={9} xl={9} xxl={9}>
        <ProductsSection />
      </Col>
    </Row>
  );
};

export default Index;
