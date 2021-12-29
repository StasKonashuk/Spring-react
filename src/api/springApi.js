import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const springApi = createApi({
  reducerPath: 'springApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL
  }),
  endpoints: build => ({
    getProjects: build.query({
      query: () => 'projects'
    }),
    auth: build.mutation({
      query: ({ userName, password }) => ({
        url: 'login',
        method: 'POST',
        body: { userName, password }
      })
    })
  })
});

export const { useGetProjectsQuery, useAuthMutation } = springApi;
