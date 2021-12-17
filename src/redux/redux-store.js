import { combineReducers, createStore } from 'redux';
import projectsReducer from './projects-reducer';

const reducers = combineReducers({
  projects: projectsReducer
});
const store = createStore(reducers);

export default store;
