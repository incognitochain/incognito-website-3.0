import { ENVS } from '@configs/Configs.env';
import createAxiosInstance from '@services/axios';
import { AxiosInstance } from 'axios';

class RpcHttpCoinServiceClient {
  http: AxiosInstance;
  constructor() {
    const url = ENVS.REACT_APP_COIN_SERVICE_URL;
    this.http = createAxiosInstance({ baseURL: url });
  }
  apiGetListPools() {
    return this.http.get('pdex/v3/listpools?pair=all');
  }
  apiGetPTokenList() {
    return this.http.get('coins/tokenlist');
  }
}

const httpCoinService = new RpcHttpCoinServiceClient();

export default httpCoinService;
