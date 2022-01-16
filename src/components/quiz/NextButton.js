import React from "react";
import { changeCurrentQuestion } from "../../actions/quizActions";
import { useDispatch, useSelector } from "react-redux";

const NextButton = () => {
  const { currentQuestion } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion,
    };
  });
  const dispatch = useDispatch();
  const goToNext = () => {
    dispatch(changeCurrentQuestion(String(parseInt(currentQuestion.id) + 1)));
  };
  return (
    <button className="nav-button next-button" onClick={goToNext}>
      Next &rarr;
    </button>
  );
};

export default NextButton;
