import React, { useEffect, useState } from 'react';

const Apifetch = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Your fake API from json-server
      .then((response) => response.json())
      .then((data) => {
        setMobiles(data);
        setLoading(false);
        setError(false)
      })
      .catch((error) => {
        console.error('Error fetching mobiles:', error);
        setLoading(false);
      });
  }, [mobiles]); // Empty dependency array = runs once on mount

  if (loading) return <p>Loading...</p>;

  if(error) return <p>true</p>

  return (
    <div>
      <h2>Mobiles List</h2>

      <ul>
        {mobiles.map((mobile) => (
          <li key={mobile.id}>
            <strong>{mobile.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apifetch;
