import React from "react";
import { useDispatch, useSelector } from "react-redux";

function home() {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => {
    return state.custom;
  });

  const addbtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subbtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  const addbtn20 = () => {
    dispatch({
      type: "incrementBy20",
      payload: 20,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>

      <button onClick={addbtn}>Increment</button>
      <br />
      <br />
      <button onClick={addbtn20}>Increment by 20</button>
      <br />
      {/* <h2>{c}</h2> */}
      <br />
      <button onClick={subbtn}>decrement</button>
    </div>
  );
}

export default home;
