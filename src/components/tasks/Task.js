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
          <h5 className="taskDate">{props.date}</h5>
          <h5 className="taskTitle">{props.title}</h5>
          <h5 className="taskAuthor">{props.author}</h5>
          <h5 className="taskDocStatus">{props.docStatus}</h5>
        </div>
      </div>
    );
}

export default Task;
