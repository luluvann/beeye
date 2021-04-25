import { React, useState } from "react";
import SideBarMenuItems from "./SideBarMenuItems";

import NewSidebarMenuDetails from "./NewSidebarMenuDetails";
import RightPanel from "../right-panel/RightPanel";
import "./newSidebar.css";

function NewSidebarMenu() {
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
        <h5 className="clientName">Nom client</h5>
        <ul>{items}</ul>
      </div>
      <div className="sideBarMenuDetails">
        <NewSidebarMenuDetails component={component} />
      </div>
      <RightPanel />
    </div>
  );
}

export default NewSidebarMenu;
