import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <BrowserRouter>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/review">Review</Link>
        </h2>
        <h2>
          <Link to="/aboutUs">About Us</Link>
        </h2>
      </BrowserRouter>
    </nav>
  );
};
