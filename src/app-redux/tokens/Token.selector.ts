import { IRootState } from '@src/app-redux/interface';
import { ITokenState } from '@src/app-redux/tokens/Token.type';
import { createSelector } from 'reselect';

const tokenSelector = createSelector(
  (state: IRootState) => state.tokens,
  (tokens: ITokenState) => tokens,
);

export const pTokenSelector = createSelector(tokenSelector, (tokens) => tokens.pTokens);

export const pCustomTokenSelector = createSelector(
  tokenSelector,
  (tokens) => tokens.customTokens,
);
