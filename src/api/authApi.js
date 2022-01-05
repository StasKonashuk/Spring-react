import springApi from './springApi';

export const authAPI = {
  login({ userName, password }) {
    return springApi
      .post('/login', { userName, password })
      .then(res => res)
      .catch(error => error.response);
  },
  signUp({ userName, password, repeatPassword, firstName, lastName, age }) {
    return springApi
      .post('/registration', {
        userName,
        password,
        repeatPassword,
        firstName,
        lastName,
        age
      })
      .then(res => res)
      .catch(error => error.response);
  },
  logout() {
    return springApi.delete('/refresh_token');
  },
  refresh() {
    return springApi.get('/refresh_token').then(res => res.data);
  }
};
