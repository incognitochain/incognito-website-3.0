import httpCoinService from '@services/rpcClient/rpchttpcoinservice';
import { PTokensBuilder } from '@src/app-redux/tokens/Token.builder';
import { IPTokenState } from '@src/app-redux/tokens/Token.type';

export const apiGetPTokenList = async (): Promise<IPTokenState[]> => {
  const pTokens: any = await httpCoinService.apiGetPTokenList();
  return (pTokens || []).map((data: any) => PTokensBuilder(data));
};
