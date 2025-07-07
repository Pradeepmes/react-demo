import React from 'react'
import { useState, useEffect } from 'react'

const CustomHooks = (url) => {


  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
}

export default CustomHooks
