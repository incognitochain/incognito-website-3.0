import TOKENS_ACTION_TYPES from '@src/app-redux/token/Token.actionNames';
import { ITokenState } from '@src/app-redux/token/Token.type';
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const initialState: ITokenState = {
  pTokens: [],
  customTokens: [],
};

const tokenReducer = (
  state = initialState,
  action: { type: string; payload: any },
): Reducer & any => {
  switch (action.type) {
    case TOKENS_ACTION_TYPES.SET_PTOKEN_LIST: {
      return {
        ...state,
        pTokens: action.payload || [],
      };
    }
    case TOKENS_ACTION_TYPES.SET_CUSTOM_TOKEN_LIST: {
      return {
        ...state,
        customTokens: action.payload || [],
      };
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: 'token',
  whitelist: ['pTokens'],
  storage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, tokenReducer);
