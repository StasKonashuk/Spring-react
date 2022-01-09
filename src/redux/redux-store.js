import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { springApi } from '../api/springApi';
import auth from './auth/auth-reducer';
import projects from './projects/projects-reducer';

export const store = configureStore({
  reducer: {
    auth,
    projects,
    [springApi.reducerPath]: springApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(springApi.middleware)
});

setupListeners(store.dispatch);
