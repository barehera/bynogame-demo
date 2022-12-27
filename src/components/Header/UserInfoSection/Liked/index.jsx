import React from "react";
import "./index.scss";

import { AiOutlineHeart } from "react-icons/ai";

const index = () => {
  return (
    <div className="liked">
      <AiOutlineHeart className="liked-icon" />
    </div>
  );
};

export default index;
