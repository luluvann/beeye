import React from "react";
import TabItems from "./TabItems";
import "./Tabs.css";

function Tabs() {
  const items = TabItems.map((item, index) => {
    return <li className={item.selected ? "" : "unselected"}>{item.title}</li>;
  });

  return <ul>{items}</ul>;
}

export default Tabs;
