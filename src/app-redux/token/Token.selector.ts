import { IRootState } from '@src/app-redux/interface';
import { ITokenState } from '@src/app-redux/token/Token.type';
import { TokenConstant } from '@src/common';
import orderBy from 'lodash/orderBy';
import { createSelector } from 'reselect';
const tokenSelector = createSelector(
  (state: IRootState) => state.token,
  (tokens: ITokenState) => tokens,
);

export const pTokenSelector = createSelector(tokenSelector, (tokens) => tokens.pTokens);

export const pCustomTokenSelector = createSelector(
  tokenSelector,
  (tokens) => tokens.customTokens,
);

export const mainPTokenSelector = createSelector(pTokenSelector, (pTokens) => {
  // prv, btc, eth, bnb, dai, ltc, xmr, zec, usdc, dash, usdt, doge, busd, bat, link, neo, zil
  const PRIORITY_LIST: string[] = TokenConstant.PRIORITY_TOKEN_ID;
  const sortPriority = pTokens
    .filter(({ tokenId }) => PRIORITY_LIST.includes(tokenId))
    .map((token) => {
      let priority = PRIORITY_LIST.indexOf(token?.tokenId);
      priority = priority > -1 ? priority : PRIORITY_LIST.length;
      return {
        ...token,
        priority,
        verified: token.verified,
      };
    });
  const res = orderBy(sortPriority, ['priority'], ['asc']);
  return res;
});
