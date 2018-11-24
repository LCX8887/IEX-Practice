import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {
   quote:{},
   company:{},
   isFetching:false,
   lastUpdated:null,
 };


const SymbolProfileReducer = (state = initialState, action) => {
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
                quote:action.payload.book.quote,
                company:action.payload.company,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default SymbolProfileReducer;
  