import TOKENS_ACTION_TYPES from '@src/app-redux/tokens/Token.actionNames';
import { ITokenState } from '@src/app-redux/tokens/Token.type';

const initialState: ITokenState = {
  pTokens: [],
};

const tokenReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case TOKENS_ACTION_TYPES.SET_PTOKEN_LIST: {
      return {
        ...state,
        pTokens: action.payload || [],
      };
    }
    default:
      return state;
  }
};

export default tokenReducer;
