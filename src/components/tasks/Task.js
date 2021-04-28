import { React } from "react";

import "./Task.css";

function Task(props) {
  const property = props.properties;
  return (
    <div className="taskContainer" key={property.id}>
      <div className="select">
        <input
          id={property.id}
          type={props.type}
          onChange={props.onChange}
          checked={props.isChecked}
        />
      </div>
      <div className="task">
        <p className="taskDate">{property.date}</p>
        <p className="taskTitle">{property.title}</p>
        <p className="taskAuthor">{property.author}</p>
        <p className="taskDocStatus">{property.docStatus}</p>
      </div>
    </div>
  );
}

export default Task;
