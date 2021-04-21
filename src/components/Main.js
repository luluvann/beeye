import React from "react";

import "./Main.css";

import Sidebar from "./sidebar/Sidebar";
import TasksList from "./tasks/TasksList";
import NewSidebar from "./newSidebar/NewSidebar";

function Main() {
  return (
    <div className="main">
      <NewSidebar />
    </div>
  );
}

export default Main;
