// import "./App.css";
// import { Home } from "./components/pages/home/home.js";
// import { Nav } from "./components/pages/navbar/navBar.js";
// import { Reviews } from "./components/pages/review.js";
// import { About } from "./components/pages/aboutUs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";

// function App() {
//   return (
//     <section className="App">
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} exact />
//           <Route path="aboutUs" element={<About />} />
//           <Route path="review" element={<Reviews />} />
//         </Routes>
//       </BrowserRouter>
//     </section>
//   );
// }

// export default App;

import "./App.css";
import { Home } from "./components/pages/home/home.js";
import { Nav } from "./components/pages/navbar/navBar.js";
import { Reviews } from "./components/pages/review.js";
import { About } from "./components/pages/aboutUs";
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </section>
  );
}

export default App;
