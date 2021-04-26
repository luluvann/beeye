import React from "react";

import TasksList from "../tasks/TasksList"

function SidebarMenuDetails(props) {
  const sectionName = props.component;

  return (
    <div>
      <h5 className="menuDetailsTitle">{sectionName}</h5>
      <div>
        {sectionName === "Tâches" ? <TasksList /> : "To be developed"}
      </div>
    </div>
  );
}

export default SidebarMenuDetails;
