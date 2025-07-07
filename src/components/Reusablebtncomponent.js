import React from "react";

const Reusablebtncomponent = ({ lable, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{lable}</button>
    </div>
  );
};

export default Reusablebtncomponent;
