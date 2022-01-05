import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProjects } from './projects-reducer';
import { projectsAPI } from '../../api/projectsApi';

export const getProjectsThunk = createAsyncThunk(
  'projects/getprojects',
  async (_, { dispatch }) => {
    try {
      const data = await projectsAPI.getProjects();
      const projects = JSON.parse(JSON.stringify(data));
      dispatch(
        getProjects({
          projects
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
);
