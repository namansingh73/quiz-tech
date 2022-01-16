import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedOption } from "../../actions/quizActions";

const Question = () => {
  const { quizQuestions, currentQuestion, selectedOptions } = useSelector(
    ({ quiz }) => {
      return {
        quizQuestions: quiz.quizQuestions,
        currentQuestion: quiz.currentQuestion,
        selectedOptions: quiz.selectedOptions,
      };
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedOptions[parseInt(currentQuestion.id) - 1] < 0) {
      dispatch(changeSelectedOption(0));
    }
    //eslint-disable-next-line
  }, [currentQuestion]);
  return (
    <div className="current-question">
      <div className="question-number">
        {currentQuestion.id} / {quizQuestions.questions.length}{" "}
      </div>
      <p className="question-text">{currentQuestion.question}</p>
    </div>
  );
};

export default Question;
