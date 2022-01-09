import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const fetchWithIntercepts = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const springApi = createApi({
  reducerPath: 'springApi',
  baseQuery: fetchWithIntercepts,
  endpoints: () => ({})
});
