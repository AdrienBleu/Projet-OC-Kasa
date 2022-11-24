import React from "react";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="text_tag">{getTag}</p>
    </div>
  );
};

export default Tags;