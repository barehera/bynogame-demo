import React from "react";
import "./index.scss";

import { AiOutlineBell } from "react-icons/ai";

const index = () => {
  return (
    <div className="notification">
      <AiOutlineBell className="notification-icon" />
    </div>
  );
};

export default index;
