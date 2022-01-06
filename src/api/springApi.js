import axios from 'axios';

const springApi = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

springApi.interceptors.request.use(config => {
  const token = localStorage.getItem('access');
  const configHeader = config;
  configHeader.headers.Authorization = `Bearer ${token}`;
  return configHeader;
});

export default springApi;
