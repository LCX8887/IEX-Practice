import{ ADD_TO_WATCH_LIST,
        DEL_FROM_WATCH_LIST,
        SELECT_DEPARTMENT,
        SELECT_SYMBOL, } from './actionTypes';

export const selectDepartment = (department) => ({
    type: SELECT_DEPARTMENT,
    payload: department,
  })
  export const selectSymbol = (symbol) => ({
    type: SELECT_SYMBOL,
    payload: symbol,
  })
export const addToWatchList = (target) => ({
    type: ADD_TO_WATCH_LIST,
    payload: target,
})
export const delFromWatchList = (target) => ({
  type: DEL_FROM_WATCH_LIST,
  payload: target,
})
  
