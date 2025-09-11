import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleStatus } from "./store";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.status === "completed" ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>

            <label>
              <input
                type="checkbox"
                checked={todo.status === "completed"}
                onChange={() => dispatch(toggleStatus(todo.id))}
              />
              <span style={{ marginLeft: "6px" }}>{todo.status}</span>
            </label>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
