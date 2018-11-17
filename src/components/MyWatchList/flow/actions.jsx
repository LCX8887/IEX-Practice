import{ DELETE_WATCH_LIST,ADD_WATCH_LIST } from './actionTypes';

export const deleteWatchList = (target) => ({
    type: DELETE_WATCH_LIST,
    payload:target,
})

export const addWatchList = (target) => ({
    type:ADD_WATCH_LIST,
    payload:target,
})
  
