import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduceTimerQuiz, endQuiz } from "../../actions/quizActions";

const Timer = () => {
  const { quizQuestions } = useSelector(({ quiz }) => {
    return {
      quizQuestions: quiz.quizQuestions,
    };
  });
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(
    parseInt(parseInt(quizQuestions.duration) * 60)
  );

  const timeRemainingMin = parseInt(timeLeft / 60);
  const timeRemainingSec = parseInt(timeLeft - timeRemainingMin * 60);

  useEffect(() => {
    if (timeLeft > 0) {
      const id = setTimeout(() => {
        dispatch(reduceTimerQuiz(timeLeft));
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    } else {
      dispatch(endQuiz());
    }
    //eslint-disable-next-line
  }, [timeLeft]);

  return (
    <div className="clock-timer">
      <i className="far fa-clock bold-medium"></i>
      <div className="clock-timer-value">
        <p className="large less-margin">
          0:{timeRemainingMin}:{timeRemainingSec}
        </p>
        <p className="small less-margin">Remaining</p>
      </div>
    </div>
  );
};

export default Timer;
