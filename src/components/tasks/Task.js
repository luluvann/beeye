import React from "react";

import Tasks from "./Tasks";

import "./Task.css";

function Task() {
  const task = Tasks.map((item, index) => {
    return (
      <div className="taskContainer">
        <div className="select">
          <input type="checkbox"></input>
        </div>
        <div className="task">
          <h5 className="taskDate">{item.date}</h5>
          <h5 className="taskTitle">{item.title}</h5>
          <h5 className="taskAuthor">{item.author}</h5>
          <h5 className="taskDocStatus">{item.docStatus}</h5>
        </div>
      </div>
    );
  });
  return <div>{task}</div>;
}

export default Task;
