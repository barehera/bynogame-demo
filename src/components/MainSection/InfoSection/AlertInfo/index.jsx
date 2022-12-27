import React from "react";
import { Alert } from "react-bootstrap";
import { FiAlertCircle } from "react-icons/fi";
import "./index.scss";

const index = ({ text }) => {
  return (
    <Alert variant={"danger"} className="info-card-alert">
      <div>
        <FiAlertCircle className="info-card-alert-icon" />
      </div>
      <p>{text}</p>
    </Alert>
  );
};

export default index;
