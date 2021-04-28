import React from "react";
import "./Planner.css";
import GraphBar from "./Graphbar";
import Dates from "./Dates";

function Planner() {
  const graphBars = Dates.map((item) => {
    return <GraphBar date={item.date} completion={item.completion} color={item.barColor ? item.barColor : "rgba(241,240,250,1)"}/>;
  });

  return (
    <div className="plannerContainer">
      <div className="graph">{graphBars}</div>
      <div className="legend">
        <div className="dateRange">
          <a href="#">
            &#8249;
          </a>
          <p>11/11/2020 - 11/11/2020</p>
          <a href="#">
            &#8250;
          </a>
        </div>
        <div className="legendDetails">
          <p>Budget restant</p>
          <p>Disponibilité restante</p>
          <p>Planifié sur d'autres tâches</p>
          <p>Planifié sur cette tâche</p>
        </div>
      </div>
    </div>
  );
}

export default Planner;
