import { ENVS } from '@configs/Configs.env';
import createAxiosInstance from '@services/axios';
import { AxiosInstance } from 'axios';

class RpcHttpAppClient {
  http: AxiosInstance;
  constructor() {
    const url = ENVS.REACT_APP_SERVICE_URL;
    this.http = createAxiosInstance({ baseURL: url });
  }
  apiGetCustomTokenList() {
    return this.http.get('pcustomtoken/list');
  }
}

const httpAppService = new RpcHttpAppClient();

export default httpAppService;
