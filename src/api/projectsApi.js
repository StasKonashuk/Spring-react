import springApi from './springApi';

export const projectsAPI = {
  getProjects() {
    return springApi.get('/api/projects').then(res => res.data);
  }
};
