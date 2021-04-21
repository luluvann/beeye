import {React, useState} from "react";

import SideBarMenuItems from "./SideBarMenuItems";
import MiddleContainer from "./MiddleContainer";
import "./SideBarMenu.css"

function SideBarMenu() {
  const [component,setComponent] = useState("tâches")

  const items = SideBarMenuItems.map((item, index) => {
    return (
      <li key={index} onClick={()=> {setComponent(item)}}>
        {item}
      </li>
    );
  });

  return (
    <div className="sideBarContainer">
      <div className="sideBarMenuMain">
        <div className="titles">
          <h4>Titre</h4>
          <h4>Client Name</h4>
        </div>
        <ul>{items}</ul>
      </div>  
      <div><MiddleContainer component={component}/></div>
    </div>
    );
}

export default SideBarMenu;
