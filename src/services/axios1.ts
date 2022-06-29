import { camelCaseKeys } from '@utils/camelcase';
import axios, { AxiosError } from 'axios';

const TIMEOUT = 20000;

const HEADERS = { 'Content-Type': 'application/json' };

const createAxiosInstance = ({ baseURL = '' }: { baseURL: string }) => {
  const instance = axios.create({
    baseURL,
    timeout: TIMEOUT,
    headers: {
      ...HEADERS,
    },
  });

  instance.interceptors.request.use(
    (req) => {
      req.headers = {
        ...req.headers,
      };
      return req;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => {
      const data = res?.data?.data;
      const error = res?.data?.Error;
      if (error) {
        return Promise.reject(camelCaseKeys(error));
      }
      return Promise.resolve(data);
    },
    (axiosError: AxiosError) => {
      if (axiosError?.isAxiosError && !axiosError?.response) {
        throw new Error('Send request API failed');
      }
      const { response: { data } = {} } = axiosError;
      const { error } = data || {};
      return Promise.reject(camelCaseKeys(error || axiosError));
    },
  );

  return instance;
};

export default createAxiosInstance;
