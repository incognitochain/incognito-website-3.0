import TOKENS_ACTION_TYPES from '@src/app-redux/token/Token.actionNames';
import { ITokenState } from '@src/app-redux/token/Token.type';

const initialState: ITokenState = {
  pTokens: [],
  customTokens: [],
};

const tokenReducer = (state = initialState, action: { type: string; payload: any }) => {
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

export default tokenReducer;
