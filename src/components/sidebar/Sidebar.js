import React from "react";
import "./Sidebar.css";
import SideBarMenu from "./SideBarMenu"

function Sidebar() {
  return (
    <div className="sideBarContainer">
      <div className="titles">
        <h4>Titre</h4>
        <h4>Client Name</h4>
      </div>
      <SideBarMenu />
    </div>
  );
}

export default Sidebar;
