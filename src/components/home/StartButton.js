import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuiz } from "../../actions/quizActions";
import DbmsQuiz from "../../data/DbmsQuiz.json";
import DsAlgoQuiz from "../../data/DsAlgoQuiz.json";
import HtmlQuiz from "../../data/HtmlQuiz.json";
import NodeQuiz from "../../data/NodeQuiz.json";
import OsQuiz from "../../data/OsQuiz.json";
import ReactQuiz from "../../data/ReactQuiz.json";

const StartButton = () => {
  const { enabledHome, currentTopic } = useSelector(({ quiz }) => {
    return {
      enabledHome: quiz.enabledHome,
      currentTopic: quiz.currentTopic,
    };
  });

  const dispatch = useDispatch();

  const loadDataForQuiz = () => {
    let quizData;
    if (currentTopic === "DBMS") {
      quizData = DbmsQuiz;
    }
    if (currentTopic === "HTML") {
      quizData = HtmlQuiz;
    }
    if (currentTopic === "React.js") {
      quizData = ReactQuiz;
    }
    if (currentTopic === "Node.js") {
      quizData = NodeQuiz;
    }
    if (currentTopic === "OS") {
      quizData = OsQuiz;
    }
    if (currentTopic === "DS_and_Algo") {
      quizData = DsAlgoQuiz;
    }
    dispatch(loadQuiz(quizData));
  };

  return (
    <button
      className={`button ${enabledHome ? "button-enabled" : "button-disabled"}`}
      disabled={!enabledHome}
      onClick={loadDataForQuiz}
    >
      Start Quiz&nbsp;&nbsp;&nbsp;&#10148;
    </button>
  );
};

export default StartButton;
