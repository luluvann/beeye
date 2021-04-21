import React from "react";

import SideBarMenuItems from "./SideBarMenuItems";

function SideBarMenu() {
  function clickHandler() {
      return console.log("clicked")
  }
  const items = SideBarMenuItems.map((item, index) => {
    return (
      <li key={index} onClick={clickHandler}>
        {item}
      </li>
    );
  });

  return <ul>{items}</ul>;
}

export default SideBarMenu;
