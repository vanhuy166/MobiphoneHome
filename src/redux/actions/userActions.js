import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../constants/userConstants";

import request from "../../api/axiosClient";

export const loginAction = () => {
  return {
    type: FETCH_USER,
  };
};

export const loginActionSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const loginActionFailure = (errorMessage) => {
  return {
    type: FETCH_USER_FAILED,
    payload: errorMessage,
  };
};

export const getLogin = async (user, dispatch) => {
  console.log(user);
  try {
    dispatch(loginAction());
    const response = await request
      .post(
        "/account-managers/login",
        {
          uname: user.userName,
          pwd: user.password,
          typeUsername: 0,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem(
          "token",
          JSON.stringify(res.data.body.accessToken)
        );
        dispatch(loginActionSuccess(res));
        return true;
      })
      .catch((err) => {
        dispatch(loginActionFailure(err));
        return false;
      });
    return response;
  } catch (error) {
    console.log(error);
    dispatch(loginActionFailure(error));
    return false;
  }
};

// export const logoutAction = () => {
//   return {
//     type: LOGOUT_REQUEST,
//   };
// };
