import React from "react";
import Timer from "./Timer";

const MidText = () => {
  return (
    <div className="mid-text">
      <h1>General Instructions</h1>
      <p className="small-light-text">
        Please read the general instructions carefully and then click on begin
        quiz to begin
      </p>
      <Timer />
    </div>
  );
};

export default MidText;
