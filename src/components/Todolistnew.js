import React, { useEffect }  from "react";
import { useState } from "react";


function Todolistnew(){

    const [todolist,setTodolist]= useState([])
    const [input,setInput] = useState('')

    const submitHandler = ()=>{
        const newTask ={
            taskname:input,
            status:'pending'
        }
        setTodolist([...todolist,newTask]);

    }
    useEffect(()=>{
        localStorage.setItem("task",JSON.stringify(todolist))
    })
    useEffect(()=>{
        const getItems=localStorage.getItem("task");
        setTodolist(JSON.parse(getItems))
    })

    const toggleStatus =(index)=>{

        const updatedlist= [...todolist];
        updatedlist[index].status= updatedlist[index].status==="pending"?"completed":"pending";
        setTodolist(updatedlist)

    }

    return(
        <div>

            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={submitHandler}>add</button>
            <ul>
                {
                    todolist.map((item,key)=>(
                        <li key={key}>
                            <input type="checkbox" onChange={()=>toggleStatus(key)} checked={item.status==="completed"}/>
                           <span style={{textDecoration:item.status==="completed"? "line-through":"none"}}> {item.taskname}</span>
                            {item.status}
                        </li>
                    ))
                }
            </ul>

        </div>
    )

}

export default Todolistnew