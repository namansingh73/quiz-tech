import React from "react";
import { useDispatch } from "react-redux";
import { restartQuiz } from "../../actions/quizActions";

const EndButton = (props) => {
  const dispatch = useDispatch();
  const startAgain = () => {
    dispatch(restartQuiz());
  };
  const toggleVisibility = () => {
    props.setSolutions(!props.visibility);
  };
  return (
    <div className="end-button">
      <button className="play-again-button" onClick={startAgain}>
        Play Again
      </button>
      <span className="all-answers" onClick={toggleVisibility}>
        See answers
      </span>
    </div>
  );
};

export default EndButton;
