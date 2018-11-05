import{
  RECEIVE_POSTS,
  REQUEST_POSTS,
  
} from './actionTypes';

export const requestPosts = () =>  ({
  type: REQUEST_POSTS,
})

export const receivePosts = (json,target) => ({
  type: RECEIVE_POSTS,
  payload: json,
  target:target,
  receivedAt: Date.now()
})
  
export const fetchPosts = (target) => dispatch => {
    dispatch(requestPosts());
    return fetch(`https://api.iextrading.com/1.0/stock/market/`+target)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json,target)))
  }