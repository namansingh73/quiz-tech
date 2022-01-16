import {
  QUIZ_ENABLED,
  LOAD_QUIZ,
  TIMER_HOME,
  START_QUIZ,
  TIMER_QUIZ,
  CURRENT_QUESTION,
  SELECTED_OPTION,
  END_QUIZ,
  RESTART_QUIZ,
} from "./types";

export const selectOption = (name) => async (dispatch) => {
  dispatch({
    type: QUIZ_ENABLED,
    payload: name,
  });
};

export const loadQuiz = (data) => async (dispatch) => {
  dispatch({
    type: LOAD_QUIZ,
    payload: data,
  });
};

export const reduceTimer = (rem) => async (dispatch) => {
  dispatch({
    type: TIMER_HOME,
    payload: rem,
  });
};

export const startQuiz = (timeRem) => async (dispatch) => {
  dispatch({
    type: START_QUIZ,
    payload: timeRem,
  });
};

export const reduceTimerQuiz = (rem) => async (dispatch) => {
  dispatch({
    type: TIMER_QUIZ,
    payload: rem,
  });
};

export const changeCurrentQuestion = (id) => async (dispatch) => {
  dispatch({
    type: CURRENT_QUESTION,
    payload: id,
  });
};

export const changeSelectedOption = (num) => async (dispatch) => {
  dispatch({
    type: SELECTED_OPTION,
    payload: num,
  });
};

export const endQuiz = () => async (dispatch) => {
  dispatch({
    type: END_QUIZ,
  });
};

export const restartQuiz = () => async (dispatch) => {
  dispatch({
    type: RESTART_QUIZ,
  });
};
