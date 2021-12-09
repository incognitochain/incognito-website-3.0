import httpAppService from '@services/rpcClient/rpchttpappservice';
import httpCoinService from '@services/rpcClient/rpchttpcoinservice';
import { CustomTokenBuilder, PTokensBuilder } from '@src/app-redux/tokens/Token.builder';
import { IPTokenState } from '@src/app-redux/tokens/Token.type';

export const apiGetPTokenList = async (): Promise<IPTokenState[]> => {
  const pTokens: any = await httpCoinService.apiGetPTokenList();
  return (pTokens || []).map((data: any) => PTokensBuilder(data));
};

export const apiGetCustomTokenList = async () => {
  const customTokens: any = await httpAppService.apiGetCustomTokenList();
  return (customTokens || []).map((data: any) => CustomTokenBuilder(data));
};
