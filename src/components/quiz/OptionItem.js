import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedOption } from "../../actions/quizActions";

const OptionItem = (props) => {
  const { currentQuestion, selectedOptions } = useSelector(({ quiz }) => {
    return {
      currentQuestion: quiz.currentQuestion,
      selectedOptions: quiz.selectedOptions,
    };
  });
  let selectedClass = "";
  if (
    (props.optionNumber === "A" &&
      selectedOptions[parseInt(currentQuestion.id) - 1] === 1) ||
    (props.optionNumber === "B" &&
      selectedOptions[parseInt(currentQuestion.id) - 1] === 2) ||
    (props.optionNumber === "C" &&
      selectedOptions[parseInt(currentQuestion.id) - 1] === 3) ||
    (props.optionNumber === "D" &&
      selectedOptions[parseInt(currentQuestion.id) - 1] === 4)
  ) {
    selectedClass = "option-selected";
  }
  const dispatch = useDispatch();
  const changeOption = () => {
    if (props.optionNumber === "A") {
      dispatch(changeSelectedOption(1));
    } else if (props.optionNumber === "B") {
      dispatch(changeSelectedOption(2));
    } else if (props.optionNumber === "C") {
      dispatch(changeSelectedOption(3));
    } else {
      dispatch(changeSelectedOption(4));
    }
  };
  let currentOption;
  if (props.optionNumber === "A") {
    currentOption = currentQuestion.options[0];
  } else if (props.optionNumber === "B") {
    currentOption = currentQuestion.options[1];
  } else if (props.optionNumber === "C") {
    currentOption = currentQuestion.options[2];
  } else {
    currentOption = currentQuestion.options[3];
  }

  return (
    <div className={`option-item ${selectedClass}`} onClick={changeOption}>
      <div className="option-number">{props.optionNumber}</div>
      <div className="option-text"> {currentOption}</div>
    </div>
  );
};

export default OptionItem;
