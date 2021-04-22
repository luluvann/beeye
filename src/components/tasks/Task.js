import { React, useState } from "react";

import Tasks from "./Tasks";

import "./Task.css";

function Task(props) {
 
  const task = Tasks.map((item, index) => {
    function handleClick() {
      Tasks[index].checked === ""
        ? (Tasks[index].checked = "true")
        : (Tasks[index].checked = "");
    }
    
    const isChecked = props.isChecked

    return (
      <div className="taskContainer" key={index}>
        <div className="select">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={handleClick}
          ></input>
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
