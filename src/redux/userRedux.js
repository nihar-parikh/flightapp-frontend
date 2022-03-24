import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    signUpStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    signUpSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    signUpFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
