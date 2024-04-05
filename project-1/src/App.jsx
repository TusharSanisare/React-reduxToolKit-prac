import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counter/index";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">APP</div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log("increment btn clicked");
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          console.log("decrement btn clicked");
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </>
  );
};

export default App;
