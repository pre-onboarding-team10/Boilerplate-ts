import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

type ApiRequestType = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  post: <T, D>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
};

const apiRequest: ApiRequestType = {
  get: (url, request) => baseInstance.get(url, request),
  post: (url, data, config) => baseInstance.post(url, data, config),
  delete: (url, request) => baseInstance.delete(url, request),
};

export default apiRequest;
