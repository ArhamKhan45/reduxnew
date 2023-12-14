import React from "react";
import { useDispatch } from "react-redux";

function home() {
  const dispatch = useDispatch();
  let tablenum = 10;

  const addbtn = () => {
    dispatch({
      type: "incrementByOne",
    });
  };
  const table = (tablenum) => {
    dispatch({
      type: "table",
      payload: tablenum,
    });
  };
  const subbtn = () => {
    dispatch({ type: "decrementByOne" });
  };

  const resetfunc = () => {
    dispatch({
      type: "reset",
    });
  };

  // if (tablenum == 0) {
  //   return (tablenum = prompt(
  //     "Enter the number you want to continue the table"
  //   ));
  // }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>

      <button onClick={addbtn}>Increment</button>
      <br />
      <br />
      <button onClick={() => table(tablenum)}>Table of 2</button>
      <br />
      <h2></h2>
      <br />
      <button onClick={subbtn}>decrement</button>
      <br />
      <br />
      <button onClick={resetfunc}>Reset All</button>
    </div>
  );
}

export default home;
