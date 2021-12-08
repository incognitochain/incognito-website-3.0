import { IPTokenState } from '@src/app-redux/tokens/Token.type';

export const PTokensBuilder = (data: any): IPTokenState => {
  const pairPrv = data?.CurrentPrvPool !== 0;
  const id = data.ID;
  const address = data.ContractID;
  const tokenId = data.TokenID;
  const symbol = data.Symbol;
  const name = data.Name;
  const contractId = data.ContractID;
  const decimals = data.Decimals;
  const pDecimals = data.PDecimals;
  const type = data.Type; // coin or token
  const pSymbol = data.PSymbol;
  const verified = data.Verified;
  const currencyType = data.CurrencyType; // including ERC20, BEP1, BEP2,...
  const priceUsd = data?.PriceUsd;
  const change = data?.PercentChange24h || '';
  const pricePrv = data?.PricePrv || 0;
  const defaultPoolPair = data?.DefaultPoolPair;
  const defaultPairToken = data?.DefaultPairToken;
  const network = data?.Network;

  return {
    pairPrv,
    id,
    address,
    tokenId,
    symbol,
    name,
    contractId,
    decimals,
    pDecimals,
    type,
    pSymbol,
    verified,
    currencyType,
    priceUsd,
    change,
    pricePrv,
    defaultPoolPair,
    defaultPairToken,
    network,
  };
};
