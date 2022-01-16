import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reduceTimer } from "../../actions/quizActions";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(15);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        dispatch(reduceTimer(timeLeft));
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    //eslint-disable-next-line
  }, [timeLeft]);
  return (
    <div className="clock-timer">
      <i className="far fa-clock bold-medium"></i>
      <div className="clock-timer-value">
        <p className="large less-margin">0:0:{timeLeft}</p>
        <p className="small less-margin">To Start</p>
      </div>
    </div>
  );
};

export default Timer;
