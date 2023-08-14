import React, { useState, useEffect } from "react";

const formValue = { task: "" };

function Form({ tasks, addTask }) {
  const [form, setForm] = useState(formValue);
  useEffect(() => {
    setForm(formValue);
  }, [tasks]);

  const onChangeInput = (e) => {
    setForm({ ...form, task: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.task === "") {
      return false;
    }
    addTask([...tasks, form]);
    setForm("");
  };

  const clearAll = () => {
    addTask([]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input id="task-form"
          placeholder="Task name"
          value={form.task}
          onChange={onChangeInput}
        />
        <button>Add</button>
        <button className="clear-all" onClick={clearAll}>Clear All</button>
      </form>
        <button className="task-number">{tasks.length} items left</button>
    </div>
  );
}

export default Form;
