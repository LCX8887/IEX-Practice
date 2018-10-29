import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

export const requestPosts = () => ({
    type: REQUEST_POSTS,
  })
  
export const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    payload: json,
    receivedAt: Date.now()
  })
  
export const fetchPosts = () => dispatch => {
    dispatch(requestPosts());
    return fetch(`https://api.iextrading.com/1.0/ref-data/symbols`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }