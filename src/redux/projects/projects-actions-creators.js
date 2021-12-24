import { SEARCH_PROJECT, GET_PROJECTS } from './projects-constants';

export const actions = {
  searchProject: proj => ({
    type: SEARCH_PROJECT,
    payload: proj
  }),
  getProjects: (proj, atticproj, footerproj) => ({
    type: GET_PROJECTS,
    projects: proj,
    atticProjects: atticproj,
    projectsFooterItems: footerproj
  })
};
