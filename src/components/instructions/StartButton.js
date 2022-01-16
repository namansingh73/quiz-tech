import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../../actions/quizActions";

const StartButton = () => {
  const { timerStart, quizQuestions } = useSelector(({ quiz }) => {
    return {
      timerStart: quiz.timerStart,
      quizQuestions: quiz.quizQuestions,
    };
  });

  const dispatch = useDispatch();

  const loadDataForQuiz = () => {
    dispatch(startQuiz(parseInt(quizQuestions.duration)));
  };

  return (
    <div className="button-section">
      <button
        className={`button ${
          timerStart === 1 ? "button-enabled" : "button-disabled"
        }`}
        disabled={!(timerStart === 1)}
        onClick={loadDataForQuiz}
      >
        Start Quiz&nbsp;&nbsp;&nbsp;&#10148;
      </button>
    </div>
  );
};

export default StartButton;
