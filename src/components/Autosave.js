import React, { useState, useEffect } from 'react';

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

export default function Autosave() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const debouncedFormData = useDebounce(formData, 1000); // auto-save after 1s pause

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Auto-save logic
  useEffect(() => {
    if (debouncedFormData.name || debouncedFormData.email) {
      saveForm(debouncedFormData);
    }
  }, [debouncedFormData]);

  const saveForm = (data) => {
    // Replace with real API call
    console.log("Auto-saving form data:", data);
    // axios.post('/api/save-form', data)
  };

  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
