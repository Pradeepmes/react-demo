import React, { useState, useTransition } from "react";

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

function UseTransition() {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(bigList);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const filteredItems = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredItems);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default UseTransition
