import React from "react";
import hit from "../assets/Hit.png";
import miss from "../assets/Miss.png";
const Square = (props) => {
  const { onClick, x, y, state } = props;
  const handleClick = (x, y, state) => {
    if (state !== "miss" && state !== "hit") {
      onClick(x, y);
    }
  };

  return (
    <div onClick={() => handleClick(x, y, state)} className="square">
      {state === "miss" && (
        <img
          className="miss"
          alt="miss"
          width="auto"
          height="auto"
          src={miss}
        />
      )}
      {state === "hit" && (
        <img className="hit" alt="hit" width="auto" height="auto" src={hit} />
      )}
    </div>
  );
};

export default Square;
