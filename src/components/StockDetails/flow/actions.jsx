import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_CHART,
  RECEIVE_PEERS,
  RECEIVE_POSTS_ERROR
} from "./actionTypes";

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
export const receivePeers = json => ({
  type: RECEIVE_PEERS,
  payload: json,
  receiveAt: Date.now()
});
export const receivePostsError = error => ({
  type: RECEIVE_POSTS_ERROR,
  payload: error
});

export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export const parseJSON = response => response.json();

export const fetchSymbolDetails = target => dispatch => {
  dispatch(requestPosts());
  return fetch(
    "https://api.iextrading.com/1.0/stock/" +
      target +
      "/batch?types=quote,book,company,peers,chart&range=1d"
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(
      response => {
        dispatch(receivePosts(response));
        dispatch(fetchPeers(target, response.peers));
      },
      error => dispatch(receivePostsError(error))
    );
};

export const fetchChart = (target, range) => dispatch => {
  return fetch(
    "https://api.iextrading.com/1.0/stock/" + target + "/chart/" + range
  )
    .then(response => response.json())
    .then(json => dispatch(receiveChart(json)));
};

export const fetchPeers = (target, arr) => dispatch => {
  const targetStr = target + "," + arr.join();
  return fetch(
    "https://api.iextrading.com/1.0/stock/market/batch?symbols=" +
      targetStr +
      "&types=stats"
  )
    .then(response => response.json())
    .then(json => dispatch(receivePeers(json)));
};
