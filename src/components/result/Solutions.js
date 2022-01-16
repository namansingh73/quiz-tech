import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
import Options from "./Options";

const Solutions = () => {
  const { quizQuestions } = useSelector(({ quiz }) => {
    return {
      quizQuestions: quiz.quizQuestions,
    };
  });
  return (
    <div className="question-options white-background solutions-tab">
      {quizQuestions.questions.map((question) => {
        return (
          <Fragment>
            <Question
              key={question.id}
              question={question}
              questionLength={quizQuestions.questions.length}
            />
            <Options
              questionNumber={question.id}
              optionLength={question.options.length}
              options={question.options}
              correctOption={question.correctOption}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Solutions;
