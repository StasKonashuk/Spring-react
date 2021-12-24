import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

export const projectsAPI = {
  getProjects() {
    return instance.get('/projects').then(res => res.data);
  }
};

export const authAPI = {
  login(userName, password) {
    return instance
      .post('/login', { userName, password }, true)
      .then(res => res);
  }
};
