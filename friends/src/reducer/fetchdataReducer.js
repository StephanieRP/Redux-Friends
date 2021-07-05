import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  POST_START,
  POST_SUCCESS,
  POST_FAIL
} from "../actions/index";

import { initialState } from "./index";

export const fetchdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: null,
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      // console.log(state);
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: "Something went wrong",
        fetchingFriends: false
      };

    // Add New Friends

    case POST_START:
      return {
        ...state,
        savingFriends: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        savingFriends: false,
        friends: action.payload
      };
    case POST_FAIL:
      return {
        ...state,
        error: "Something went wrong",
        savingFriends: false
      };
    default:
      return state;
  }
};
