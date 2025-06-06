import React, { useEffect } from 'react'
import { useState } from 'react'


const Todolist = () => {
    const [task,setTask] =useState()
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response)=> response.json())
        .then((data)=> setTodos(data))
    },[])

    const addTask=()=>{
        debugger;
        if(task){

            const newTask = {
                userId: 1, // dummy value
                id: todos.length + 1, // or use Date.now() for uniqueness
                title: task,
                completed: false
              };
            setTodos([...todos,newTask])
            setTask("");
            console.log("here")
        }
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  return (
    <div>
      todolist
      <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addTask}>add task</button>


      <ul>
        {
            todos.map((item,key)=> {
            return <li key={item.id}>
                {item.title} 
                <button onClick={()=>removeTodo(key)}>delete</button>
                </li>
           })
        }

      </ul>
    </div>
  )
}

export default Todolist
