import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {   
   ipoToday:[],
   isFetching:false,
   lastUpdated:null,
 };


const IPOTodayReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
               isFetching:true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                ipoToday:action.payload.viewData,
                isFetching:false,
                lastUpdated:action.receivedAt,
            };
        default:
            return state;
    }
  };
  
  export default IPOTodayReducer;
  