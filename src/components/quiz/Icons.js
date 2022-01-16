import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconItem from "./IconItem";
import { changeCurrentQuestion } from "../../actions/quizActions";

const Icons = () => {
  const { quizQuestions, currentQuestion, selectedOptions } = useSelector(
    ({ quiz }) => {
      return {
        quizQuestions: quiz.quizQuestions,
        currentQuestion: quiz.currentQuestion,
        selectedOptions: quiz.selectedOptions,
      };
    }
  );
  const dispatch = useDispatch();
  const clickedIconQuestion = (id) => {
    return () => {
      dispatch(changeCurrentQuestion(id));
    };
  };
  return (
    <div className="icons-questions">
      {quizQuestions.questions.map((question) => {
        let className;

        if (JSON.stringify(currentQuestion) === JSON.stringify(question)) {
          className = "blue";
        } else if (selectedOptions[parseInt(question.id) - 1] === -1) {
          className = "grey";
        } else if (selectedOptions[parseInt(question.id) - 1] === 0) {
          className = "red";
        } else {
          className = "green";
        }

        return (
          <IconItem
            className={className}
            key={question.id}
            onClick={clickedIconQuestion(question.id)}
          />
        );
      })}
    </div>
  );
};

export default Icons;
