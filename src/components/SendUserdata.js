import React, { useState } from 'react'

const SendUserdata = () => {

    const [email,setEmail]=useState('')
     const [password,setpassword]=useState('')

    const submiHandler =async (e)=>{
         e.preventDefault();
        const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN5Odz2EokBzEiDgtmPuWn_tz4toWipIQ",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })

        const data =await response.json();
        console.log(data)
        console.log(data.idToken)
        localStorage.setItem("token",data.idToken)

    }
  return (
    <div>
       <form onSubmit={submiHandler}>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>submit</button>
        </form>
      
    </div>
  )
}

export default SendUserdata
