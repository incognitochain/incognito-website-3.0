export interface ITokenState {
  pTokens: IPTokenState[];
  customTokens: ICustomTokenState[];
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
  priceUSDHuman: string;
  change: string;
  pricePrv: number;
  defaultPoolPair: string;
  defaultPairToken: string;
  network: string;
  pName: string;
  changeStr: string;
  image: string;
  isTokenDecrease?: boolean;
}

export interface ICustomTokenState {
  id: string;
  tokenID: string;
  image: string;
  isPrivacy: boolean;
  name: string;
  symbol: string;
  userID: string;
  ownerAddress: string;
  description: string;
  showOwnerAddress: boolean;
  isOwner: boolean;
  ownerName: string;
  ownerEmail: string;
  ownerWebsite: string;
  totalSupply: number;
  verified: boolean;
  amount: number;
}
