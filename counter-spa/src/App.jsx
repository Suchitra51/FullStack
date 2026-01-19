import './App.css';
import { useState } from "react";

function App() {
   const [count, setCount] = useState(0);
  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter SPA</h2>
      
      <p>Count: {count}</p>
      <p style={{ color: count > 0 ? "green" : "red" }}>
       Count: {count}
      </p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        -
    
      </button>
    </div>
  );
}

export default App;