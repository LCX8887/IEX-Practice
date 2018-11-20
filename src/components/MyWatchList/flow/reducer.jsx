import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {
    myWatchList:{},   
    isFetching:false,
 };

const MyWatchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
               isFetching:true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                myWatchList:action.payload,
                isFetching:false,
            }
        default:
            return state;
    }
  };
  
  export default MyWatchListReducer;
  