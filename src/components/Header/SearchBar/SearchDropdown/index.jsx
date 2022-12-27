import React, { useEffect, useRef } from "react";
import "./index.scss";

import ProductCard from "./ProductCard";

// import useOutsideAlerter from "../../../../hooks/useOutsideAlerter";

const Index = ({ isFocused, setIsFocused }) => {
  const popularSearches = [
    { id: "123", text: "Knight Online GB Alım Satım ve Gold Bar" },
    { id: "124", text: "Valorant Points" },
    { id: "125", text: "PUBG Mobile Unknown Cash" },
    { id: "126", text: "CS:GO Skin" },
  ];

  const popularProducts = [
    {
      id: "987",
      image:
        "https://cdn.bynogame.com/banner/knight-online-felis-1667459702364.webp",
      title: "Knight Online Felis Gold Bar 100M (Yeni)",

      price: 599.99,
    },
    {
      id: "986",
      image:
        "https://cdn.bynogame.com/banner/knight-online-pandora-1667459655856.webp",
      title: "Knight Online Pandora Gold Bar 100M (Yeni)",

      price: 569.99,
    },
    {
      id: "985",
      image: "https://cdn.bynogame.com/images/1640291136367.jpeg",
      title: "Knight Online 400 Cash",

      price: 87.5,
    },
    {
      id: "984",
      image:
        "https://cdn.bynogame.com/banner/knight-online-agartha-1667459682644.webp",
      title: "Knight Online 400 Cash",

      price: 579.99,
    },
  ];

  return (
    <div className={`${isFocused ? "visible" : "hidden"} search-dropdown`}>
      <header className="search-dropdown-header">
        <h4 className="header-title">Popüler Aramalar:</h4>
        <div className="header-popular-search-container">
          {popularSearches.map((popularSearch) => (
            <p className="header-popular-search-text" key={popularSearch.id}>
              {popularSearch.text}
            </p>
          ))}
        </div>
      </header>
      <div className="search-dropdown-body">
        <h4 className="body-title">Popüler Ürünler:</h4>
        <div className="body-popular-products-container">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
