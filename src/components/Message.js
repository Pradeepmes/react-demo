import { useState } from "react";

export const Message=()=>{
    const [message,setMessage] =useState("welcome visitor")

    const HandleClick =()=>{
            setMessage('thank u for subscribe')
    }
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={HandleClick}>submit</button>
        </div>
    )
}