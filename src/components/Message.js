import { useState } from "react";

export const Message=()=>{
    const [message,setMessage] =useState("welcome visitor")
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=>setMessage('thank u for subscribe')}>submit</button>
        </div>
    )
}