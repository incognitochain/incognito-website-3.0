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
  name: string;
  lastPrice: string;
  change24h: string;
  youCanTradeCrypto: string;
  getStartedIn: string;
  volumeTraded: string;
  anonymousTrades: string;
  privateCryptocurrencies: string;
  bridgedBlockchains: string;
}
