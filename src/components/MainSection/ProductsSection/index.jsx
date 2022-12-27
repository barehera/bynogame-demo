import React from "react";
import "./index.scss";

import ProductCard from "./ProductCard";

import { products } from "./data";

const index = () => {
  return (
    <div className="products-section">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default index;
