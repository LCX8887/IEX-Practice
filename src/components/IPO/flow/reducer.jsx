import { RECEIVE_POSTS, REQUEST_POSTS } from "./actionTypes";

const initialState = {
  isFetching: false,
  lastUpdated: null,
  ipoData: {}
};

const IPOReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        ipoData: action.payload,
        isFetching: false,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export default IPOReducer;
