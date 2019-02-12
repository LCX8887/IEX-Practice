import {
  ADD_TO_WATCH_LIST,
  DEL_FROM_WATCH_LIST,
  SELECT_DEPARTMENT,
  SELECT_SYMBOL,
  LOG_IN,
  LOG_OUT
} from "./actionTypes";

const initialState = {
  selectedSymbol: "",
  watchList: ["AAPL", "FB", "A"],
  selectedDepartment: "",
  signedUsers: [
    {
      username: "lcx",
      password: "123456",
      email: "kelsey.li7788@gmail.com",
      watchList: ["GE", "BABA"]
    },
    {
      username: "kesley",
      password: "987654",
      email: "kelsey.li@nexty.com.au",
      watchList: ["PEP", "LEE"]
    }
  ],
  loginUser: {}
};
const delFromWatchList = (watchList, target) => {
  var position = watchList.indexOf(target);
  var result = [];
  for (var i = 0; i < watchList.length; i++) {
    if (watchList[i] !== target) {
      result.push(watchList[i]);
    }
  }
  return result;
};
const matchSignedUsers = (signedUsers, loginUser) => {
  signedUsers.forEach(el => {
    if (
      el.username === loginUser.userName &&
      el.password === loginUser.password
    ) {
      return el;
    } else {
      return { information: "check username or password" };
    }
  });
};
const globalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SYMBOL:
      return {
        ...state,
        selectedSymbol: action.payload
      };
    case SELECT_DEPARTMENT:
      return {
        ...state,
        selectedDepartment: action.payload
      };
    case ADD_TO_WATCH_LIST:
      return {
        ...state,
        watchList: state.watchList.concat(action.payload)
      };
    case DEL_FROM_WATCH_LIST:
      return {
        ...state,
        watchList: delFromWatchList(state.watchList, action.payload)
      };
    case LOG_IN:
      return {
        ...state,
        loginUser: matchSignedUsers(state.signedUsers, action.payload)
      };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default globalsReducer;
