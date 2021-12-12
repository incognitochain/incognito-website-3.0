import PRVLogo from '@images/prv-logo.png';
import { ICustomTokenState, IPTokenState } from '@src/app-redux/token/Token.type';
import { Configs, TokenConstant } from '@src/common';
import { Convert } from '@src/utils';
import { formatPrice } from '@utils/convert';
import replace from 'lodash/replace';
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
  let pName;
  if (tokenId === TokenConstant.PRV_TOKEN_ID) {
    pName = 'Private Coin';
  } else {
    pName = `Privacy ${name}`;
  }
  const pSymbol = `p${symbol}`;
  const verified = data.Verified;
  const currencyType = data.CurrencyType; // including ERC20, BEP1, BEP2,...
  const priceUsd = data?.PriceUsd;
  const change = data?.PercentChange24h || '';
  const pricePrv = data?.PricePrv || 0;
  const defaultPoolPair = data?.DefaultPoolPair;
  const defaultPairToken = data?.DefaultPairToken;
  const network = data?.Network;
  const priceUSDHuman = formatPrice({ price: priceUsd });

  const isTokenDecrease = change && change[0] === '-';
  const changeToNumber = Number(replace(change, '-', ''));
  const changeStr =
    changeToNumber === 0
      ? '0%'
      : `${isTokenDecrease ? '-' : '+'}${Convert.amountVer2({
          amount: changeToNumber,
          decimals: 0,
        })}%`;

  let image;
  if (tokenId === TokenConstant.PRV_TOKEN_ID) {
    image = PRVLogo;
  } else {
    image = `${Configs.CRYPTO_ICON_URL}/${symbol}.png`;
  }
  return {
    pairPrv,
    id,
    address,
    tokenId,
    symbol,
    name,
    pName,
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
    priceUSDHuman,
    changeStr,
    image,
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
