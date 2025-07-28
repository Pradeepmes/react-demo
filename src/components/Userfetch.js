import React, { useEffect, useState } from "react";
import axios from 'axios'

const Userfetch = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    async function fetchUserdata(){
        
        const response =await axios.get("https://jsonplaceholder.typicode.com/users")
        setUserdata(response.data)

        }
    fetchUserdata();
  }, []);

  return (
    <div>
      {userdata.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Userfetch;
