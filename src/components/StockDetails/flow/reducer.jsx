import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_CHART,
  RECEIVE_PEERS,
  RECEIVE_POSTS_ERROR
} from "./actionTypes";

const initialState = {
  quote: {},
  book: {},
  company: {},
  chart: [],
  peers: [],
  peersData: {},

  isFetching: false,
  lastUpdated: null
};

const StockDetailsReducer = (state = initialState, action) => {
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
        quote: action.payload.quote,
        book: action.payload.book,
        company: action.payload.company,
        chart: action.payload.chart,
        peers: action.payload.peers,
        lastUpdated: action.receivedAt
      };
    case RECEIVE_POSTS_ERROR:
      return {
        quote: {},
        book: {},
        company: {},
        chart: [],
        peers: [],
        isFetching: false
      };
    case RECEIVE_CHART:
      return {
        ...state,
        isFetching: false,
        chart: action.payload
      };
    case RECEIVE_PEERS:
      return {
        ...state,
        isFetching: false,
        peersData: action.payload
      };
    default:
      return state;
  }
};

export default StockDetailsReducer;
