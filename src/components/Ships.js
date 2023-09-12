import React from "react";
import Points from "./Points";

const Ships = (props) => {
  const { ships } = props;
  return (
    <div className="ships">
      {ships.map((ship) => (
        <div key={ship.id} className="ship">
          <div>
            <img src={ship.img} alt="ship" className="ship-img" />
          </div>
          <Points hitPoints={ship.size - ship.hits} hits={ship.hits} />
        </div>
      ))}
    </div>
  );
};

export default Ships;
