import * as request from "../../../api/axiosClient";

export const login = async (uname: string, pwd: string) => {
  try {
    const res = await request.post(
      "/account-managers/login",
      {
        uname: uname,
        pwd: pwd,
        typeUsername: 0,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    return res;
  } catch (error: any) {
    console.log("err: ", error.message);
  }
};
