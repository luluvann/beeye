import { React } from "react";

import "./Task.css";

function Task(props) {
 
    return (
      <div className="taskContainer" key={props.id}>
        <div className="select">
          <input
              id={props.id}
              type={props.type}
              onChange={props.onChange}
              checked={props.isChecked}
              />
        </div>
        <div className="task">
          <p className="taskDate">{props.date}</p>
          <p className="taskTitle">{props.title}</p>
          <p className="taskAuthor">{props.author}</p>
          <p className="taskDocStatus">{props.docStatus}</p>
        </div>
      </div>
    );
}

export default Task;
