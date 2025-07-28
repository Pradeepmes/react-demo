import React, { useState, useDeferredValue } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const UseDeferedValue = () => {
     const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseDeferedValue
