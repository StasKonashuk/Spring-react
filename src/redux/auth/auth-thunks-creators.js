import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  logInSuccess,
  logInFail,
  logOut,
  signUpFail,
  signUp,
  setAuth
} from './auth-reducer';
import { authAPI } from '../../api/authApi';

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ userName, password }, { dispatch }) => {
    try {
      const data = await authAPI.login({ userName, password });
      if (data.status === 401) {
        dispatch(logInFail(data.data.message));
      }
      if (data.status === 200) {
        localStorage.setItem('access', data.data.accessToken);
        dispatch(
          logInSuccess({
            access: data.data.accessToken,
            refresh: data.data.refreshToken
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      const data = await authAPI.logout();
      if (data.status === 200) {
        dispatch(logOut());
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (values, { dispatch }) => {
    try {
      const data = await authAPI.signUp(values);
      if (data.status === 400) {
        const signUpErrors = JSON.parse(JSON.stringify(data.data.error));
        dispatch(
          signUpFail({
            signUpErrors
          })
        );
      }
      if (data.status === 401) {
        dispatch(signUp(data.data.message));
      }
      if (data.status === 200) {
        dispatch(signUp(data.data.message));
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { dispatch }) => {
    try {
      const response = await authAPI.refresh('/refresh_token');
      localStorage.setItem('access', response.accessToken);
      dispatch(setAuth(response.accessToken));
    } catch (error) {
      console.log(error);
    }
  }
);
