import { actions } from './auth-actions-creators';
import { authAPI } from '../../api/api';

export const logIn = params => {
  return async dispatch => {
    try {
      const data = await authAPI.login(params.userName, params.password);
      if (data.status === 200) {
        dispatch(actions.logIn(params));
      }
    } catch {
      dispatch(actions.logInFail('Invalid username or password'));
    }
  };
};
