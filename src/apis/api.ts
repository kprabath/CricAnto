import Axios, {AxiosRequestConfig} from 'axios';
import {store} from '../store/store';
import {startLoading, endLoading} from '../actions/common.action';

const BASE_URL = 'https://cricanto-backend.herokuapp.com/';

interface IRequest {
  url?: string;
  data?: object;
  params?: object;
  action: string;
  guest?: boolean;
  hideLoader?: boolean;
  method?: AxiosRequestConfig['method'];
  headers?: AxiosRequestConfig['headers'];
}

const createPath = (action: string) => {
  const url = `${BASE_URL}${action}`;

  return {url};
};

const getAuthToken = (): string => {
  try {
    const {
      auth: {token},
    } = store.getState();
    const authToken = `Bearer ${token}`;

    return authToken;
  } catch (error) {
    return String(null);
  }
};

const request = ({
  url,
  data,
  params,
  action,
  method,
  guest = false,
  // hideLoader = false,
  headers: addHeaders,
}: IRequest) =>
  new Promise((resolve, reject) => {
    store.dispatch(startLoading());
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': 'application/json',
      ...addHeaders,
    };
    const customUrl = createPath(action);
    const axiosConfig: AxiosRequestConfig = {
      data,
      params,
      headers,
      timeout: 30000,
      method: method || 'post',
      url: url || customUrl.url,
      // cancelToken: AxiosCancelsource.token,
    };

    if (!guest) {
      const authToken = getAuthToken();
      headers.Authorization = authToken;
    }

    Axios(axiosConfig)
      .then(response => {
        console.log(action, data, response);
        resolve(response);

        store.dispatch(endLoading());
      })
      .catch(error => {
        console.log(action, data, error);
        store.dispatch(endLoading());
        reject(error?.response?.data || error);
      });
  });

export default {request};
