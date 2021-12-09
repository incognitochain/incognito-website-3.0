export interface IPoolState {
  pools: IPoolItemState[];
}

export interface IPoolItemState {
  poolID: string;
  token1ID: string;
  token2ID: string;
  token1Value: number;
  token2Value: number;
  virtual1Value: number;
  virtual2Value: number;
  totalShare: number;
  amp: number;
  price: number;
  volume: number;
  priceChange24h: number;
  apy: number;
  isVerify: boolean;
}
