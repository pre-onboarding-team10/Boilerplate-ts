import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { TodoInputType } from '../types/types';

type BaseInstance = {
  url: string;
  data?: TodoInputType;
  config?: AxiosRequestConfig;
};

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: ({ url, config }: BaseInstance) => baseInstance.get(url, config),
  delete: ({ url, config }: BaseInstance) => baseInstance.delete(url, config),
  post: ({ url, data, config }: BaseInstance) =>
    baseInstance.post(url, data, config),
};

export default apiRequest;
