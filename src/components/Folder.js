// Folder.js
import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginLeft: "20px" }}>
        <div style={{ cursor: "pointer", fontWeight: "bold" }}  onClick={() => setExpand(!expand)} >
          📁 {explorer.name}
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: "15px" }}>
          {explorer.items.map((item) => (
            <Folder key={item.id} explorer={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div style={{ marginLeft: "35px" }}>📄 {explorer.name}</div>;
  }
};

export default Folder;
