import { React, useState } from "react";
import SideBarMenuItems from "./SideBarMenuItems";

import NewSidebarMenuDetails from "./NewSidebarMenuDetails";
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
        <h5 className="title">Title</h5>
        <h5 className="clientName">Client Name</h5>
        <ul>{items}</ul>
      </div>
      <div className="sideBarMenuDetails">
        <NewSidebarMenuDetails component={component} />
      </div>
    </div>
  );
}

export default NewSidebarMenu;
