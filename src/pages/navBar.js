import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/review">Review</Link>
      </h2>
      <h2>
        <Link to="/aboutUs">About Us</Link>
      </h2>
    </nav>
  );
};
