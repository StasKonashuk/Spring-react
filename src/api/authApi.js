import { springApi } from './springApi';

/* export const authAPI = {
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
}; */

const authApi = springApi.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation({
      query: ({ userName, password }) => ({
        url: '/api/login',
        method: 'post',
        body: { userName, password }
      })
    }),
    signUp: builder.mutation({
      query: ({
        userName,
        password,
        repeatPassword,
        firstName,
        lastName,
        age
      }) => ({
        url: '/api/registration',
        method: 'post',
        body: { userName, password, repeatPassword, firstName, lastName, age }
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/api/refresh-token',
        method: 'delete'
      })
    }),
    refresh: builder.mutation({
      query: token => ({
        url: '/api/refresh-token',
        method: 'post',
        body: { token }
      })
    })
  })
});

export const {
  useLogInMutation,
  useSignUpMutation,
  useLogoutMutation,
  useRefreshMutation
} = authApi;
