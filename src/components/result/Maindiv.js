import React from "react";
import Header from "./Header";
import ResultText from "./ResultText";
import Progress from "./Progress";
import { useSelector } from "react-redux";
import EndButton from "./EndButton";
import Solutions from "./Solutions";
import { useState } from "react";

const Maindiv = () => {
  const [solutionsVisibility, setSolutions] = useState(false);
  const { quizQuestions, selectedOptions } = useSelector(({ quiz }) => {
    return {
      quizQuestions: quiz.quizQuestions,
      selectedOptions: quiz.selectedOptions,
    };
  });
  let percentage;
  const calculatePercentage = () => {
    let count = 0;
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i] === quizQuestions.questions[i].correctOption) {
        count++;
      }
    }
    percentage = count;
  };
  let totalSelected = 0;
  for (let i = 0; i < selectedOptions.length; i++) {
    if (selectedOptions[i] !== 0 || selectedOptions[i] !== -1) {
      totalSelected++;
    }
  }
  calculatePercentage();
  return (
    <div className="main-div">
      <Header />
      <div className="lower-result">
        <ResultText />
        <div className="progress-bar">
          <Progress
            percentage={parseInt((percentage / selectedOptions.length) * 100)}
            styles={{
              pathColor: "var(--color-yellow-light)",
              trailColor: "var(--color-grey-light-4)",
              textColor: "var(--color-grey-light-1)",
            }}
          />
        </div>
        <span className="info-text white-centre">
          Solved {totalSelected} / {selectedOptions.length}
        </span>
        <EndButton
          visibility={solutionsVisibility}
          setSolutions={setSolutions}
        />
        {solutionsVisibility && <Solutions />}
      </div>
    </div>
  );
};

export default Maindiv;
