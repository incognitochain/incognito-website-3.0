import { ENVS } from '@configs/Configs.env';
import createAxiosInstance from '@services/axios1';
import { AxiosInstance } from 'axios';

class ApiExplorerService {
  http: AxiosInstance;
  constructor() {
    const url = ENVS.REACT_APP_EXPLORER_SERVICE_URL;
    this.http = createAxiosInstance({ baseURL: url });
  }

  async getLandingValidatorData(): Promise<any> {
    return await this.http.get('api/v1/explorer/landing-validator-data');
  }
}

const apiExplorerService = new ApiExplorerService();

export default apiExplorerService;
