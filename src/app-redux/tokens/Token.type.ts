export interface ITokenState {
  pTokens: IPTokenState[];
}

export interface IPTokenState {
  pairPrv: boolean;
  id: string;
  address: string;
  tokenId: string;
  symbol: string;
  name: string;
  contractId: string;
  decimals: number;
  pDecimals: number;
  type: number; // coin or token
  pSymbol: string;
  verified: boolean;
  currencyType: number; // including ERC20, BEP1, BEP2,...
  priceUsd: number;
  change: string;
  pricePrv: number;
  defaultPoolPair: string;
  defaultPairToken: string;
  network: string;
}
