import React from "react";
import { useState, useEffect } from "react";

const DebounceWithAPISearch = () => {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState();

  useEffect(() => {
    const fetchFilteredPosts = async () => {
      fetch(`https://jsonplaceholder.typicode.com/users?q=${debouncedTerm}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    };

    if (debouncedTerm) {
      fetchFilteredPosts();
    }
  }, [debouncedTerm]);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedTerm(input);
    }, 2000);
  }, [input]);

  return (
    <div>
      <h1>Debounce with Rest API</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {user.map((item) => {
        return (
          <span>
            <br />
            {item.name}
            <br />
          </span>
        );
      })}
    </div>
  );
};

export default DebounceWithAPISearch;
