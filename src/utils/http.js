import axios from 'axios';
// import { getToken } from './token';

// instantiate axios
const http = axios.create({
  baseURL: 'https://api.openweathermap.org',
  timeout: 5000,
});

// request interceptor
http.interceptors.request.use(
  (config) => {
    // const token = getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
http.interceptors.response.use(
  // status code 200
  (response) => response,
  // status code not equal to 200
  (error) => Promise.reject(error)
);

export { http };
