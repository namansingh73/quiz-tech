import React from "react";
import OptionItem from "./OptionItem";
import { useSelector } from "react-redux";

const Options = () => {
  const { currentQuestion } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion,
    };
  });
  const arr = ["A", "B", "C", "D"].slice(0, currentQuestion.options.length);
  return (
    <div className="options-all">
      {arr.map((option) => (
        <OptionItem optionNumber={option} key={option} />
      ))}
    </div>
  );
};

export default Options;
