import React from "react";
import StartButton from "./StartButton";
import Icon from "./Icon";

const Icons = () => {
  const arr = ["HTML", "React.js", "Node.js", "DBMS", "OS", "DS_and_Algo"];
  return (
    <div className="icon-box">
      <div className="icons">
        {arr.map((name) => (
          <Icon name={name} key={name} />
        ))}
        <StartButton />
      </div>
    </div>
  );
};

export default Icons;
