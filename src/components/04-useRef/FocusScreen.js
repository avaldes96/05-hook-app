import React from "react";
import "../02-useEfect/effects.css";

export const FocusScreen = () => {
  const handleClick = () => {
    document.querySelector("input").select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input className="form-control" placeholder="su nombre" />

      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
