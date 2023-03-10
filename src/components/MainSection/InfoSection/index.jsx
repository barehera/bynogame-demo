import React from "react";
import { Card } from "react-bootstrap";
import "./index.scss";

import AlertInfo from "./AlertInfo";

const index = () => {
  return (
    <Card style={{ width: "18rem" }} className="info-section-card">
      <Card.Img
        variant="valorant"
        src="https://cdn.bynogame.com/images/1640289080958.jpeg"
        className="rounded-top"
      />
      <Card.Body>
        <Card.Title className="info-section-title">
          Valorant Points (VP)
        </Card.Title>
        <Card.Text className="info-section-text">
          Valorant, Riot Games tarafından geliştirilen çok oyunculu birinci
          şahıs nişancı (FPS) video oyunudur. Riot Games in bu tarzda
          geliştirdiği ilk oyundur. Valorant 5v5, yani beşe beş olarak taktiksel
          nişancılıkla doğaüstü güçlerin buluştuğu iki farklı takım arasında
          oynanır. Valorant size Türkçe desteğiyle birlikte istikrarlı, rekabet
          düzeyi yüksek ve yüksek hassasiyete sahip oyun deneyimi sunar. En iyi
          fiyatlarla Valorant Points almak için ByNoGame web sitesini takip
          edin.
        </Card.Text>
        <AlertInfo text="Bu ürünler sadece Türkiye sunucularında geçerlidir." />
        <AlertInfo
          text="Herhangi bir epin,
        alındıktan sonra bir başkasıyla değiştirilemez veya iade edilemez."
        />
      </Card.Body>
    </Card>
  );
};

export default index;
