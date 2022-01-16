import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentQuestion } from "../../actions/quizActions";

const PrevButton = () => {
  const { currentQuestion } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion,
    };
  });
  const dispatch = useDispatch();
  const goToPrevious = () => {
    dispatch(changeCurrentQuestion(String(parseInt(currentQuestion.id) - 1)));
  };
  return (
    <button className="nav-button prev-button" onClick={goToPrevious}>
      &larr; Prev
    </button>
  );
};

export default PrevButton;
