import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <h1>Default and Fallback Route</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Page One</Link> |{" "}
        <Link to="/page2">Page Two</Link>
      </nav>

      <Routes>
        {/* Default Route */}
        <Route path="/" element={<PageOne />} />

        {/* Normal Route */}
        <Route path="/page2" element={<PageTwo />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
