import React from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import EndQuiz from "./EndQuiz";
import { useSelector } from "react-redux";

const ButtonSection = () => {
  const { quizQuestions, currentQuestion } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion,
      quizQuestions: quiz.quizQuestions,
    };
  });
  return (
    <div className="btn-section">
      {currentQuestion.id !== "1" && <PrevButton />}
      {parseInt(currentQuestion.id) !== quizQuestions.questions.length && (
        <NextButton />
      )}
      {parseInt(currentQuestion.id) === quizQuestions.questions.length && (
        <EndQuiz />
      )}
    </div>
  );
};

export default ButtonSection;
