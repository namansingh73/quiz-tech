import React from "react";
import OptionItem from "./OptionItem";
import { useSelector } from "react-redux";

const Options = (props) => {
  const arr = ["A", "B", "C", "D"].slice(0, props.optionLength);
  const { selectedOptions } = useSelector(({ quiz }) => {
    return {
      selectedOptions: quiz.selectedOptions,
    };
  });
  let state;
  if (
    selectedOptions[parseInt(props.questionNumber) - 1] === -1 ||
    selectedOptions[parseInt(props.questionNumber) - 1] === 0
  ) {
    state = "blank";
  } else if (
    props.correctOption === selectedOptions[parseInt(props.questionNumber) - 1]
  ) {
    state = "right";
  } else {
    state = "wrong";
  }

  return (
    <div className="options-all margin-whitebg">
      {arr.map((option) => {
        return (
          <OptionItem
            optionNumber={option}
            key={option}
            options={props.options}
            questionNumber={props.questionNumber}
            state={state}
            correctOption={props.correctOption}
          />
        );
      })}
    </div>
  );
};

export default Options;
