import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {   
   ipoCalendar:[],
   isFetching:false,
   lastUpdated:null,
 };


const IPOCalendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
               isFetching:true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching:false,
                ipoCalendar:action.payload.viewData,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default IPOCalendarReducer;
  