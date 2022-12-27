import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";

import SearchDropdown from "./SearchDropdown";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { Button, NavDropdown } from "react-bootstrap";

const Index = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleCloseDropdown = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Form.Group className="form-group">
        <Form.Control
          type="email"
          placeholder="Ara.."
          onFocus={handleOnFocus}
          className={`${isFocused && "focused-input"}`}
        />
        <AiOutlineSearch
          className={`${isFocused && "focused-icon"} search-icon`}
        />

        {isFocused ? (
          <AiOutlineClose
            onClick={handleCloseDropdown}
            className={` close-icon`}
          />
        ) : null}
        <Button className={`${isFocused && "focused-button"} form-button`}>
          Ara
        </Button>
        <SearchDropdown isFocused={isFocused} setIsFocused={setIsFocused} />
      </Form.Group>
    </>
  );
};

export default Index;
