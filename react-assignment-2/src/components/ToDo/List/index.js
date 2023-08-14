import React, { useState } from "react";

function List({ tasks, addTask }) {
  const [checkedItems, setCheckedItems] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    const newCheckedItems = [...checkedItems];
    newCheckedItems.splice(index, 1);
    setCheckedItems(newCheckedItems);
    addTask(newTasks);
  };




  return (
    <div className="list-main">
      <ul>
        {tasks.map((item, i) => (
          <li key={i} className={checkedItems[i] ? "li-checked" : ""}>
            <div className="list-item-div mt-3 pl-5">
              <input className="checkbox"
                type="checkbox"
                checked={checkedItems[i]}
                onChange={() => handleCheckboxChange(i)}
              />
              <span className={checkedItems[i] ? "checked" : ""}>
                {item.task}
              </span>
              <button className="close-btn" onClick={() => handleRemoveTask(i)}>
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
