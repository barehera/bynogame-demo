import React from "react";
import "./index.scss";

import { BsFillCartPlusFill } from "react-icons/bs";

const index = ({ product }) => {
  const { image, title, beforeDiscountPrice, price, currency } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card-image-search" />
      <div className="product-card-body">
        <h4>{title}</h4>
        <div>
          {beforeDiscountPrice ? <del>{beforeDiscountPrice}</del> : null}
          <p className="product-card-body-price">{price} &#8378;</p>
        </div>
      </div>
      {/* <button className="product-card-button">
        <BsFillCartPlusFill className="product-card-icon" />
      </button> */}
    </div>
  );
};

export default index;
