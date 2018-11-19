import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {
    quote:'',
   isFetching:false,
   lastUpdated:null,
 };


const SymbolHeaderReducer = (state = initialState, action) => {
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
                quote:action.payload.quote,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default SymbolHeaderReducer;
  