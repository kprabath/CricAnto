
import Axios, {AxiosRequestConfig} from 'axios';
import {store} from '../store/store';
import {startLoading, endLoading} from '../actions/common.action';

const BASE_URL = 'https://cricketchampx.com/v1/api';

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

// const getAuthToken = () => {
//   try {
//     const {
//       auth: {token},
//     } = store.getState();
//     const authToken = `${token?.tokenType} ${token?.accessToken}`;

//     return authToken;
//   } catch (error) {
//     return null;
//   }
// };

const request = ({
  url,
  data,
  params,
  action,
  method,
  // guest = false,
  // hideLoader = false,
  headers: addHeaders,
}: IRequest) =>
  new Promise((resolve, reject) => {
    store.dispatch(startLoading());
    // const { user, common } = store.getState() as Reducers;
    const headers = {
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

    Axios(axiosConfig)
      .then(response => {
        resolve(response.data);
        store.dispatch(endLoading());
      })
      .catch(error => {
        // console.log(error?.response?.data || error, '333');
        store.dispatch(endLoading());
        reject(error?.response?.data || error);
      });
  });

export default {request};
