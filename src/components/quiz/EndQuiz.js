import React from "react";
import { useDispatch } from "react-redux";
import { endQuiz } from "../../actions/quizActions";

const EndQuiz = () => {
  const dispatch = useDispatch();
  const showResult = () => {
    if (window.confirm("Are you sure you want to end the quiz?")) {
      dispatch(endQuiz());
    }
  };
  return (
    <button className="nav-button next-button" onClick={showResult}>
      End Quiz
    </button>
  );
};

export default EndQuiz;
