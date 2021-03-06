import { React, useState } from "react";
import SideBarMenuItems from "./SideBarMenuItems";

import SidebarMenuDetails from "./SidebarMenuDetails";
import RightPanel from "../right-panel/RightPanel";
import "./Sidebar.css";

function SidebarMenu() {
  const [component, setComponent] = useState("Tâches");

  const items = SideBarMenuItems.map((item, index) => {
    return (
      <li
        className={component === item ? "clicked" : ""}
        key={index}
        onClick={() => {
          setComponent(item);
        }}
        
      >
        {item}
      </li>
    );
  });

  return (
    <div className="sideBarSubContainer">
      <div className="sideBarMenu">
        <h5 className="title">Titre</h5>
        <h6 className="clientName">Nom client</h6>
        <ul>{items}</ul>
      </div>
      <div className="sideBarMenuDetails">
        <SidebarMenuDetails component={component} />
      </div>
      <RightPanel />
    </div>
  );
}

export default SidebarMenu;
