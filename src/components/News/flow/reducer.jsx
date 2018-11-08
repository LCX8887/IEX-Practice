import{
    RECEIVE_POSTS,
    REQUEST_POSTS,
  } from './actionTypes';

const initialState = {
    news:[],
   isFetching:false,
   lastUpdated:null,
 };


const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
               isFetching:true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                news:action.payload,
                isFetching:false,
                lastUpdated:action.receivedAt,
            };
        default:
            return state;
    }
  };
  
  export default NewsReducer;
  