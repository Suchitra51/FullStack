import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

function App() {
  return (
    <div>
      <h1>Multi-Page SPA Using Routing</h1>

      {/* Navigation Links */}
      <nav>
        <Link to="/page1">Page One</Link> |{" "}
        <Link to="/page2">Page Two</Link> |{" "}
        <Link to="/page3">Page Three</Link>
      </nav>

      {/* Route Mapping */}
      <Routes>
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
    </div>
  );
}

export default App;
