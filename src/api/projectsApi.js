import { springApi } from './springApi';

export const projectsAPI = springApi.injectEndpoints({
  endpoints: builder => ({
    getProjects: builder.query({
      query: () => ({
        url: '/api/projects'
      })
    })
  })
});

export const { useGetProjectsQuery } = projectsAPI;
