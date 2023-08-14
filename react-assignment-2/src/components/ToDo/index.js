import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <div className="main-div">
      <Form addTask={setTasks} tasks={tasks} />
      <List tasks={tasks} addTask={setTasks} />
    </div>
  );
}

export default ToDo;
