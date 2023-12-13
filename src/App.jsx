import React from "react";
import Home from "./components/home.jsx";
import { Provider } from "react-redux";
import Store from "./components/store.js";
import { useSelector } from "react-redux";
function App() {
  const { c } = useSelector((state) => state.custom);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h3>{c}</h3> */}

      <Provider store={Store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
