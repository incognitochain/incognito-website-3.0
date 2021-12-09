import { IPoolState } from '@src/app-redux/pool/Pool.type';
import { ITokenState } from '@src/app-redux/tokens/Token.type';
import { IConfigsState } from '@src/configs';
import { IThemeState } from '@src/theme';

export interface IAction {
  type: string;
  payload: any;
}

export interface IRootState {
  configs: IConfigsState;
  theme: IThemeState;
  tokens: ITokenState;
  pool: IPoolState;
}
