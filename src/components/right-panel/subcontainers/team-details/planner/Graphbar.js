import React from "react";
import "./Planner.css";

function Graphbar({ properties }) {
  return (
    <div className="graphBarContainer">
      <div className="graphBarHighlight">
        <div
          className="graphBar"
          style={{
            background: `linear-gradient(0deg, ${
              properties.barColor ? properties.barColor : "rgba(241,240,250,1)"
            } ${properties.completion}%,  rgba(241,240,250,1)  ${
              properties.completion
            }%)`,
          }}
        ></div>
        <div className="increaseDecreaseButton">+</div>
        <div className="increaseDecreaseButton">-</div>
      </div>
      <div className="graphBarDate">{properties.date}</div>
    </div>
  );
}

export default Graphbar;
