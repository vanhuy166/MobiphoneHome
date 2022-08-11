import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../constants/userConstants";

import request from "../../api/axiosClient";
interface userType {
  userName: string,
  password: string
}

export const loginAction = () => {
  return {
    type: FETCH_USER,
  };
};

export const loginActionSuccess = (user: userType) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const loginActionFailure = (errorMessage: any) => {
  return {
    type: FETCH_USER_FAILED,
    payload: errorMessage,
  };
};

export const getLogin = async (user: userType, dispatch: any) => {
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
      .then((res: any) => {
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
