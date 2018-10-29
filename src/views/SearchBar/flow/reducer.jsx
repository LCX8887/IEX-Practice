import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {   
   symbols:[],
   isFetching:false,
   lastUpdated:null,
 };


const SearchBarReducer = (state = initialState, action) => {
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
                symbols:action.payload,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default SearchBarReducer;
  