import { IRootState } from '@src/app-redux/interface';
import { IConfigsState } from '@src/configs';
import { IStructure, translateByLanguage } from '@src/i18';
import { createSelector } from 'reselect';

export const configsSelector = createSelector(
  (state: IRootState) => state.configs,
  (configs: IConfigsState) => configs,
);

export const translateSelector = createSelector(configsSelector, (configs) =>
  translateByLanguage(configs.language),
);

export const marketTranslateSelector = createSelector(
  translateSelector,
  (translate) => translate.market,
);

export const peggingAppTranslateSelector = createSelector(
  translateSelector,
  (translate) => translate.peggingApp,
);

export const structureTranslateSelector = createSelector(
  translateSelector,
  (translate): IStructure => translate.structure,
);
