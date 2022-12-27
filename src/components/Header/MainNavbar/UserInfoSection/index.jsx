import React, { useState } from "react";
import "./index.scss";

import User from "./User";
import Cart from "./Cart";
import Notification from "./Notification";
import Liked from "./Liked";

const Index = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="user-info-section">
      {user ? (
        <>
          <Liked />
          <Notification />
        </>
      ) : null}

      <Cart />
      <User user={user} setUser={setUser} />
    </div>
  );
};

export default Index;
