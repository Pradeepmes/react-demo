import React from "react";

const Reactmemochild = React.memo(({ name }) => {
  console.log("Rendering Child");

  return (
    <div>
      <h1>Child Component: {name}</h1>
    </div>
  );
});

export default Reactmemochild;
