import TOKENS_ACTION_TYPES from '@src/app-redux/tokens/Token.actionNames';
import {
  apiGetCustomTokenList,
  apiGetPTokenList,
} from '@src/app-redux/tokens/Token.services';
import { ICustomTokenState, IPTokenState } from '@src/app-redux/tokens/Token.type';
import { Dispatch } from 'react';

const actionSetPTokens = (payload: IPTokenState[]) => ({
  type: TOKENS_ACTION_TYPES.SET_PTOKEN_LIST,
  payload,
});

const actionSetCustomTokens = (payload: ICustomTokenState[]) => ({
  type: TOKENS_ACTION_TYPES.SET_CUSTOM_TOKEN_LIST,
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

export const actionGetCustomTokens = () => async (dispatch: Dispatch<any>) => {
  try {
    const customTokens = await apiGetCustomTokenList();
    dispatch(actionSetCustomTokens(customTokens));
  } catch (e) {
    console.log('actionGetCustomTokens error: ', e);
  }
};
