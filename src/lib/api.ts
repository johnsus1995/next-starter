import axios from 'axios';
import { AxiosRequestHeaders } from 'axios';
import Qs from 'qs';

// import { apiErrorHandler, apiSuccessHandler } from '@/helpers/responseHandler';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL as string,
  withCredentials: true,
  paramsSerializer: {
    serialize: (params) => Qs.stringify(params, { arrayFormat: 'brackets' }),
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('auth_token') || '';

    config.headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...config.headers,
    } as AxiosRequestHeaders;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// axiosInstance.interceptors.response.use(apiSuccessHandler, apiErrorHandler);

export default axiosInstance;
