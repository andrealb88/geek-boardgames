import "./App.css";
//import { getAllCategories } from "./utils/api.js";
// import { getUsername } from "./utils/api.js";
//import { useState, useEffect } from "react";
import { Home } from "./pages/home/home.js";
import { Nav } from "./pages/navBar.js";
import { Reviews } from "./pages/review.js";
import { About } from "./pages/aboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <section className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutUs" element={<About />} />
          <Route path="review" elemnent={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
