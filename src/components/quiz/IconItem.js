import React from "react";

const IconItem = ({ className, onClick }) => {
  return (
    <i
      className={`fas fa-dot-circle quiz-icons ${className}`}
      onClick={onClick}
    ></i>
  );
};

export default IconItem;
