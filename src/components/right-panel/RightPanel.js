import React from "react";

import "./RightPanel.css";
import Tabs from "./subcontainers/Tabs"

function RightPanel() {
  return (
    <div className="rightPanelContainer">
      <h5>Tenue des journaux</h5>
      <Tabs />
    </div>
  );
}

export default RightPanel;
