import { RECEIVE_POSTS, REQUEST_POSTS } from "./actionTypes";

const initialState = {
  isFetching: false,
  lastUpdated: null
};

const SpecialListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.target]: action.payload,
        isFetching: false,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export default SpecialListReducer;
