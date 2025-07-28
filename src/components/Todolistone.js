import React, { useEffect, useState } from "react";

function Todolistone() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");

  const clickHandler = () => {
    const newTask = {
      taskname: input,
      status: "pending",
    };
   if(input){
    setTodolist([...todolist, newTask]);
   setInput("");
    }
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("TodoListitem");
    if (storedTodos) {
      setTodolist(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TodoListitem", JSON.stringify(todolist));
  });

  const toggleStatus = (index) => {
    const updatedList = [...todolist];
    updatedList[index].status = updatedList[index].status === "pending" ? "completed" : "pending";
    setTodolist(updatedList);
  };

  const deleteItem = (index) =>{
      const updatedListone =[...todolist]
      updatedListone.splice(index,1)
      setTodolist(updatedListone)
  }

  return (
    <div>
      <h1>Todo List Task</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>

      <ul>
        {todolist.map((item, key) => (
          <li key={key}>
            <input
              type="checkbox"
              checked={item.status === "completed"}
              onChange={() => toggleStatus(key)}
            />
            <span
              style={{
                textDecoration:
                  item.status === "completed" ? "line-through" : "none",
              }}
            >
              {item.taskname}
            </span>
            ({item.status})
            <button onClick={()=>deleteItem(key)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolistone;
