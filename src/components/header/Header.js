import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <li>
            <Link to="/">About</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/pizza">Home</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/user">Contact Us</Link>
          </li>
        </div>
      </div>
      <div>
        <h1>Naad Pizza</h1>
      </div>
    </div>
  );
};

export default Header;
