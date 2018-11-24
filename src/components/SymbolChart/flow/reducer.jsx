import{ RECEIVE_POSTS,REQUEST_POSTS } from './actionTypes';

const initialState = {
    chartData:[],
   isFetching:false,
   lastUpdated:null,
 };


const SymbolChartReducer = (state = initialState, action) => {
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
                chartData:action.payload,
                lastUpdated:action.receivedAt,
            }
        default:
            return state;
    }
  };
  
  export default SymbolChartReducer;
  