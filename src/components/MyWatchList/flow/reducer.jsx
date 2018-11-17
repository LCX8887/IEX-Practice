import{ DELETE_WATCH_LIST,ADD_WATCH_LIST } from './actionTypes';

const initialState = {   
    myWatchList:[],
 };

const deleteList = (myWatchList,item) => {
    var result = myWatchList.slice(0,myWatchList.length);
    for(var i=0;i<result.length;i++){
        if(result[i].symbol === item.symbol){
            result.splice(i,1);
        }
    }
    return result;
}
const MyWatchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_WATCH_LIST:
            return {
                ...state,
               myWatchList:deleteList(state.myWatchList,action.payload),
            };
        case ADD_WATCH_LIST:
            return {
                ...state,
                myWatchList:state.myWatchList.concat(action.payload),
            }
        default:
            return state;
    }
  };
  
  export default MyWatchListReducer;
  