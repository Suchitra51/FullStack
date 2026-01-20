import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <h2>Form SPA</h2>

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode " : "Dark Mode "}
      </button>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
