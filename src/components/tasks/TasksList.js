import {React, useState} from "react";

import Task from "./Task";

function TasksList() {
    const [checked, setCheck] = useState("")
    function handleSelectAllClick(){
        checked === "" ? setCheck("checked") : setCheck("")
    }
    
  return (
    <div>
      <div className="select">
        <input type="checkbox" onClick={handleSelectAllClick}></input>
        <h5>Sélectionner tout</h5>
      </div>
      <Task checked={checked}/>
    </div>
  );
}

export default TasksList;
