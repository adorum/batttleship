import React from "react";
import Ships from "./Ships";

const Stats = (props) => {
  const { ships, hits } = props;
  return (
    <div className="stats">
      <div className="score">
        <div className="player yellow col-6">
          <h2>{hits}</h2>
          <hr />
          <span>player1</span>
        </div>
        <div className="player green col-6">
          <h2>00</h2>
          <hr />
          <span>player 2</span>
        </div>
      </div>
      <Ships ships={ships} />
    </div>
  );
};

export default Stats;
