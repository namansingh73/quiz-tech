import React from "react";
import Question from "./Question";
import Options from "./Options";

const QuestionAndOptions = () => {
  return (
    <div className="question-options">
      <Question />
      <Options />
    </div>
  );
};

export default QuestionAndOptions;
