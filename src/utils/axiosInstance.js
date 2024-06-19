import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/'
  // baseURL: 'http://JoseonbackApp-env.eba-jqirxxdp.ap-northeast-2.elasticbeanstalk.com/api/'
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const accessToken = token && token.authorization;
  const refreshToken = token && token.refreshToken;
  if (accessToken) {
    config.headers['Authorization'] = accessToken;
  }
  if (refreshToken) {
    config.headers['Refresh-Token'] = refreshToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;
