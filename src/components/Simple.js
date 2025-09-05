import React, { useEffect, useState } from "react";



const data = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Accordion 2",
    content: "Content for accordion 2 goes here.",
  },
  {
    title: "Accordion Actions",
    content: "This could be actions like Save, Cancel, etc.",
  },
];

function Simple(){
  const [tabindex,setTabindex]=useState(null)
  
 
const toggle =(index)=>{
   setTabindex(tabindex===index?null:index)
}

  
  return (
    <div>
      {
        data.map((item,key)=>(
          <div class="accordion-item">
            <div class="accordion-header" onClick={()=>toggle(key)}>
              {item.title}
              </div>
              
              {tabindex===key && <div class="accordion-body">
                {item.content}
              </div>
              }

          </div>

        ))
      }
      
    </div>

  )
}

export default Simple