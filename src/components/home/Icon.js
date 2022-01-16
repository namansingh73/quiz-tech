import React from "react";
import { selectOption } from "../../actions/quizActions";
import { useDispatch, useSelector } from "react-redux";

const Icon = (props) => {
  const dispatch = useDispatch();

  const { topic } = useSelector(({ quiz }) => {
    return {
      topic: quiz.currentTopic,
    };
  });

  const selectButton = () => {
    dispatch(selectOption(props.name));
  };

  return (
    <div
      className={`icon ${topic === props.name ? "icon-selected" : ""}`}
      onClick={selectButton}
    >
      <img
        src={`./images/${props.name}.png`}
        className="image-icons"
        alt="topic"
      ></img>
      <p>{props.name}</p>
    </div>
  );
};

export default Icon;
