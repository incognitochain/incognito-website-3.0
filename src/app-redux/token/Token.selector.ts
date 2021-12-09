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
  const { PRV_TOKEN_ID, BTC_TOKEN_ID, ETH_TOKEN_ID, BNB_TOKEN_ID, XMR_TOKEN_ID } =
    TokenConstant;
  const PRIORITY_LIST: string[] = [
    PRV_TOKEN_ID,
    BTC_TOKEN_ID,
    ETH_TOKEN_ID,
    BNB_TOKEN_ID,
    XMR_TOKEN_ID,
  ];
  const sortPriority = pTokens.map((token) => {
    let priority = PRIORITY_LIST.indexOf(token?.tokenId);
    priority = priority > -1 ? priority : PRIORITY_LIST.length;
    return {
      ...token,
      priority,
      verified: token.verified,
    };
  });
  const res = orderBy(sortPriority, 'priority', 'asc').slice(0, 10);
  return res;
});
