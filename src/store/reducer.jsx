import { combineReducers } from 'redux';
import globalsReducer from './global/reducer';
import pageReducers from './pageReducers';

const makeRootReducer = () => combineReducers({
  global: globalsReducer, // 注入全局reducer
  ...pageReducers, // 注入页面级reducer
});

export default makeRootReducer;