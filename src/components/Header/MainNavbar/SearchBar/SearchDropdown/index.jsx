import React, { useEffect, useRef } from "react";
import "./index.scss";

import ProductCard from "./ProductCard";

import { popularSearches, popularProducts } from "./data";

const Index = ({ isFocused, setIsFocused }) => {
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
