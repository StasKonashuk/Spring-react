import axios from 'axios';

const springApi = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

springApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  return config;
});

export default springApi;
