import POOL_ACTION_TYPES from '@src/app-redux/pool/Pool.actionNames';
import { IPoolState } from '@src/app-redux/pool/Pool.type';

const initialState: IPoolState = {
  pools: [],
};

const poolReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case POOL_ACTION_TYPES.SET_POOL_LIST: {
      return {
        ...state,
        pools: action.payload || [],
      };
    }
    default:
      return state;
  }
};

export default poolReducer;
