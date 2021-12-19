import { SEARCH_PROJECT } from './projects-constants';

export const actions = {
  searchProject: proj => ({
    type: SEARCH_PROJECT,
    payload: proj
  })
};
