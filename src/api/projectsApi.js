import springApi from './springApi';

export const projectsAPI = {
  getProjects() {
    return springApi.get('/projects').then(res => res.data);
  }
};
