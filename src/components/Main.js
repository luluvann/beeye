import React from "react";

import "./Main.css"

import Sidebar from "./sidebar/Sidebar";
import TasksList from "./tasks/TasksList";

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <TasksList />
    </div>
  );
}

export default Main;
