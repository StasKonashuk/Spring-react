import { actions } from './projects-actions-creators';
import { projectsAPI } from '../../api/api';

export const getProjects = () => async dispatch => {
  try {
    const data = await projectsAPI.getProjects();
    dispatch(
      actions.getProjects(
        data.projects,
        data.atticProjects,
        data.projectsFooterItems
      )
    );
  } catch (error) {
    console.log(error);
  }
};
