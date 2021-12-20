import { actions } from './auth-actions-creators';

const checkCredentials = params => {
  if (params.userName.trim() !== 'admin' || params.password.trim() !== '1234') {
    return false;
  }
  return true;
};

export const logIn = params => {
  return dispatch => {
    if (checkCredentials(params)) {
      dispatch(actions.logIn(params));
    } else {
      dispatch(actions.logInFail('Invalid username or password'));
    }
  };
};
