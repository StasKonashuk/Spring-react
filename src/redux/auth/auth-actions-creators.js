import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from './auth-constants';

export const actions = {
  logIn: params => ({
    type: LOG_IN,
    payload: {
      name: params.userName
    }
  }),
  logOut: () => ({
    type: LOG_OUT
  }),
  logInFail: error => ({
    type: LOG_IN_FAILURE,
    payload: {
      errorMsg: error
    }
  })
};
