import React, { useState } from "react";
import { useCouter } from "../../hooks/useCouter";
import "./index.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCouter();

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button className=" btn btn-primary" onClick={increment}>
        {" "}
        +1
      </button>
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>

      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
    </>
  );
};
