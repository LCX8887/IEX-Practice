import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {   
   mostActive:[],
   isFetching:false,
   lastUpdated:null,
 };


const MostActiveReducer = (state = initialState, action) => {
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
                mostActive:action.payload,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default MostActiveReducer;
  