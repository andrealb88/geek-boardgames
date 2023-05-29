// import React from "react";
// import { Link } from "react-router-dom";
// import "./navBar.css";

// export const Nav = () => {
//   return (
//     <nav className="nav">
//       <i class="bi bi-menu-button-fill"></i>
//       <button
//         class="navbar-toggle"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbar-collapse"
//       >
//         <h2>
//           <Link to="/">Home</Link>
//         </h2>
//         <h2>
//           <Link to="/review">Review</Link>
//         </h2>
//         <h2>
//           <Link to="/aboutUs">About Us</Link>
//         </h2>
//       </button>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <ul className="navbar-nav-full">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">
            Review
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutUs">
            About Us
          </Link>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <i className="bi bi-menu-button-fill"></i>
        {showMenu && (
          <div className="navbar-collapse" id="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </nav>
  );
};
