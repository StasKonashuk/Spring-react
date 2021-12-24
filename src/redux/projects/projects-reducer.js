import { SEARCH_PROJECT, GET_PROJECTS } from './projects-constants';

const initialState = {
  projects: [],
  atticProjects: [],
  projectsFooterItems: [],
  value: ''
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS: {
      return {
        ...state,
        projects: action.projects,
        atticProjects: action.atticProjects,
        projectsFooterItems: action.projectsFooterItems
      };
    }
    case SEARCH_PROJECT: {
      return {
        ...state,
        value: action.payload
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
