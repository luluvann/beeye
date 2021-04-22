import {React, useState} from "react";

import Task from "./Task";

function TasksList() {
    const [isChecked, setIsChecked] = useState("")

    function handleSelectAllClick(){
        isChecked === "" ? setIsChecked("true") : setIsChecked("")
    }
    

  return (
    <div>
      <div className="select">
        <input type="checkbox" onClick={handleSelectAllClick}></input>
        <h5>Sélectionner tout</h5>
      </div>
      <Task isChecked={isChecked}/>
    </div>
  );
}

export default TasksList;
