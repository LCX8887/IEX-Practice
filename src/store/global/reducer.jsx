import{ ADD_TO_WATCH_LIST,
        DEL_FROM_WATCH_LIST,
        SELECT_DEPARTMENT,
        SELECT_SYMBOL,  } from './actionTypes';

const initialState = {   
   selectedSymbol:'aapl',
   watchList:['AAPL'],
   selectedDepartment:'',
 };
 const delFromWatchList = (watchList,target) => {
    var position = watchList.indexOf(target);
    var result = [];
    for(var i=0;i<watchList.length;i++){
        if(watchList[i] !== target){
            result.push(watchList[i]);
        }
    }
    return result;
}

const globalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_SYMBOL:
            return {
                ...state,
               selectedSymbol:action.payload.toLowerCases(),
            };
        case SELECT_DEPARTMENT:
            return {
                ...state,
                selectedDepartment:action.payload,
            }
        case ADD_TO_WATCH_LIST:
            return {
                ...state,
                watchList:state.watchList.concat(action.payload),
            }
        case DEL_FROM_WATCH_LIST:
            return {
                ...state,
                watchList:delFromWatchList(state.watchList,action.payload),
            }
        default:
            return state;
    }
  };

  export default globalsReducer;
  