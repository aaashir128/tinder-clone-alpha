import { IconButton } from "@material-ui/core";
import { ForumOutlined, Person } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Symbol.png"
        alt=""
      />
      
      <IconButton>
        <ForumOutlined />
      </IconButton>
    </div>
  );
}

export default Header;
