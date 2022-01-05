import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    errorMsg: '',
    isAuth: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    message: '',
    signUpErrors: {}
  },
  reducers: {
    logInSuccess(state, action) {
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
      state.errorMsg = '';
      state.isAuth = true;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
    },
    logOut(state) {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      state.isAuth = false;
      state.access = null;
      state.refresh = null;
    },
    logInFail(state, action) {
      state.isAuth = false;
      state.errorMsg = action.payload;
      state.access = null;
      state.refresh = null;
    },
    signUp(state, action) {
      state.message = action.payload;
    },
    signUpFail(state, action) {
      state.signUpErrors = action.payload.signUpErrors;
    },
    signUpRefresh(state) {
      state.message = null;
      state.signUpErrors = {};
    },
    setAuth(state, action) {
      state.access = action.payload;
      state.isAuth = true;
    }
  }
});

export const {
  logInSuccess,
  logOut,
  logInFail,
  signUp,
  signUpFail,
  signUpRefresh,
  setAuth
} = authSlice.actions;

export default authSlice.reducer;
