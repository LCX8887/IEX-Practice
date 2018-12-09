import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_POSTS_ERROR
} from "./actionTypes";

const initialState = {
  sectorData: [],
  isFetching: false,
  lastUpdated: null
};

const SectorDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        sectorData: action.payload,
        lastUpdated: action.receivedAt
      };
    case RECEIVE_POSTS_ERROR:
      return {
        sectorData: [],
        isFetching: false,
        lastUpdated: action.receivedAt
      };

    default:
      return state;
  }
};

export default SectorDetailsReducer;
