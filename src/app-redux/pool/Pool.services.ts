import httpCoinService from '@services/rpcClient/rpchttpcoinservice';
import { IPoolItemState } from '@src/app-redux/pool/Pool.type';
import { camelCaseKeys } from '@src/utils';

export const apiGetPoolList = async (): Promise<IPoolItemState[]> => {
  const pTokens: any = await httpCoinService.apiGetPTokenList();
  return (pTokens || []).map((data: any) => camelCaseKeys(data));
};
