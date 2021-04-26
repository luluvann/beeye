import React from "react";
import "./Planner.css"
import GraphBar from "./Graphbar"
import Dates from "./Dates"
import { NavItem } from "react-bootstrap";

function Planner(){

    const graphBars = Dates.map(date => {
        return <GraphBar date={date}/>
    })

    return(
        <div className="plannerContainer">
            <div className="graph">
                {graphBars}
            </div>
            <div className="legend">
            </div>
        </div>
    )
}

export default Planner;