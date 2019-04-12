import { combineReducers } from "redux";
import { fetchdataReducer } from "./fetchdataReducer";
import { loginReducer } from "./loginReducer";

export const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export default combineReducers({
  data: fetchdataReducer,
  login: loginReducer
});
