import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logininfo: [],
    singInLoading: false,
  },
  reducers: {
    loginUserReducer: (state, { payload }) => {
      state.singInLoading = payload.singInLoading;
      state.logininfo = payload.response;
    },
  },
});

export const { loginUserReducer } = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;
