import React, { useState, useEffect } from 'react';

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initial load: Fetch all posts
  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setResults(data); // Show all data initially
      } catch (error) {
        console.error('Error fetching initial data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 2000);

    return () => {
     // clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch filtered data
  useEffect(() => {
    const fetchFilteredPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedTerm}`);
        const data = await response.json();
        setResults(data); // jsonplaceholder returns array directly
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedTerm) {
      fetchFilteredPosts();
    } else {
      // If input is cleared, fetch all again
      const fetchAllPosts = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('Error fetching all data again:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchAllPosts();
    }
  }, [debouncedTerm]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        style={{ padding: '8px', width: '300px' }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debouncing;
