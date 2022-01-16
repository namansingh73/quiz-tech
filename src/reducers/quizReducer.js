import {
  LOAD_QUIZ,
  QUIZ_ENABLED,
  START_QUIZ,
  TIMER_HOME,
  TIMER_QUIZ,
  CURRENT_QUESTION,
  SELECTED_OPTION,
  END_QUIZ,
  RESTART_QUIZ,
} from "../actions/types";

const initialState = {
  quizQuestions: null,
  currentTopic: "",
  enabledHome: false,
  currentQuestion: null,
  appState: "initial",
  timerStart: 15,
  timerQuiz: -1,
  selectedOptions: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_ENABLED:
      return {
        ...state,
        enabledHome: true,
        currentTopic: action.payload,
      };
    case LOAD_QUIZ:
      return {
        ...state,
        quizQuestions: action.payload,
        appState: "instructions",
      };
    case TIMER_HOME:
      return {
        ...state,
        timerStart: action.payload,
      };
    case START_QUIZ:
      return {
        ...state,
        appState: "quizStarted",
        timerQuiz: action.payload * 60,
        currentQuestion: state.quizQuestions.questions[0],
        selectedOptions: new Array(state.quizQuestions.questions.length).fill(
          -1
        ),
      };
    case TIMER_QUIZ:
      return {
        ...state,
        timerQuiz: action.payload,
      };
    case CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: state.quizQuestions.questions.find(
          (question) => question.id === action.payload
        ),
      };
    case SELECTED_OPTION:
      let temp = [...state.selectedOptions];
      temp[parseInt(state.currentQuestion.id) - 1] = action.payload;
      return {
        ...state,
        selectedOptions: temp,
      };
    case END_QUIZ:
      return {
        ...state,
        appState: "quizEnded",
      };
    case RESTART_QUIZ:
      return {
        ...state,
        quizQuestions: null,
        currentTopic: "",
        enabledHome: false,
        currentQuestion: null,
        appState: "initial",
        timerStart: 15,
        timerQuiz: -1,
        selectedOptions: null,
      };
    default:
      return state;
  }
};

export default Reducer;
