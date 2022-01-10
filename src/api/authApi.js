import { springApi } from './springApi';

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
