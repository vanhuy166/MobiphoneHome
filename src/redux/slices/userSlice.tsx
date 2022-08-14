import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as loginService from "../../modules/login/api";

const initialState = { status: "idle", isLogin: false };

interface userType {
  userName: string, password: string
}
export const fetchUserLogin = createAsyncThunk("/auth/login", async (user: userType) => {
  const res = await loginService.login(user.userName, user.password);
  if (res.body.accessToken) {
    localStorage.setItem("token", res.body.accessToken);
    return true;
  } else {
    return false;
  }
});

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogin = action.payload;
      });
  },
});



export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
