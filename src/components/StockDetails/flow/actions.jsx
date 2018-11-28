import { RECEIVE_POSTS, REQUEST_POSTS, RECEIVE_CHART } from "./actionTypes";

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  payload: json,
  receivedAt: Date.now()
});
export const receiveChart = json => ({
  type: RECEIVE_CHART,
  payload: json,
  receiveAt: Date.now()
});
export const fetchSymbolDetails = target => dispatch => {
  dispatch(requestPosts());
  return fetch(
    "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,book,company,peers,chart&range=1d"
  )
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)));
};

export const fetchChart = (target, range) => dispatch => {
  dispatch(requestPosts());
  return fetch(
    "https://api.iextrading.com/1.0/stock/" + target + "/chart/" + range
  )
    .then(response => response.json())
    .then(json => dispatch(receiveChart(json)));
};
