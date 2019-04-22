import {
  ADD_TO_WATCH_LIST,
  DEL_FROM_WATCH_LIST,
  SELECT_DEPARTMENT,
  SELECT_SYMBOL,
  LOG_IN,
  LOG_OUT,
  IS_USER_EXIST,
  REGISTRATION,
} from './actionTypes';

export const selectDepartment = (department) => ({
  type: SELECT_DEPARTMENT,
  payload: department,
});
export const selectSymbol = (symbol) => ({
  type: SELECT_SYMBOL,
  payload: symbol,
});
export const addToWatchList = (target) => ({
  type: ADD_TO_WATCH_LIST,
  payload: target,
});
export const delFromWatchList = (target) => ({
  type: DEL_FROM_WATCH_LIST,
  payload: target,
});
export const logIn = (value) => ({
  type: LOG_IN,
  payload: value,
});
export const logOut = (value) => ({
  type: LOG_OUT,
  payload: value,
});
export const registration = (value) => ({
  type: REGISTRATION,
  payload: value,
});
