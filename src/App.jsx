import React from "react";
import Home from "./components/home.jsx";
import { useSelector } from "react-redux";
// red;

function App() {
  const { num, count } = useSelector((state) => state.y);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{num}</h2>
      <Home />
    </div>
  );
}

export default App;
