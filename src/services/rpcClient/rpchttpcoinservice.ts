import { ENVS } from '@configs/Configs.env';
import createAxiosInstance from '@services/axios';
import { TokenConstant } from '@src/common';
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
    const PRIORITY_LIST: string[] = TokenConstant.PRIORITY_TOKEN_ID;
    return this.http.post('coins/tokeninfo', {
      TokenIDs: PRIORITY_LIST,
    });
  }
}

const httpCoinService = new RpcHttpCoinServiceClient();

export default httpCoinService;
