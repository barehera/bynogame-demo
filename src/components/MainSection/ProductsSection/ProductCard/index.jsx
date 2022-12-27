import React, { useState } from "react";
import "./index.scss";

import { BsFillCartPlusFill } from "react-icons/bs";

const Index = ({ product }) => {
  const {
    image,
    title,
    description,
    discount,
    beforeDiscountPrice,
    afterDiscountPrice,
    pricePerHundredVp,
  } = product;

  const [quantity, setQuantity] = useState(1);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((quantity) => (quantity -= 1));
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity((quantity) => (quantity += 1));
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card-image" />
      <div className="product-card-body">
        <div>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
      <div className="product-card-price-section">
        <div>
          <del>{beforeDiscountPrice} &#8378;</del>
          <div className="discount-container">
            <p>-{discount?.toFixed(2)}%</p>
          </div>
        </div>

        <p>{afterDiscountPrice} &#8378;</p>
        <small>{pricePerHundredVp} &#8378; / 100 VP</small>
      </div>

      <div className="quantity-section">
        <button onClick={handleQuantityDecrease}>-</button>
        <input
          type="number"
          step={1}
          min={0}
          max={999}
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />
        <button onClick={handleQuantityIncrease}>+</button>
      </div>

      <button className="product-card-button">
        <BsFillCartPlusFill className="product-card-icon" />
      </button>
    </div>
  );
};

export default Index;
