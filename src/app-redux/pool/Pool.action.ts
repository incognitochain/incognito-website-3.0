import { apiGetPoolList } from '@src/app-redux/pool/Pool.services';
import { IPoolItemState } from '@src/app-redux/pool/Pool.type';
import TOKENS_ACTION_TYPES from '@src/app-redux/token/Token.actionNames';
import { Dispatch } from 'react';

const actionSetPoolList = (payload: IPoolItemState[]) => ({
  type: TOKENS_ACTION_TYPES.SET_CUSTOM_TOKEN_LIST,
  payload,
});

export const actionGetPoolList = () => async (dispatch: Dispatch<any>) => {
  try {
    const poolList = await apiGetPoolList();
    dispatch(actionSetPoolList(poolList));
  } catch (e) {
    console.log('actionGetPoolList error: ', e);
  }
};
