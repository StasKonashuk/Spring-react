import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    errorMsg: '',
    isAuth: false
  },
  reducers: {
    logInSuccess(state, action) {
      state.user = {
        name: action.payload
      };
      state.errorMsg = '';
      state.isAuth = true;
    },
    logOut(state) {
      state.user = null;
      state.errorMsg = '';
      state.isAuth = false;
    },
    logInFail(state, action) {
      state.errorMsg = action.payload;
    }
  }
});

export const { logInSuccess, logOut, logInFail } = authSlice.actions;

export default authSlice.reducer;
