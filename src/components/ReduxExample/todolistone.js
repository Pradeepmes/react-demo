import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Todolistone = () => {
    const todos=useSelector((state) => state.todos)
   // const dispatch = useDispatch();
  return (
    <div>
        <ul>
      {
        todos.map((item)=>(
          <li>{item.text}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default Todolistone
