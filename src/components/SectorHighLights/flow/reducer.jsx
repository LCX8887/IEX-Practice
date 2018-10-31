import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {   
   sectors:[],
   isFetching:false,
   lastUpdated:null,
 };


const SectorPerformanceReducer = (state = initialState, action) => {
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
                sectors:action.payload,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default SectorPerformanceReducer;
  