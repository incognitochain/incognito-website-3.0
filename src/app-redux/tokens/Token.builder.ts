import { ICustomTokenState, IPTokenState } from '@src/app-redux/tokens/Token.type';

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

export const CustomTokenBuilder = (data: any): ICustomTokenState => {
  const id = data?.TokenID;
  const tokenID = data?.TokenID;
  const image = data?.Image;
  const isPrivacy = data?.IsPrivacy;
  const name = data?.Name;
  const symbol = data?.Symbol;
  const userID = data?.UserID;
  const ownerAddress = data?.OwnerAddress;
  const description = data?.Description;
  const showOwnerAddress = Boolean(data?.ShowOwnerAddress);
  const isOwner = data?.IsOwner;
  const ownerName = data?.OwnerName;
  const ownerEmail = data?.OwnerEmail;
  const ownerWebsite = data?.OwnerWebsite;
  const totalSupply = data?.Amount;
  const verified = data?.Verified || false;
  const amount = 0;
  return {
    id,
    tokenID,
    image,
    isPrivacy,
    name,
    symbol,
    userID,
    ownerAddress,
    description,
    showOwnerAddress,
    isOwner,
    ownerName,
    ownerEmail,
    ownerWebsite,
    totalSupply,
    verified,
    amount,
  };
};
