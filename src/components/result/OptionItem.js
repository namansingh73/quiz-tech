import React from "react";
import { useSelector } from "react-redux";

const OptionItem = (props) => {
  const { selectedOptions } = useSelector(({ quiz }) => {
    return {
      selectedOptions: quiz.selectedOptions,
    };
  });

  let colorClass = "white-background";
  if (props.state === "wrong") {
    if (props.optionNumber === "A") {
      if (selectedOptions[parseInt(props.questionNumber) - 1] === 1) {
        colorClass = "red-background";
      } else if (props.correctOption === 1) {
        colorClass = "blue-background";
      }
    } else if (props.optionNumber === "B") {
      if (selectedOptions[parseInt(props.questionNumber) - 1] === 2) {
        colorClass = "red-background";
      } else if (props.correctOption === 2) {
        colorClass = "blue-background";
      }
    } else if (props.optionNumber === "C") {
      if (selectedOptions[parseInt(props.questionNumber) - 1] === 3) {
        colorClass = "red-background";
      } else if (props.correctOption === 3) {
        colorClass = "blue-background";
      }
    } else {
      if (selectedOptions[parseInt(props.questionNumber) - 1] === 4) {
        colorClass = "red-background";
      } else if (props.correctOption === 4) {
        colorClass = "blue-background";
      }
    }
  } else if (props.state === "blank") {
    if (props.optionNumber === "A" && props.correctOption === 1) {
      colorClass = "blue-background";
    } else if (props.optionNumber === "B" && props.correctOption === 2) {
      colorClass = "blue-background";
    } else if (props.optionNumber === "C" && props.correctOption === 3) {
      colorClass = "blue-background";
    } else if (props.optionNumber === "D" && props.correctOption === 4) {
      colorClass = "blue-background";
    }
  } else if (props.state === "right") {
    if (props.optionNumber === "A" && props.correctOption === 1) {
      colorClass = "green-background";
    } else if (props.optionNumber === "B" && props.correctOption === 2) {
      colorClass = "green-background";
    } else if (props.optionNumber === "C" && props.correctOption === 3) {
      colorClass = "green-background";
    } else if (props.optionNumber === "D" && props.correctOption === 4) {
      colorClass = "green-background";
    }
  }

  let currentOption;
  if (props.optionNumber === "A") {
    currentOption = props.options[0];
  } else if (props.optionNumber === "B") {
    currentOption = props.options[1];
  } else if (props.optionNumber === "C") {
    currentOption = props.options[2];
  } else {
    currentOption = props.options[3];
  }

  return (
    <div className={`option-solution ${colorClass}`}>
      <div className="option-number">{props.optionNumber}</div>
      <div className="option-text"> {currentOption}</div>
    </div>
  );
};

export default OptionItem;
