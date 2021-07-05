import { LOGIN_START, LOGIN_SUCCESS } from "../actions/index";

import { initialState } from "./index";

// fetchingFriends: false,
//   friends: [],
//   loggingIn: false,
//   error: null

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        fetchingFriends: false,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: false
      };
    default:
      return state;
  }
};
