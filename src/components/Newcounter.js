import React from "react";

import { useState } from "react";

function Newcounter() {
  /*const todolistItems = [
    { taskname: "task1", status: "pending" },
    { taskname: "task2", status: "completed" },
    { taskname: "task3", status: "completed" },
    { taskname: "task4", status: "pending" },
  ];*/

  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState();

  const addTodolist = () => {
    const nayatask = {
      id: 1,
      taskname: input,
      status: "completed",
    };
    setTodolist([...todolist, nayatask]);
  };

  const deleteItem = (index) => {
    const newTodos = [...todolist];
    newTodos.splice(index, 1);
    setTodolist(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTodolist}>add</button>
      <br/>
      {todolist.map((item, key) => (
        <span key={key}>
          {item.taskname}-{item.status}
          <br /> <button onClick={() => deleteItem(key)}>delete</button>
        </span>
      ))}
    </div>
  );
}

export default Newcounter;
