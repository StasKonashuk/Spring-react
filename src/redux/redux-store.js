import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import projectsReducer from './projects/projects-reducer';
import authReducer from './auth/auth-reducer';

const reducers = combineReducers({
  projects: projectsReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
