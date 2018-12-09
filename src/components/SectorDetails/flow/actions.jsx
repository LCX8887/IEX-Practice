import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
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

export const fetchSectorDetails = target => dispatch => {
  dispatch(requestPosts());
  return fetch(
    "https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=" +
      target
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(
      response => {
        dispatch(receivePosts(response));
      },
      error => dispatch(receivePostsError(error))
    );
};
