import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {addTodos} from './store'

const AddTodolist = () => {
  const [text, setText] = useState("");
 
  const dispatch=useDispatch()

  const handleAdd=()=>{
    if(!text) return
        dispatch(addTodos(text))
      
        setText('')
  }
  return (
    <div>
      <h1>add todolist</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddTodolist;
