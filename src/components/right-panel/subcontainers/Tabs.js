import React from "react";
import TabItems from "./TabItems";
import "./Tabs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tabs() {
  const items = TabItems.map((item, index) => {
    return <li key={index} className={item.selected ? "" : "unselected"}><div className="tabsIcon"><FontAwesomeIcon icon={item.icon} /></div> {item.title}</li>;
  });

  return <ul>{items}</ul>;
}

export default Tabs;
