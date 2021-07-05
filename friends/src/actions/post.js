import axiosAuth from "../utils/axiosAuth";
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postFriend = newFriend => dispatch => {
  dispatch({ type: POST_START });
  axiosAuth()
    .post("http://localhost:5000/api/friends", newFriend)

    .then(res => {
      // console.log(res);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: POST_FAIL, payload: err });
    });
};
