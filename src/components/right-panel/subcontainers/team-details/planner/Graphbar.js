import React from "react";
import "./Planner.css";

function Graphbar(props) {
  return (
    <div className="graphBarContainer">
      <div
        className="graphBar"
        style={{
          background: `linear-gradient(0deg, ${props.color} ${props.completion}%,  rgba(241,240,250,1)  ${props.completion}%)`,
        }}
      ></div>
      <div className="increaseDecreaseButton">+</div>
      <div className="increaseDecreaseButton">-</div>
      <div className="graphBarDate">{props.date}</div>
    </div>
  );
}

export default Graphbar;
