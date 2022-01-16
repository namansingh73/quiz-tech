import React from "react";
import { useSelector } from "react-redux";

const Guidelines = () => {
  const { quizQuestions } = useSelector(({ quiz }) => {
    return {
      quizQuestions: quiz.quizQuestions,
    };
  });
  return (
    <div className="guidelines">
      <p>
        <span className="bold">&nbsp;1.</span>&emsp;This quiz consists of 12
        questions.
      </p>
      <p>
        <span className="bold">2.</span>&emsp;You have {quizQuestions.duration}{" "}
        minutes of time.
      </p>
      <p>
        <span className="bold">3.</span>&emsp;The top panel displays your
        progress
      </p>
      <p>
        <i className="fas fa-dot-circle intructions-icon grey"></i>&emsp;is the
        question you have not visited.
      </p>
      <p>
        <i className="fas fa-dot-circle intructions-icon red"></i>&emsp;is the
        question you have visited but not attempted.
      </p>
      <p>
        <i className="fas fa-dot-circle intructions-icon green"></i>&emsp;is the
        question you have attempted.
      </p>
      <p>
        <i className="fas fa-dot-circle intructions-icon blue"></i>&emsp;is the
        question you are currently at.
      </p>
      <p>
        <span className="bold">4.</span>&emsp;Click on begin test to begin test.
      </p>
      <p>
        <span className="bold">5.</span>&emsp;If you test was closed due to some
        uncertain circumstances, you can rebegin the test. But &emsp;&ensp; your
        time will not stop.
      </p>
      <p>
        <span className="bold">6.</span>&emsp;All the best for your quiz.
      </p>
    </div>
  );
};

export default Guidelines;
