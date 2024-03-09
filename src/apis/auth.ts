import { AxiosResponse } from 'axios';

import axiosInstance from '@/lib/api';

export const register = (config = {}): Promise<AxiosResponse> => {
  return axiosInstance({
    url: '/store/customers ',
    method: 'POST',
    ...config,
  });
};

export const login = (config = {}): Promise<AxiosResponse> => {
  return axiosInstance({
    url: '/store/customers ',
    method: 'POST',
    ...config,
  });
};

export const getPosts = (config = {}): Promise<AxiosResponse> => {
  return axiosInstance({
    url: '/posts ',
    method: 'GET',
    ...config,
  });
};
