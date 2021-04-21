import React from "react";
import TasksList from "../tasks/TasksList";

function MiddleContainer(props) {
  const sectionName = props.component;

  return (
    <div className="middleContainer">
      <div className="title">{sectionName}</div>
      <div className="content">{sectionName === "Tâches" ? <TasksList /> : "" }</div>
    </div>
  );
}

export default MiddleContainer;
