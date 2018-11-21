import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

export const requestPosts = () => ({
    type: REQUEST_POSTS,
  })
  
export const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    payload: json,
    receivedAt: Date.now()
  })
  
export const fetchSectors = () => dispatch => {
    dispatch(requestPosts());
    return fetch(`https://api.iextrading.com/1.0/stock/market/sector-performance`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }