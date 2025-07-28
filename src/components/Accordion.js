import React from "react";
import { useState } from "react";

const data = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Accordion 2",
    content: "Content for accordion 2 goes here.",
  },
  {
    title: "Accordion Actions",
    content: "This could be actions like Save, Cancel, etc.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(index)}>
            <h3>{item.title}</h3>
            <span>{openIndex === index ? "close" :"open"}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
