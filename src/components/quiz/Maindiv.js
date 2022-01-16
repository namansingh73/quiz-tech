import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import Timer from "./Timer";
import QuestionAndOptions from "./QuestionAndOptions";
import ButtonSection from "./ButtonSection";

const Maindiv = () => {
  return (
    <div className="main-div">
      <Header />
      <Icons />
      <Timer />
      <QuestionAndOptions />
      <ButtonSection />
    </div>
  );
};

export default Maindiv;
