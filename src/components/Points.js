import React from "react";
import hitSmall from "../assets/Hit small.png";
import missSmall from "../assets/Miss small.png";

const Points = (props) => {
  const { hitPoints, hits } = props;
  let hitPointsCounter = [];
  let hitCounter = [];
  for (let i = 0; i < hitPoints; i++) {
    hitPointsCounter.push(
      <span key={i}>
        <img src={missSmall} className="point" alt="point" />
      </span>
    );
  }
  for (let j = 0; j < hits; j++) {
    hitCounter.push(
      <span key={j}>
        <img src={hitSmall} className="point" alt="point" />
      </span>
    );
  }
  return (
    <div className="points">
      {hitPointsCounter}
      {hitCounter}
    </div>
  );
};

export default Points;
