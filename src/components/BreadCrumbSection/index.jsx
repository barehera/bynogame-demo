import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./index.scss";

const index = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#" className="bread-link">
        Anasayfa
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" className="bread-link">
        Oyunlar
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" className="bread-link">
        Riot Games, RP, VP ve LoRa
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>
        Valorant Points
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default index;
