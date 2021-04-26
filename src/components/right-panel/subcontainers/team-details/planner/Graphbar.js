import React from "react";
import "./Planner.css";

function Graphbar(props) {
  return (
    <div className="graphBarContainer">
      <div className="graphBar"></div>
      <div className="increaseDecreaseButton">
          +
      </div>
      <div className="increaseDecreaseButton">
          -
      </div>
      <div className="graphBarDate">
        {props.date}
      </div>
    </div>
  );
}

export default Graphbar;
