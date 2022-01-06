import springApi from './springApi';

export const authAPI = {
  login({ userName, password }) {
    return springApi
      .post('/api/login', { userName, password })
      .then(res => res)
      .catch(error => error.response);
  },
  signUp({ userName, password, repeatPassword, firstName, lastName, age }) {
    return springApi
      .post('/api/registration', {
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
    return springApi.delete('/api/refresh-token');
  },
  refresh() {
    return springApi.get('/api/refresh-token').then(res => res.data);
  }
};
