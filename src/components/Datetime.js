import React, { useEffect, useState } from "react";

const Datetime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      const timer = setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>

      {date.toLocaleString()}
    </div>
  );
};

export default Datetime;
