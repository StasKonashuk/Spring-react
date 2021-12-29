import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInSuccess, logInFail } from './auth-reducer';

export const logIn = createAsyncThunk('auth/login', (data, { dispatch }) => {
  try {
    if (data.userName) {
      dispatch(logInSuccess(data.userName));
    }
  } catch (error) {
    dispatch(logInFail('Invalid username or password'));
  }
});
