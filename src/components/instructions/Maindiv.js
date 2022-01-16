import React from "react";
import Header from "./Header";
import MidText from "../instructions/MidText";
import Guidelines from "./Guidelines";
import StartButton from "./StartButton";

const Maindiv = () => {
  return (
    <div className="main-div">
      <Header />
      <MidText />
      <Guidelines />
      <StartButton />
    </div>
  );
};

export default Maindiv;
