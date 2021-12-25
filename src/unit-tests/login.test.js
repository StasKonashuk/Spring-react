import { logIn } from '../redux/auth/auth-thunks-creators';
import { actions } from '../redux/auth/auth-actions-creators';
import { authAPI } from '../api/api';

jest.mock('../api/api');
const authAPIMock = authAPI;

describe('loginThunk', () => {
  test('dispatch a login action', async () => {
    const thunk = logIn('admin', '1234');
    const dispatchMock = jest.fn();
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(1);
  });
  describe('when login succeeds', () => {
    beforeEach(() => {
      authAPIMock.login.mockResolvedValue({
        status: 200
      });
    });
    test('dispatch success', async () => {
      const thunk = logIn({ userName: 'admin', password: '1234' });
      const dispatchMock = jest.fn();
      await thunk(dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(
        actions.logIn({ userName: 'admin', password: '1234' })
      );
    });
  });
  describe('when login fails', () => {
    const error = 'Invalid username or password';
    beforeEach(() => {
      authAPIMock.login.mockRejectedValue(error);
    });
    test('dispatches failure', async () => {
      const thunk = logIn('admin', '12345');
      const dispatchMock = jest.fn();
      await thunk(dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(actions.logInFail(error));
    });
  });
});
