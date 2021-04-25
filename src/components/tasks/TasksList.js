import { React, useState, useEffect } from "react";

import Task from "./Task";
import Tasks from "./Tasks";

function TasksList() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Tasks);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const onChange = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const allTasks = list.map((item) => {
    return (
      <>
        <Task
          key={item.id}
          type="checkbox"
          onChange={onChange}
          id={item.id}
          date={item.date}
          title={item.title}
          author={item.author}
          docStatus={item.docStatus}
          isChecked={isCheck.includes(item.id)}
        />
      </>
    );
  });

  return (
    <div>
      <div className="select">
        <input type="checkbox" onChange={handleSelectAll} ></input>
        <h5>Sélectionner tout</h5>
      </div>
      {allTasks}
    </div>
  );
}

export default TasksList;
