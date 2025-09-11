import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, status: "pending" });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = todo.status === "pending" ? "completed" : "pending";
      }
    },
  },
});

export const { addTodos, removeTodo, toggleStatus } = todoslice.actions;

export const store = configureStore({
  reducer: {
    todos: todoslice.reducer,
  },
});
