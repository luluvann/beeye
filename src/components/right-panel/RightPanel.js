import React from "react";

import "./RightPanel.css";
import Tabs from "./subcontainers/Tabs"
import TabDetails from "./subcontainers/TabDetails"

function RightPanel() {
  return (
    <div className="rightPanelContainer">
      <h5>Tenue des journaux</h5>
      <Tabs />
      <TabDetails />
    </div>
  );
}

export default RightPanel;
