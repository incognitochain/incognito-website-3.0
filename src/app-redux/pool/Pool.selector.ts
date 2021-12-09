import { IRootState } from '@src/app-redux/interface';
import { IPoolState } from '@src/app-redux/pool/Pool.type';
import { ITokenState } from '@src/app-redux/token/Token.type';
import { createSelector } from 'reselect';

const poolSelector = createSelector(
  (state: IRootState) => state.pool,
  (pool: IPoolState) => pool,
);

export const poolListSelector = createSelector(poolSelector, (pool) => pool.pools);
