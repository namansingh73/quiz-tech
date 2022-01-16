import React from "react";

const Question = (props) => {
  return (
    <div className="current-question">
      <div className="question-number">
        {props.question.id} / {props.questionLength}{" "}
      </div>
      <p className="question-text">{props.question.question}</p>
    </div>
  );
};

export default Question;
