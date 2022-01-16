import React from "react";
import { useSelector } from "react-redux";

const ResultText = () => {
  const { currentTopic } = useSelector(({ quiz }) => {
    return {
      currentTopic: quiz.currentTopic,
    };
  });
  return (
    <div className="result-text">
      <span className="info-text">Kudos</span>
      <h1 className="heading-text">COMPLETED</h1>
      <span className="info-text">The {currentTopic} Quiz</span>
    </div>
  );
};

export default ResultText;
