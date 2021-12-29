import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { springApi } from '../api/springApi';
import auth from './auth/auth-reducer';

export const store = configureStore({
  reducer: {
    [springApi.reducerPath]: springApi.reducer,
    auth
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(springApi.middleware)
});

setupListeners(store.dispatch);
