import TOKENS_ACTION_TYPES from '@src/app-redux/tokens/Token.actionNames';
import { apiGetPTokenList } from '@src/app-redux/tokens/Token.services';
import { IPTokenState } from '@src/app-redux/tokens/Token.type';
import { Dispatch } from 'react';

const actionSetPTokens = (payload: IPTokenState[]) => ({
  type: TOKENS_ACTION_TYPES.SET_PTOKEN_LIST,
  payload,
});

export const actionGetPTokens = () => async (dispatch: Dispatch<any>) => {
  try {
    const pTokens = await apiGetPTokenList();
    dispatch(actionSetPTokens(pTokens));
  } catch (e) {
    console.log('actionGetPTokens error: ', e);
  }
};
