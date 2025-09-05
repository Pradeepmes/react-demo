import React, { use } from 'react'
import { useReducer } from 'react'

const initialState={
    name:'',
    email:'',
    age:''
}

const initialState1={
    count:0
}

function formReducer(state,action){
    switch(action.type){
        case "change-input":
            return {
                ...state,
                [action.field]:action.value
            }
        case 'reset':
            return initialState 
            default:
                return state 
    }
}

function reducer(state,action){
    switch(action.type){
        case "increament":
        return {
            count:state.count+1
        }
        case "decreament":
            return {
                count:state.count-1
            }

        default: 
        return state
    }
}

const Reducerexample = () => {

    const [formState,dispatch]= useReducer(formReducer,initialState)
    const [counter,dispatchone]=useReducer(reducer,initialState1 )

    const handleChange=(e)=>{
        dispatch({
            type:'change-input',
            field:e.target.name,
            value: e.target.value
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
         console.log("✅ Form Submitted:", formState);
     
    }

    const inc=()=>{
        dispatchone({
            type:"increament"
        })
    }
    const dec=()=>{
        dispatchone({
            type:"decreament"
        })
    }

  return (
    <div>
    {counter.count}
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>

    <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={formState.name} onChange={handleChange}/>
        <input type='text' name='email' value={formState.email} onChange={handleChange}/>
        <input type='text' name='age' value={formState.age} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
      
    </div>
  )
}

export default Reducerexample
