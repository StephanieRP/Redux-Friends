import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
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
    default:
      return state;
  }
};
