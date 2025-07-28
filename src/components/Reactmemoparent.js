import React from "react";
import { useState } from "react";
import Reactmemochild from "./Reactmemochild";

function Reactmemoparent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent comp</h1>
      <div>
        <Reactmemochild name="pradeep" />
        <div>
          {count}

          <button onClick={() => setCount(count + 1)}>click</button>
        </div>
      </div>
    </div>
  );
}

export default Reactmemoparent;
