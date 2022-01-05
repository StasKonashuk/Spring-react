import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import auth from './auth/auth-reducer';
import projects from './projects/projects-reducer';

export const store = configureStore({
  reducer: {
    auth,
    projects
  }
});

setupListeners(store.dispatch);
