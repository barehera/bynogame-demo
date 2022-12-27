import React, { useState } from "react";
import "./index.scss";
import { BiUserCircle } from "react-icons/bi";

import userImage from "../../../../assets/image/user.webp";

const Index = ({ user, setUser }) => {
  const handleClick = () => {
    setUser((prev) => !prev);
  };

  return (
    <>
      {user ? (
        <div className="user-card" onClick={handleClick}>
          <img
            src={userImage}
            alt="User"
            onClick={handleClick}
            className="user-image"
          />
          <div>
            <p>Hesap</p>
            <small>Çağan Büy...</small>
          </div>
        </div>
      ) : (
        <div className="user-card" onClick={handleClick}>
          <BiUserCircle className="user-card-icon" />
          <div>
            <p>Giriş Yap</p>
            <small>veya kayıt ol</small>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
