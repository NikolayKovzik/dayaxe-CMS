import axios, { InternalAxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:4000';

export const $api = axios.create({
  baseURL: API_URL,
});

export const $authApi = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('DayaxeAuthToken')}`;
  return config;
}

$authApi.interceptors.request.use(authInterceptor);
