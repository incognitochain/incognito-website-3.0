export interface ILanguage {
  [key: string]: any;
  market: IMarket;
}

export interface IMarket {
  mainTitle: any;
  untraceable: string;
  untraceableDetail: string;
  unlinkable: string;
  unlinkableDetail: string;
  commissionFree: string;
  commissionFreeDetail: string;
  privacyMarket: string;
}
