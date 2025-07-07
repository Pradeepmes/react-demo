import React, { useLayoutEffect } from "react";
import { useEffect } from "react";


function Allinone(){

    useEffect (()=>{
        console.log("loaded")
    },[])

    useLayoutEffect (()=>{
        console.log("use Layout loaded")
    },[])




    return (
        <div>
            <h1>here</h1>
        </div>

    )
}

export default Allinone